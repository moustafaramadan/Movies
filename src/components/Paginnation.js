import React from "react";
import ReactPaginate from "react-paginate";
const Paginnation = ({handlePageClick, pageCount, currentPage}) => {

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=" >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="< "
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      forcePage = {currentPage}
    />
  );
};

export default Paginnation;
