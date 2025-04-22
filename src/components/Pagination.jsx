import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Products from "./Products";

// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {
  return (
    <div className="w-full flex flex-wrap">
      {currentItems &&
        // eslint-disable-next-line react/prop-types
        currentItems.map((item) => (
          <div className="w-1/3" key={item.id}>
            <Products
              item={item}
              imgSrc={item.images} // Corrected image key
              badgeText={item.category}
              text3={item.title.slice(0, 20)}
              text4={`$${item.price}`} // Added price formatting
              text5={"Rating: " + " ⭐ " + item.rating}
            />
          </div>
        ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Pagination({ itemsPerPage }) {
  const [all, setAll] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=200");
        setAll(response.data.products); // Correctly extract products array
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      }
    }
    getData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = all.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(all.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % all.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-between my-[50px]">
        <ReactPaginate
          breakLabel=". . ."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex space-x-3 text-[#767676]"
          activeLinkClassName=" bg-[#262626] text-white"
          pageLinkClassName="drop-shadow-2xl outline outline-1 outline-gray-200 outline-offset-1 py-[10px] px-[20px]"
          previousLabel=""
          nextLabel=""
        />
        <h2 className="pt-[8px]">
          Products from {itemOffset + 1} to{" "}
          {endOffset < all.length ? endOffset : all.length} of {all.length}
        </h2>
      </div>
    </>
  );
};

export default Pagination;
