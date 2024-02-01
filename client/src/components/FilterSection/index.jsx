import styles from './../PetsList/PetsList.module.scss';

function FilterSection ({
  filterType,
  options,
  optId,
  optValue,
  optText,
  handleChange,
  typeName,
  selectName,
  callback,
}) {
  return (
    <label className={styles.filterType}>
      <span>{typeName}: </span>
      <select
        className={styles.select}
        name={selectName}
        value={filterType || ''}
        onChange={e => handleChange(e.target.value, callback)}
      >
        <option value=''>all</option>
        {options.map(opt => (
          <option key={opt[optId]} value={opt[optValue]}>
            {opt[optText]}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterSection;
