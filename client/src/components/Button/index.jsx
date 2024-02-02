import styles from './Button.module.scss';

function Button ({
  label,
  onClickHandler,
  handlerCondition,
  disabledCondition,
  className,
}) {
  return ( 
    <button
      disabled={disabledCondition}
      onClick={() => onClickHandler(handlerCondition)}
      className={`${styles.button} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
