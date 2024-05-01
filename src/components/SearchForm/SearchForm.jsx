import { BsSearch } from 'react-icons/bs';

import css from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const handleSubmite = e => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.query.value.trim() === '') {
      alert('Please, enter text to search');
    }
    onSubmit(form.elements.query.value.trim());
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmite} className={css.form}>
        <input className={css.searchInput} type="text" name="query" />
        <button className={css.searchButton} type="submit">
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
}
