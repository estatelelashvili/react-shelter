import '../../styles/main/friends.scss';
import { useMyHooks } from '../../shared/states';
import { petFinderKey } from '../../shared/states';
import { petFinderSecret } from '../../shared/states';
import { useEffect, useState } from 'react';
import { AnimalDataSubset } from '../../models/types';
import PetCard from '../PetCard';
import Spinner from '../shared/Spinner';
import SliderErrows from '../shared/SliderErrows';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../models/types';
import { storeData } from '../../redux/actions';

const Friends = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state: RootState) => state.animalData);
  const {
    accessToken,
    setAccessToken,
    isAccessTokenSet,
    setIsAccessTokenSet,
    isLoading,
    setIsLoading,
    pets,
    setPets,
  } = useMyHooks();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', petFinderKey);
      params.append('client_secret', petFinderSecret);
      const petfinderRes = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
          method: 'POST',
          body: params,
        }
      );
      const response = await petfinderRes.json();
      setAccessToken(response.access_token);
      setIsAccessTokenSet(true);
    };
    fetchAccessToken();
  }, [setAccessToken, setIsAccessTokenSet]);

  useEffect(() => {
    const fetchAnimals = async () => {
      if (!isAccessTokenSet) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          'https://api.petfinder.com/v2/animals?limit=100',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const filteredAnimals = data.animals.filter(
            (animal: AnimalDataSubset) => animal.photos.length > 0
          );
          dispatch(storeData(filteredAnimals));

          setIsLoading(false);
        } else {
          console.error('Error fetching animals');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching animals', error);
      }
    };

    fetchAnimals();
  }, [accessToken, dispatch, isAccessTokenSet, setIsLoading, setPets]);
  console.log(pets);
  const [animation, setAnimation] = useState('slider__cards');

  const handleMove = (defaultClass: string, styleClass: string) => {
    setAnimation('slider__cards');
    setTimeout(() => setAnimation(`${defaultClass} ${styleClass}`), 0);
  };
  const location = useLocation();
  const isPetsRoute = location.pathname === '/pets';
  return (
    <section className={isPetsRoute ? 'pets' : 'friends'} id='friends'>
      <div className='container content__container'>
        <h3>
          Our friends who
          <br /> are looking for a house
        </h3>
        <section className='slider'>
          <div className='slider__container'>
            <div className={animation}>
              <ul className='slider__cards_prev'></ul>
              <ul className='slider__cards_main'>
                {isLoading ? (
                  <Spinner />
                ) : (
                  animals.map((animal) => (
                    <PetCard
                      key={animal.id}
                      id={animal.id}
                      name={animal.name}
                      photos={animal.photos}
                    />
                  ))
                )}
              </ul>
              <ul className='slider__cards_next'></ul>
            </div>
          </div>
          <SliderErrows
            styleArray={[
              'slider__arrow slider__arrow_prev',
              'slider__arrow slider__arrow_next',
            ]}
            actions={[
              () => handleMove('slider__cards', 'transition-prev'),
              () => handleMove('slider__cards', 'transition-next'),
            ]}
          />
        </section>
        <a href='../pets'>Get to know the rest</a>
      </div>
    </section>
  );
};

export default Friends;
