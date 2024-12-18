import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async (searchValue) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      setProducts(data.products); // Corrected to access 'products' array from response
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.trim()) {
      fetchData(value); // Fetch data only if search value is not empty
    } else {
      setProducts([]); // Clear results when search input is empty
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="flex items-center relative py-4">
          <input
            type="text"
            placeholder="Search Products"
            value={searchValue}
            onChange={handleSearch}
            className="w-[150px] sm:w-[200px] md:w-[400px] lg:w-[600px] h-12 px-3 py-2 border bg-white text-gray-700 rounded-md"
          />
          <IoSearch className="absolute right-5 cursor-pointer text-gray-500" />
        </div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : products.length > 0 ? (
            <div>
              {products.map((product) => (
                <div key={product.id} className="p-2 border-b">
                  <p>{product.title}</p>
                </div>
              ))}
            </div>
          ) : searchValue ? (
            <div>No products found</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Search;
