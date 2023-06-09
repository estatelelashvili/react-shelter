import {AnimalDataSubset} from '../models/types';

type AccessToken = {
  key: string;
  secret: string;
  setToken: (str:string) => void;
  checkToken: (val: boolean) => void;
};
type AccessTokenValidation = {
  tokenSet: boolean;
  checkLoading: (val: boolean) => void;
  accessToken: string;
  setPets: (arr:[]) => [];
};

export const fetchAccessToken = async ({key, secret, setToken, checkToken}:AccessToken ) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', key);
      params.append('client_secret', secret);
      const petfinderRes = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
          method: 'POST',
          body: params,
        }
      );
      const response = await petfinderRes.json();
      setToken(response.access_token);
      checkToken(true);
    };


    export const fetchAnimals = async ({tokenSet, checkLoading, accessToken, setPets}: AccessTokenValidation) => {
      if (!tokenSet) {
        checkLoading(false);
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
            (animal:AnimalDataSubset) => animal.photos.length > 0
          );
          setPets(filteredAnimals);

          checkLoading(false);
        } else {
          console.error('Error fetching animals');
          checkLoading(false);
        }
      } catch (error) {
        console.error('Error fetching animals', error);
      }
    };


