import { pathImg } from '../../movies-api';

import css from './MovieInfo.module.css';
import { FaStar } from 'react-icons/fa';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export default function MovieInfo({ movie }) {
  return (
    <>
      <div className={css.container}>
        <img
          src={
            movie.poster_path ? `${pathImg}/${movie.poster_path}` : defaultImg
          }
          width={250}
          height={375}
        />
        <div className={css.description}>
          <h2>{movie.title}</h2>
          <p>
            <FaStar color="yellow" /> {movie.vote_average}/10
          </p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul className={css.genresList}>
            {movie.genres.map(item => (
              <li key={item.id} className={css.genresItem}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
