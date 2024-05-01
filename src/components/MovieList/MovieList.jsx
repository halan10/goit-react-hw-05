import { Link, useLocation } from 'react-router-dom';
import { pathImg } from '../../movies-api';
import dayjs from 'dayjs';

import css from './MovieList.module.css';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

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
            <img
              src={
                item.poster_path ? `${pathImg}/${item.poster_path}` : defaultImg
              }
              width={50}
              height={75}
            />
            <div>
              <p className={css.description}>{item.original_title}</p>
              <p className={css.description}>
                ({dayjs(item.release_date).format('YYYY')})
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
