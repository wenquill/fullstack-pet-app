import Button from '../Button';
import styles from './Pagination.module.scss';

function Pagination ({ filter, pets, changePage }) {
  const { page, results } = filter;
  return (
    <div className={styles.cont}>
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
        label={`forward ${'>'}`}
      />
    </div>
  );
}

export default Pagination;
