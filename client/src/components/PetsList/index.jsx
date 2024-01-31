import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changePageFilter,
  changePetTypeFilter,
  changeResultsFilter,
  deletePetThunk,
  getPetsThunk,
  getTypesThunk,
} from '../../store/slices/petsSlice';
import Pagination from '../Pagination';

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
  changePage,
  changeResults,
}) {
  useEffect(() => {
    getPetTypes();
  }, []);

  useEffect(() => {
    getPets(filter);
  }, [filter]);

  // TODO error, isFetching and create another conmponent with pet card
  return (
    <>
      <section>
        <span>Types: </span>
        {petTypes.map(type => (
          <label key={type.id}>
            <input
              checked={type.id === filter.petTypeId}
              type='radio'
              name='petTypeId'
              value={type.id}
              onChange={() => changePetType(type.id)}
            />
            {type.type}
          </label>
        ))}
        <button onClick={() => changePetType(null)}>reset filters</button>
      </section>
      <ul>
        {pets?.map(pet => (
          <li key={pet.id}>
            {pet.name}, {pet.owner}, {pet.ownerContacts},{' '}
            {petTypes?.find(t => t.id === pet.petTypeId)?.type}
            <button onClick={() => deletePet(pet.id)}>X</button>
          </li>
        ))}
      </ul>

      <Pagination filter={filter} pets={pets} changePage={changePage} />
    </>
  );
}

const mapStateToProps = ({ petsData }) => petsData;

const mapDispatchToProps = dispatch => ({
  getPets: data => dispatch(getPetsThunk(data)),
  getPetTypes: () => dispatch(getTypesThunk()),
  changePetType: value => dispatch(changePetTypeFilter(value)),
  deletePet: id => dispatch(deletePetThunk(id)),
  changePage: value => dispatch(changePageFilter(value)),
  changeResults: value => dispatch(changeResultsFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
