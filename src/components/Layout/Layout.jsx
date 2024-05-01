import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';

import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div className={css.mainContainer}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </div>
    </div>
  );
}
