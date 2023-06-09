import { AnimalDataSubsetPartial } from '../models/types';
import { Link } from 'react-router-dom';
import '../styles/pets/pet-card.scss';
const PetCard = ({ id, name, photos }: AnimalDataSubsetPartial) => {
  const petDetailsUrl = `/card/${id}`;
  const imgUrl = photos?.[0]?.medium ?? '';
  console.log(photos);

  return (
    <Link to={petDetailsUrl} className='card-link'>
      <li className='slider__card'>
        <img width='270' height='270' src={imgUrl} alt='pet-friend' />
        <h4>{name}</h4>
        <button className='slider__card-button'>Learn more</button>
      </li>
    </Link>
  );
};

export default PetCard;
