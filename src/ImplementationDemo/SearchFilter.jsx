import React, { useState, useEffect } from "react";

const SearchFilter = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const productdata = await response.json();
      console.log(productdata);
      setProducts(productdata);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const handleProductSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilterProduct = (event) => {
    setFilterValue(event.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const searchedProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
    console.log(searchedProducts);
  }, [searchText, products]);

  useEffect(() => {
    const filtered = products.filter((item) =>
      filterValue ? item.category === filterValue : true
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  }, [filterValue, products]);

  // useEffect(() => {
  //   const filtered = products
  //     .filter((item) => {
  //       // Apply category filter if selected
  //       if (filterValue && item.category !== filterValue) {
  //         return false;
  //       }
  //       // Apply search filter (case insensitive)
  //       return item.title.toLowerCase().includes(searchText.toLowerCase());
  //     });

  //   setFilteredProducts(filtered);
  // }, [searchText, filterValue, products]);

  if (loading) {
    return <label>Loading...</label>;
  }
  if (error) {
    return <label>Error...</label>;
  }
  if (filteredProducts.length == 0) {
    return <label>No products...</label>;
  }

  if (filteredProducts) {
    return (
      <div>
        <div>
          <label>Search product: </label>
          <input
            name="search"
            value={searchText}
            onChange={handleProductSearch}
            type="text"
            placeholder="Search product here.."
          />
        </div>

        <div>
          <label>Choose a filter: </label>
          <select
            // value={filterValue}
            onChange={handleFilterProduct}
            defaultValue={""}
          >
            <option value=""></option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>

        <h2>Products from API: </h2>
        <ol>
          {filteredProducts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      </div>
    );
  }
};

export default SearchFilter;
