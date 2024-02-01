import Button from '../Button';
import styles from './SinglePetCard.module.scss';

function SinglePetCard ({ pet, petTypes, deletePet, updatePet }) {
  const isFoundHandler = (id, checked) => {
    updatePet(id, { isFound: checked });
  };

  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src='https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='pet image'
        />
      </div>
      <h3>{pet.name}</h3>
      <p>
        {pet.owner}, {pet.ownerContacts}
      </p>
      <p>City: {pet.city}</p>
      {`Type: ${petTypes?.find(t => t.id === pet.petTypeId)?.type}`}

      <div className={styles.buttons}>
        <label className={styles.label}>
          <input
            className={styles.checkbox}
            type='checkbox'
            checked={pet.isFound}
            onChange={({ target: { checked } }) =>
              isFoundHandler(pet.id, checked)
            }
          />
          <span>pet is found</span>
        </label>

        <Button
          className={styles.removeBtn}
          onClickHandler={deletePet}
          handlerCondition={pet.id}
          label='Remove this pet'
        />
      </div>
    </li>
  );
}

export default SinglePetCard;
