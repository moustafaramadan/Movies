import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import axios from "axios";
import "./Movie.css"
import { Link, useParams } from 'react-router-dom'
const Movie = () => {
    const param= useParams()
    const [move, setMove] = useState([])
    const getDetails = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${param.id}?api_key=98d0e56ee3c47d6e6bce07a03362d321&language=ar`        );
        setMove(res.data);
      };
      useEffect(()=>{
        getDetails ()
      })
  return (
    <>
      <Row className="mDetails mt-4">
        <Col md="3 text-center">
          <img src={`https://image.tmdb.org/t/p/w500`+ move.poster_path} alt="Movie" className='custom-poster '/>
        </Col>
        <Col md="9" className="text-center mt-5">
          <h4> اسم الفيلم : {move.title} </h4>
          <h4> تاريخ الفيلم : {move.release_date} </h4>
          <h4> عدد المقيمين : {move.vote_count} </h4>
          <h4> التقييم : {move.vote_average} </h4>
        </Col>
      </Row>
      <Row className="mDetails mt-2 custom-story">
        <h3 className="border-story"> القصة</h3>
        <p> {move.overview} </p>
      </Row>
      <Row>
        <div className="botons">
          <Link to="/">
            <Button> عودة للرئيسية </Button>
          </Link>

        </div>
      </Row>
    </>
  );
}

export default Movie
