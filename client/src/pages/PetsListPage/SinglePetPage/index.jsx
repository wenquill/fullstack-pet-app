import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  getPetThunk,
  getPetsThunk,
  getTypesThunk,
} from '../../../store/slices/petsSlice';
import styles from './SinglePetPage.module.scss';
import defaultImage from './default.jpeg';
import SinglePetCard from '../../../components/SinglePetCard';

function SinglePetPage ({
  getPet,
  singlePet,
  pets,
  petTypes,
  getPets,
  getPetTypes,
}) {
  const { id } = useParams();

  useEffect(() => {
    getPet(id);
    getPets();
    getPetTypes();
  }, [getPet, getPets, getPetTypes, id]);

  const {
    image,
    name,
    city,
    owner,
    ownerContacts,
    id: petId,
    lostDate,
    description,
  } = singlePet;

  return (
    <>
      <section className={`container ${styles.cont}`}>
        <div className={styles.imageContainer}>
          <img
            src={
              image
                ? `http://localhost:5000/images/${image}`
                : defaultImage
            }
            alt={name}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>
            {name}, {city}
          </h1>
          <h3>
            {owner}, {ownerContacts}
          </h3>
          <p>
            {description} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ducimus odit est fugiat quaerat ad in itaque earum.
            Voluptatibus, maxime rerum? Error eveniet nihil aut, culpa dolore
            aperiam expedita saepe tenetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis porro excepturi reprehenderit
            quo voluptatibus magnam sequi magni alias sapiente ex architecto
            beatae cumque est, odit error eius, labore quas. Similique.
          </p>
          <h3 className={styles.lostDate}>Lost date: {lostDate}</h3>
        </div>
      </section>
      <section className={`container ${styles.petsCont}`}>
        <h2>Other pets:</h2>
        <ul className={styles.petsList}>
          {pets
            .filter(p => p.id !== petId)
            .slice(0, 4)
            .map(p => (
              <SinglePetCard key={p.id} pet={p} petTypes={petTypes} />
            ))}
        </ul>
      </section>
    </>
  );
}

const mapStateToProps = ({ petsData }) => petsData;

const mapDispatchToProps = dispatch => ({
  getPet: id => dispatch(getPetThunk(id)),
  getPets: () => dispatch(getPetsThunk()),
  getPetTypes: () => dispatch(getTypesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePetPage);
