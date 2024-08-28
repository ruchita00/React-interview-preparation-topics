import React, { useEffect, useState } from "react";

const InifiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`
      );
      const data = await res.json();
      setProducts(data);
      setPage(page + 1);
    } catch (err) {
      console.log("err", err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const myThrottle = (cb, d) => {
    return (...args) => {
      let last = 0;
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
  };
  const handleInfiniteScroll = myThrottle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight &&
      !loading
    ) {
      fetchData();
    }
  }, 500);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [handleInfiniteScroll]);
  const { products: allProducts } = products;

  return (
    <div>
      {allProducts?.length > 0 && (
        <div className="products">
          {allProducts?.map((prod, index) => {
            return (
              <div key={index} className="products_item">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {loading && <p>loading</p>}
    </div>
  );
};

export default InifiniteScroll;
