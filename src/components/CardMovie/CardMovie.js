import React from "react";
import { Col } from "react-bootstrap";
import "./CardMovie.css";
import { Link } from "react-router-dom";
const CardMovie = ({mov}) => {
  return (
    <Col md="3">
      <Link to={`/movie/${mov.id}`}>
      <div className="card mt-3">
        <img src={`https://image.tmdb.org/t/p/w500`+ mov.poster_path} alt="Movie"/>
        <div className="overlay">
          <div className="overlay-text">
            <p> اسم الفيلم: {mov.title}</p>
            <p> تاريخ الاصدار : {mov.release_date}</p>
            <p> عدد المقيمين : {mov.vote_count}</p>
            <p> التقييم : {mov.vote_average}</p>
          </div>
        </div>
      </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
