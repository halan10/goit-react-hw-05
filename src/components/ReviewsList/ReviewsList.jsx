import dayjs from 'dayjs';

export default function ReviewsList({ value }) {
  return (
    <>
      {value.results == '' ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ul>
          {value.results.map(item => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
              <p>Created: {dayjs(item.created_at).format('DD/MM/YYYY')}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
