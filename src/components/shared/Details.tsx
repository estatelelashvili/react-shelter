import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../models/types';
import '../../styles/details.scss';

const Details = () => {
  const navigate = useNavigate();
  const { animalId } = useParams();
  const handleGoBack = () => {
    navigate(-1);
  };
  const petData = useSelector((state: RootState) => state.animalData);
  let pet;
  if (animalId) {
    pet = petData.find((animal: { id: number }) => animal.id === +animalId);
  }

  return (
    <section className='popUp'>
      <div className='popUp-content'>
        <img src={pet?.photos[0].full} alt='cute-animal' />
        <div className='popUpInfo'>
          <h3>{pet?.name}</h3>
          <h4>Dog - Labrador</h4>
          <h5>{pet?.description}</h5>
          <p>{pet?.age}</p>
          <button className='close' onClick={handleGoBack}>
            Go back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
