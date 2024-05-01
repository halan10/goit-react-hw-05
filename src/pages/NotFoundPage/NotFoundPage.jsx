import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <img src="/src/assets/404.png" width={400} height={400} />
      <div className={css.textContainer}>
        <p>Opps! This page could not be found! Sorry! </p>
        <p>
          Please visit out <Link to="/">home page</Link>
        </p>
      </div>
    </div>
  );
}
