import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { createPetThunk, getTypesThunk } from '../../../store/slices/petsSlice';
import image from './cat.webp';
import styles from './PetForm.module.scss';
import Input from '../Input';
import { PET_VALIDATION_SCHEMA } from '../../../utils/petValidationSchema';
import { CITIES } from '../../../utils/constants';

function PetForm ({ petTypes, getPetTypes, createPet }) {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CITIES[0].name,
    lostDate: '',
    petTypeId: petTypes[0]?.id ?? '1',
    petPhoto: '',
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('owner', values.owner);
    formData.append('ownerContacts', values.ownerContacts);
    formData.append('description', values.description);
    formData.append('city', values.city);
    if (values.lostDate) {
      formData.append('lostDate', values.lostDate);
    }
    formData.append('petTypeId', values.petTypeId);
    formData.append('petPhoto', values.petPhoto);

    createPet(formData);
    formikBag.resetForm();
  };

  useEffect(() => {
    getPetTypes();
  }, [getPetTypes]);

  return (
    <div className={styles.cont}>
      <section className={styles.imageSection}>
        <img src={image} className={styles.image} alt='pet' />
      </section>
      <section className={styles.formSection}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={PET_VALIDATION_SCHEMA}
        >
          {formikProps => (
            <Form className={styles.form}>
              <Input
                label='Pet`s name:'
                type='text'
                name='name'
                placeholder='Garfield'
                classes={classes}
              />

              <Input
                label='Your name:'
                type='text'
                name='owner'
                placeholder='Bob Marley'
                classes={classes}
              />

              <Input
                label='Phone:'
                type='text'
                name='ownerContacts'
                placeholder='+XX XXX XXX XXXX'
                classes={classes}
              />

              <Input
                label='Describe your pet:'
                type='text'
                name='description'
                placeholder='small red cat'
                classes={classes}
              />

              <Input
                label='Lost date:'
                type='date'
                name='lostDate'
                classes={classes}
              />

              <label>
                <p>City:</p>
                <select
                  name='city'
                  value={formikProps.values.city}
                  onChange={formikProps.handleChange}
                >
                  {CITIES.map(city => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>

              {petTypes.length !== 0 && (
                <label>
                  <p>Pet`s type:</p>
                  <select
                    name='petTypeId'
                    value={formikProps.values.petTypeId}
                    onChange={formikProps.handleChange}
                  >
                    {petTypes.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.type}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <label>
                <p>Photo:</p>
                <input
                  className={styles.photoLabel}
                  type='file'
                  name='petPhoto'
                  onChange={e =>
                    formikProps.setFieldValue('petPhoto', e.target.files[0])
                  }
                />
              </label>

              <button type='submit'>Save</button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}

const mapStateToProps = ({ petsData: { petTypes } }) => ({ petTypes });

const mapDispatchToProps = dispatch => ({
  getPetTypes: () => dispatch(getTypesThunk()),
  createPet: data => dispatch(createPetThunk(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
