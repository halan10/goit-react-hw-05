import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../movies-api';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ReviewsList from '../ReviewsList/ReviewsList';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      if (!movieId) return;
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMoviesReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {reviews && <ReviewsList value={reviews} />}
    </div>
  );
}
