import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesCredits } from '../../movies-api';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ActorCardList from '../ActorCardList/ActorCardList';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCredits() {
      if (!movieId) return;
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMoviesCredits(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {cast && <ActorCardList value={cast} />}
    </div>
  );
}
