import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeCityFilter,
  changePageFilter,
  changePetTypeFilter,
  deletePetThunk,
  getPetsThunk,
  getTypesThunk,
  updatePetsThunk,
} from '../../store/slices/petsSlice';
import Pagination from '../Pagination';
import SinglePetCard from '../SinglePetCard';
import styles from './PetsList.module.scss';
import FilterSection from '../FilterSection';
import { CITIES } from '../../utils/constants';
import Button from '../Button';
import Loading from '../pageState/Loading';
import Error from '../pageState/Error';
import NoContent from '../pageState/NoContent';

function PetsList ({
  pets,
  petTypes,
  isFetching,
  error,
  filter,
  getPets,
  getPetTypes,
  changePetType,
  updatePet,
  deletePet,
  changePage,
  changeCity,
}) {
  useEffect(() => {
    getPetTypes();
  }, []);

  useEffect(() => {
    getPets(filter);
  }, [filter]);

  const handleChangePetType = value => {
    changePetType(value);
    changePage(1);
  };

  const handleChangeCity = value => {
    changeCity(value);
    changePage(1);
  };

  const handleResetFilters = value => {
    handleChangePetType(value);
    handleChangeCity(value);
  };

  console.log(error);

  // TODO error, isFetching and create another conmponent with pet card
  return (
    <>
      <section className={styles.petsSection}>
        <div className={styles.filters}>
          <FilterSection
            filterType={filter.petTypeId}
            options={petTypes}
            optId='id'
            optValue='id'
            optText='type'
            handleChange={handleChangePetType}
            typeName='Type'
            selectName='petTypeId'
          />

          <FilterSection
            filterType={filter.city}
            options={CITIES}
            optId='id'
            optValue='name'
            optText='name'
            handleChange={handleChangeCity}
            typeName='City'
            selectName='city'
          />

          <Button
            onClickHandler={handleResetFilters}
            handlerCondition={''}
            label='Reset filters'
          />

          <Pagination filter={filter} pets={pets} changePage={changePage} />
        </div>
        <ul className={styles.petsList}>
          {isFetching && <Loading isFetching={isFetching} />}
          {error && <Error />}
          {!isFetching &&
            !error &&
            pets?.map(pet => (
              <SinglePetCard
                key={pet.id}
                pet={pet}
                petTypes={petTypes}
                deletePet={deletePet}
                updatePet={updatePet}
              />
            ))}
          {!isFetching && !error && pets?.length === 0 && (
            <NoContent/>
          )}
        </ul>
      </section>
    </>
  );
}

const mapStateToProps = ({ petsData }) => petsData;

const mapDispatchToProps = dispatch => ({
  getPets: data => dispatch(getPetsThunk(data)),
  getPetTypes: () => dispatch(getTypesThunk()),
  changePetType: value => dispatch(changePetTypeFilter(value)),
  updatePet: (id, data) => dispatch(updatePetsThunk({ id, data })),
  deletePet: id => dispatch(deletePetThunk(id)),
  changePage: value => dispatch(changePageFilter(value)),
  changeCity: value => dispatch(changeCityFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
