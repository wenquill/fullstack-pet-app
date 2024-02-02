import Button from '../Button';
import styles from './Pagination.module.scss';

function Pagination ({ filter, pets, changePage, className }) {
  const { page, results } = filter;
  return (
    <div className={`${styles.cont} ${className}`}>
      <Button
        onClickHandler={changePage}
        handlerCondition={page - 1}
        disabledCondition={page === 1}
        label={`${'<'} back`}
      />

      <Button
        onClickHandler={changePage}
        handlerCondition={page + 1}
        disabledCondition={pets.length < results}
        label={`next ${'>'}`}
      />
    </div>
  );
}

export default Pagination;
