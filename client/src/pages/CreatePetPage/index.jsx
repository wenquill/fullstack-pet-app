import PetForm from '../../components/form/PetForm';
import styles from './../../components/form/PetForm/PetForm.module.scss';

function CreatePetPage () {
  return (
    <div>
      <h1 className={styles.title}>
        Your pet got lost? Fill out the form and we`ll help you to find it!
      </h1>
      <PetForm />
    </div>
  );
}

export default CreatePetPage;
