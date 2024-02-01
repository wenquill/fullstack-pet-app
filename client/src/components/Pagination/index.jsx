import Button from '../Button';
import styles from './Pagination.module.scss';

function Pagination ({ filter, pets, changePage }) {
  return (
    <div className={styles.cont}>
      <Button
        onClickHandler={changePage}
        handlerCondition={filter.page - 1}
        disabledCondition={filter.page === 1}
        label={`${'<'} back`}
      />

      <Button
        onClickHandler={changePage}
        handlerCondition={filter.page + 1}
        disabledCondition={pets.length < filter.results}
        label={`forward ${'>'}`}
      />
    </div>
  );
}

export default Pagination;
