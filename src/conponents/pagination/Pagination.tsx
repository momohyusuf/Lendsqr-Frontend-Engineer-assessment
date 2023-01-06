import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { updateCurrentPage } from '../../features/user/userSlice';
import './pagination.scss';

import { useSelector, useDispatch } from 'react-redux';

export const Pagination = () => {
  const [pageCount, setPageCount] = useState(Math.ceil(100 / 10));
  const dispatch = useDispatch();
  const handlePageClick = async (data: any) => {
    console.log(data.selected + 1);
    dispatch(updateCurrentPage(data.selected + 1));

    // scroll to the top
    //window.scrollTo(0, 0)
  };

  return (
    <>
      <div>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </>
  );
};
