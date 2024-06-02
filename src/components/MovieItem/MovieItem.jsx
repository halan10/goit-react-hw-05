import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaStar } from 'react-icons/fa';
import { CardActionArea } from '@mui/material';
import { pathImg } from '../../movies-api';

import css from './MovieItem.module.css';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export default function MovieItem({ item }) {
  return (
    <Card className={css.cardContainer} raised>
      <CardActionArea classes={{ focusHighlight: css.focus }}>
        <CardMedia
          component="img"
          height="225"
          width="175"
          image={
            item.poster_path ? `${pathImg}/${item.poster_path}` : defaultImg
          }
          alt="green iguana"
        />
        <CardContent sx={{ padding: 1 }} className={css.content}>
          <Typography variant="p" color="text.secondary">
            <FaStar color="orange" /> {item.vote_average}
          </Typography>
          <Typography
            className={css.title}
            gutterBottom
            variant="body2"
            component="div"
          >
            {item.original_title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
