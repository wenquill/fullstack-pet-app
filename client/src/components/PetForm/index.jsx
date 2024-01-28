import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createPetThunk, getTypesThunk } from '../../store/slices/petsSlice';
import { useEffect } from 'react';

const CITIES = ['Kyiv', 'Dnipro', 'New York'];

// TODO yup validation --------------------------------------------------------------

function PetForm ({ petTypes, getPetTypes, createPet }) {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CITIES[0],
    lostDate: '',
    petTypeId: petTypes[0]?.id ?? '1',
  };

  const handleSubmit = (values, formikBag) => {
    createPet(values);
    formikBag.resetForm();
  };

  useEffect(() => {
    getPetTypes();
  }, [getPetTypes]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => (
        <Form>
          <label>
            <span> Pet`s name: </span>
            <Field name='name' placeholder='Pet`s name' type='text'></Field>
          </label>
          <label>
            <span>Your name: </span>
            <Field name='owner' placeholder='Owner`s name' type='text'></Field>
          </label>
          <label>
            <span>Name: </span>
            <Field
              name='ownerContacts'
              placeholder='Your phone umber'
              type='text'
            ></Field>
          </label>
          <label>
            <span>Describe your pet: </span>
            <Field
              name='description'
              placeholder='Description'
              type='text'
            ></Field>
          </label>
          <label>
            <span>Lost date: </span>
            <Field name='lostDate' type='date'></Field>
          </label>
          <label>
            <span>City: </span>
            <select
              name='city'
              value={formikProps.values.city}
              onChange={formikProps.handleChange}
            >
              {CITIES.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Pet`s type: </span>
            <select
              name='petTypeId'
              value={formikProps.values.petTypeId}
              onChange={formikProps.handleChange}
            >
              {
                // TODO add data fetched from server-----------------------------------------------
              }
              {petTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </select>
          </label>

          <button type='submit'>Add pet</button>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ petsData: { petTypes } }) => ({ petTypes });

const mapDispatchToProps = dispatch => ({
  getPetTypes: () => dispatch(getTypesThunk()),
  createPet: data => dispatch(createPetThunk(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
