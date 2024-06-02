import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../movies-api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPopularMovies();
        setPopularMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <h1>List of the most popular movies today</h1>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {popularMovies.length > 0 && <MovieList movies={popularMovies} />}
    </>
  );
}
