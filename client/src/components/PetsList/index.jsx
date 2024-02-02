import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeCityFilter,
  changeIsFoundFilter,
  changeOrder,
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
import { CITIES, IS_FOUND_OPTIONS, ORDER_OPTIONS } from '../../utils/constants';
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
  changeIsFound,
  changePetOrder,
}) {
  useEffect(() => {
    getPetTypes();
  }, [getPetTypes]);

  useEffect(() => {
    getPets(filter);
  }, [filter, getPets]);

  const handleChange = (value, callback) => {
    callback(value);
    changePage(1);
  };

  const handleResetFilters = value => {
    changePetType(value);
    changeCity(value);
    changeIsFound(value);
    changePetOrder(value);
    changePage(1);
  };

  return (
    <>
      <section className={styles.petsSection}>
        <div className={styles.filters}>
          <p className={styles.filtersTitle}>--- Filters ---</p>

          <FilterSection
            filterType={filter.petTypeId}
            options={petTypes}
            optId='id'
            optValue='id'
            optText='type'
            handleChange={handleChange}
            callback={changePetType}
            typeName='Type'
            selectName='petTypeId'
          />

          <FilterSection
            filterType={filter.city}
            options={CITIES}
            optId='id'
            optValue='name'
            optText='name'
            handleChange={handleChange}
            callback={changeCity}
            typeName='City'
            selectName='city'
          />

          <FilterSection
            filterType={filter.isFound}
            options={IS_FOUND_OPTIONS}
            optId='id'
            optValue='value'
            optText='text'
            handleChange={handleChange}
            callback={changeIsFound}
            typeName='Is found'
            selectName='isFound'
          />

          <p className={styles.filtersTitle}>--- Initially ---</p>

          <label className={styles.filterType}>
            <span>Order by: </span>
            <select
              className={styles.select}
              name='order'
              value={filter.order}
              onChange={e => handleChange(e.target.value, changePetOrder)}
            >
              {ORDER_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.value}>
                  {opt.text}
                </option>
              ))}
            </select>
          </label>

          <Button
            onClickHandler={handleResetFilters}
            handlerCondition={''}
            label='Reset filters'
          />

          <Pagination
            className={styles.upperPagination}
            filter={filter}
            pets={pets}
            changePage={changePage}
          />
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
          {!isFetching && !error && pets?.length === 0 && <NoContent />}
        </ul>
        <Pagination
          className={styles.dynamicPagination}
          filter={filter}
          pets={pets}
          changePage={changePage}
        />
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
  changeIsFound: value => dispatch(changeIsFoundFilter(value)),
  changePetOrder: value => dispatch(changeOrder(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
