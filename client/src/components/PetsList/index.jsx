import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changePetTypeFilter,
  deletePetThunk,
  getPetsThunk,
  getTypesThunk,
} from '../../store/slices/petsSlice';

function PetsList ({
  pets,
  petTypes,
  isFetching,
  error,
  filter,
  getPets,
  getPetTypes,
  changePetType,
  deletePet,
}) {
  useEffect(() => {
    getPetTypes();
  }, []);

  useEffect(() => {
    getPets();
  }, [filter.petType]);

  // TODO error, isFetching and create another conmponent with pet card
  return (
    <>
      <section>
        <span>Types: </span>
        {petTypes.map(type => (
          <label key={type.id}>
            <input
              type='radio'
              name='petType'
              value={type.id}
              onChange={() => changePetType(type.id)}
            />
            {type.type}
          </label>
        ))}
      </section>
      <ul>
        {pets?.map(pet => (
          <li key={pet.id}>
            {pet.name}, {pet.owner}, {pet.ownerContacts},{' '}
            {petTypes?.find(t => t.id === pet.petTypeId)?.type}
            <button onClick={() => deletePet(pet?.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = ({ petsData }) => petsData;

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(getPetsThunk()),
  getPetTypes: () => dispatch(getTypesThunk()),
  changePetType: value => dispatch(changePetTypeFilter(value)),
  deletePet: id => dispatch(deletePetThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
