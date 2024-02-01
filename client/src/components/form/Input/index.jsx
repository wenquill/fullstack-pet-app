import classNames from 'classnames';
import { Field } from 'formik';
import styles from './../PetForm/PetForm.module.scss'

function Input (props) {
  const { name, label, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        return (
          <label className={styles.column}>
            <p>{label}</p>
            <input className={inputClassNames} {...restProps} {...field} />
            {meta.error && meta.touched && (
              <small className={classes.error}>{meta.error}</small>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;