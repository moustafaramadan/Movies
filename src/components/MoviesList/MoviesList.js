import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import Paginnation from "../Paginnation";
import "./MoviesList.css"

const MoviesList = ({ movies, getpages, pageCount, handlePageClick , currentPage}) => {
  return (
    <Row className="my-3">
      {movies.length ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center">لا يوجد أفلام </h2>
      )}
      <Paginnation getpages={getpages} pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage} />
    </Row>
  );
};

export default MoviesList;
