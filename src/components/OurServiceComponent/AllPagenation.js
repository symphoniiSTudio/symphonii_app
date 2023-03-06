import "./Allpagenation.css";
import React, { useState } from "react";
import JsonData from "../../MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

// import {Link} from 'react-router-dom'

function AllPagenation() {
  const [services] = useState(JsonData.slice(0, 48));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = services
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((service) => {
      return (
        <>
          <Link to={service.path}>
            <div class="container4">
              <div
                className="serviceimage"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="servicetitle"></div>
              </div>
              <div class="overlayservice">
                <div class="text">
                  <div className="servicetitle1">{service.title}</div>
                  <div className="servicesdiscription">
                    {service.discription}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </>
      );
    });

  const pageCount = Math.ceil(services.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="Appmain">{displayUsers}</div>

      <div className="PagnationDiv">
        <ReactPaginate
          previousLabel={"Next"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}

export default AllPagenation;
