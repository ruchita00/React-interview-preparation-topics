import React, { useState } from "react";

const dummyData = [
  {
    id: "1",
    title: "ms",
    firstName: "tina",
    lastName: "sagalgile",
    product: "laptop",
    quntity: 50,
    range: "10",
  },
  {
    id: "2",
    title: "mr",
    firstName: "rina",
    lastName: "sah",
    product: "phone",
    quntity: 150,
    range: "20",
  },
  {
    id: "3",
    title: "mr",
    firstName: "cina",
    lastName: "salave",
    product: "mobile",
    quntity: 100,
    range: "13",
  },
  {
    id: "4",
    title: "ms",
    firstName: "tina",
    lastName: "sgile",
    product: "laptop",
    quntity: 50,
    range: "10",
  },
  {
    id: "5",
    title: "mr",
    firstName: "tina",
    lastName: "chijnn",
    product: "mobile",
    quntity: 20,
    range: "10",
  },
];
const SearchFilter = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    quntity: "",
    range: "",
    title: "",
    product: "",
  });
  const [data, setData] = useState(dummyData);

  const filtredData = data.filter((item) => {
    return (
      (filters.title === "" || item.title === filters.title) &&
      (filters.firstName === "" ||
        item.firstName.includes(filters.firstName)) &&
      (filters.lastName === "" || item.lastName.includes(filters.lastName)) &&
      (filters.quntity === "" || item.quntity.toString() === filters.quntity) &&
      (filters.range === "" || item.range === filters.range) &&
      (filters.product === "" || item.product === filters.product)
    );
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <select name="title" onChange={handleChange} value={filters.title}>
          <option value="">all</option>
          {[...new Set(data.map((item) => item.title))].map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
        <label>firstName:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="firstname"
          value={filters.firstName}
        />
        <label>lastName:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="lastName"
          value={filters.lastName}
        />
        <select onChange={handleChange} value={filters.quntity} name="quntity">
          <option value="">all</option>
          {[...new Set(data.map((item) => item.quntity))].map(
            (quntity, indx) => {
              return (
                <option key={indx} value={quntity}>
                  {quntity.toString()}
                </option>
              );
            }
          )}
        </select>
        <select value={filters.range} name="range" onChange={handleChange}>
          <option value="">all</option>
          {[...new Set(data.map((item) => item.range))].map((range, index) => {
            return (
              <option value={range} key={index}>
                {range}
              </option>
            );
          })}
        </select>
        <select value={filters.product} name="product" onChange={handleChange}>
          <option value="">all</option>
          {[...new Set(data.map((item) => item.product))].map(
            (product, index) => {
              return (
                <option value={product} key={index}>
                  {product}
                </option>
              );
            }
          )}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>quntity</th>
            <th>product</th>
            <th>range</th>
          </tr>
        </thead>
        <tbody>
          {filtredData?.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.quntity}</td>
              <td>{item.product}</td>
              <td>{item.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchFilter;
