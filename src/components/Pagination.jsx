// import React  from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import MyProduct from './MyProduct';
import Flex from './Flex';
import axios from 'axios';

// Example items, to simulate fetching from another resources.
const items = [];

function Items({ currentItems }) {
  return (
    <>
      <Flex className={'flex-wrap'}>
      {currentItems &&
        currentItems.map((item) => (
          <div className='w-1/3'>
            <MyProduct />
          </div>
        ))}
      </Flex>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  let [all,setAll]=useState([])
  useEffect(()=>{
  async function all() {
  let data = await axios.get("https://api.escuelajs.co/api/v1/products");
  
  
  setAll(data.data)
  
  }
  all()
  },[]) 
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pagination;



