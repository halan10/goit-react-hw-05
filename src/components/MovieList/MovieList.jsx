import { Link, useLocation } from 'react-router-dom';

import css from './MovieList.module.css';
import MovieItem from '../MovieItem/MovieItem';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.listContainer}>
      {movies.map(item => (
        <li key={item.id}>
          <Link
            to={`/movies/${item.id}`}
            state={location}
            className={css.listLink}
          >
            <MovieItem item={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
