import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchMovie } from '../../movies-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleChange = value => {
    searchParams.set('query', value);
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchSearchMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getSearchMovie(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchMovies();
  }, [query]);

  return (
    <>
      <h1>Movie Search: Find Your Favorite Films by Title!</h1>
      <p>
        Welcome to our film library! Here, you can search for movies by their
        titles and enjoy a plethora of cinematic masterpieces from around the
        world. Our website offers a wide range of films across various genres,
        from the latest releases to classic gems. Simply enter the movie title
        in the search field, and we`ll find it for you! Let movies become your
        favorite pastime.
      </p>
      <SearchForm values={query} onSubmit={handleChange} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
