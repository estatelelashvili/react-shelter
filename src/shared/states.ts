import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {AnimalDataSubset} from '../models/types';
// import {RootState} from '../models/types';

export const petFinderKey =
  'ulKKHYWQDKPhkP7jta8316VR4To4ILjzubBvyPObYhelIp1c5J';
export const petFinderSecret = 'snCNgZA48chOSdOw2Fu4nMZ1tkE68zRWXVGfmcUV';

export const useMyHooks = () => {
  const [accessToken, setAccessToken] = useState<null | string>(null);

  const [isAccessTokenSet, setIsAccessTokenSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pets, setPets] = useState<Array<AnimalDataSubset>>([]);
  // const dispatch = useDispatch();
  // const animals = useSelector((state: RootState) => state.animalData);

  return {
    accessToken,
    setAccessToken,
    isAccessTokenSet,
    setIsAccessTokenSet,
    isLoading,
    setIsLoading,
    pets,
    setPets,
    // dispatch,
    // animals,
  };
};
