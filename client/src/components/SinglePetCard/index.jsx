import Button from '../Button';
import styles from './SinglePetCard.module.scss';
import image from './default.jpeg';

function SinglePetCard ({ pet, petTypes, deletePet, updatePet }) {
  const { name, owner, ownerContacts, isFound, id, city, petTypeId } = pet;

  const isFoundHandler = (id, checked) => {
    updatePet(id, { isFound: checked });
  };

  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>
        {owner}, {ownerContacts}
      </p>
      <p>City: {city}</p>
      {`Type: ${petTypes?.find(t => t.id === petTypeId)?.type}`}

      <div className={styles.buttons}>
        <label className={styles.label}>
          <input
            className={styles.checkbox}
            type='checkbox'
            checked={isFound}
            onChange={({ target: { checked } }) => isFoundHandler(id, checked)}
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
    </li>
  );
}

export default SinglePetCard;
