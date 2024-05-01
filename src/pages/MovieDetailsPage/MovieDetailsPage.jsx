import { useState, useEffect, useRef, Suspense } from 'react';
import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesById } from '../../movies-api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { Divider } from '../../components/Divider/Divider';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function fetchMovie() {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);
  return (
    <div>
      <GoBackLink location={backLinkURLRef} />
      <Divider />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <Divider />
      <p>Additional infomation</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Divider />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
