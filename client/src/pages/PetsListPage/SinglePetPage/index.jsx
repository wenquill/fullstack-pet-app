import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  getPetThunk,
  getPetsThunk,
  getTypesThunk,
} from '../../../store/slices/petsSlice';
import styles from './SinglePetPage.module.scss';
import image from './default.jpeg';
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

  return (
    <>
      <section className={`container ${styles.cont}`}>
        <div className={styles.imageContainer}>
          <img src={image} alt={singlePet.name} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1>{singlePet.name}</h1>
          <h3>
            {singlePet.owner}, {singlePet.ownerContacts}
          </h3>
          <p>
            {singlePet.description} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ducimus odit est fugiat quaerat ad in itaque
            earum. Voluptatibus, maxime rerum? Error eveniet nihil aut, culpa
            dolore aperiam expedita saepe tenetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis porro excepturi reprehenderit
            quo voluptatibus magnam sequi magni alias sapiente ex architecto
            beatae cumque est, odit error eius, labore quas. Similique.
          </p>
        </div>
      </section>
      <section className={`container ${styles.petsCont}`}>
        <h2>Other pets:</h2>
        <ul className={styles.petsList}>
          {pets
            .filter(p => p.id !== singlePet.id)
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
