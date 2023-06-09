import { AnimalDataSubsetPartial } from '../models/types';
import { Link } from 'react-router-dom';
import '../styles/pet-card.scss';
const PetCard = ({ id, name, photos }: AnimalDataSubsetPartial) => {
  const petDetailsUrl = `/card/${id}`;
  const imgUrl = photos?.[0]?.medium ?? '';
  // const navigate = useNavigate();
  // const handleGoTo = () => {
  //   navigate(petDetailsUrl);
  // };
  console.log(id);

  return (
    <Link to={petDetailsUrl} className='slider__card'>
      <img width='270' height='270' src={imgUrl} alt='pet-friend' />
      <h4>{name}</h4>
      <button className='slider__card-button'>Learn more</button>
    </Link>
  );
};

export default PetCard;
