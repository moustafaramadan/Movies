import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import MoviesList from "./components/MoviesList/MoviesList";
import Movie from "./components/Movie/Movie";
import axios from "axios";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // get all movies:
  const getMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=98d0e56ee3c47d6e6bce07a03362d321&language=ar"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  const getpages = async (page, data) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=98d0e56ee3c47d6e6bce07a03362d321&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getMovies();
      setCurrentPage(0);
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=98d0e56ee3c47d6e6bce07a03362d321&language=en-US&query=${word}`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
      setCurrentPage(0);
    }
  };
  const onSearch = (word) => {
    search(word);
  };
  const handlePageClick = (data) => {
    getpages(data.selected + 1);
    setCurrentPage(data.selected);
  };
  return (
    <div>
      <NavBar onSearch={onSearch} />

      <Container>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getpages={getpages}
                  pageCount={pageCount}
                  handlePageClick={handlePageClick}
                  currentPage={currentPage}
                />
              }
            />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
