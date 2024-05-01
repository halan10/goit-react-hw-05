import { Link } from 'react-router-dom';

import css from './GoBackLink.module.css';

export default function GoBackLink({ location }) {
  return (
    <Link to={location.current} className={css.link_grad}>
      Go back
    </Link>
  );
}
