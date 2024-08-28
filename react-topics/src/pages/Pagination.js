import React, { useEffect, useState } from "react";
import "../style/Pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await res.json();
      setProducts(data.products);
      console.log(data.products.title);
    } catch (err) {
      console.log("err", err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePagination = (selectedPage) => {
    if (
      selectedPage !== page &&
      selectedPage >= 1 &&
      selectedPage <= products.length / 10
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10)?.map((prod, index) => (
            <div className="products_item" key={index}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </div>
          ))}
        </div>
      )}{" "}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={`${page > 1 ? "" : "pagination_selected"}`}
            onClick={() => handlePagination(page - 1)}
          >
            ◀
          </span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              className={`${page === i + 1 ? "pagination_selected" : ""}`}
              onClick={() => handlePagination(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={`${
              page < products.length / 10 ? "" : "pagination_disnaled"
            }`}
            onClick={() => handlePagination(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
      {loading && <p>loading</p>}
    </div>
  );
};

export default Pagination;
