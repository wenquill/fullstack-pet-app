import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../Button';
import styles from './SinglePetCard.module.scss';
import defaultImage from './default.jpeg';

function SinglePetCard ({ pet, petTypes, deletePet, updatePet }) {
  const { name, owner, ownerContacts, isFound, id, city, petTypeId, image } =
    pet;

  const isFoundHandler = (id, checked) => {
    updatePet(id, { isFound: checked });
  };

  return (
    <li className={styles.card}>
      <Link to={`/pets/${id}`}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={image ? `http://localhost:5000/images/${image}` : defaultImage}
            alt={name}
          />
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p>
          {owner}, {ownerContacts}
        </p>
        <p>City: {city}</p>
        {`Type: ${petTypes?.find(t => t.id === petTypeId)?.type}`}
      </Link>
      {updatePet && deletePet && (
        <div className={styles.buttons}>
          <label className={styles.label}>
            <input
              className={styles.checkbox}
              type='checkbox'
              checked={isFound}
              onChange={({ target: { checked } }) =>
                isFoundHandler(id, checked)
              }
            />
            <span>pet is found</span>
          </label>

          <Button
            className={styles.removeBtn}
            onClickHandler={deletePet}
            handlerCondition={id}
            label='Remove this pet'
          />
        </div>
      )}
    </li>
  );
}

export default SinglePetCard;
