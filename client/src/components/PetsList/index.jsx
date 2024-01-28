import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPetsThunk, getTypesThunk } from '../../store/slices/petsSlice';

function PetsList ({ pets, petTypes, isFetching, error, getPets, getPetTypes }) {
  useEffect(() => {
    getPetTypes();
    getPets();
  }, []);

  // TODO error, isFetching and create another conmponent with pet card
  return (
    <ul>
      {pets?.map(pet => (
        <li key={pet.id}>
          {pet.name}, {pet.owner}, {pet.ownerContacts},{' '}
          {petTypes?.find(t => t.id === pet.petTypeId)?.type}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ petsData }) => petsData;

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(getPetsThunk()),
  getPetTypes: () => dispatch(getTypesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
