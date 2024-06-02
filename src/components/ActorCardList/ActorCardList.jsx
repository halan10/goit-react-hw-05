import { pathImg } from '../../movies-api';
import css from './ActorCardList.module.css';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export default function ActorCardList({ value }) {
  return (
    <>
      {value.cast.length > 0 ? (
        <ul className={css.listCast}>
          {value.cast.map(item => (
            <li key={item.id} className={css.itemList}>
              <img
                className={css.image}
                src={
                  item.profile_path
                    ? `${pathImg}/${item.profile_path}`
                    : defaultImg
                }
                width={250}
                height={375}
              />
              <p className={css.name}>{item.name}</p>
              <p className={css.character}>{item.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, We don`t have information about any casts for this movie</p>
      )}
    </>
  );
}
