import '../../styles/pets/pets.scss';
import { useMyHooks } from '../../shared/states';
import { petFinderKey } from '../../shared/states';
import { petFinderSecret } from '../../shared/states';
import { useEffect } from 'react';
import { AnimalDataSubset } from '../../models/types';
import Slider from './Slider';
import { useLocation } from 'react-router-dom';

const FriendsTest = () => {
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
          setPets(filteredAnimals);
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
  }, [accessToken, isAccessTokenSet, setIsLoading, setPets]);

  const location = useLocation();
  const isPetsRoute = location.pathname === '/pets';
  const mainStylesArray: string[] = [];
  const petsStylesArray: string[] = [];
  let actualArray = [];
  isPetsRoute
    ? (actualArray = petsStylesArray)
    : (actualArray = mainStylesArray);
  console.log(actualArray);

  return (
    <section className='friends'>
      <div className='container content__container'>
        <h3>
          Our friends who
          <br /> are looking for a house
        </h3>
        <Slider isLoading={isLoading} pets={pets} />
        {/* <a href='../pets/index.html'>Get to know the rest</a> */}
      </div>
    </section>
  );
};

export default FriendsTest;
