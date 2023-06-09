import { combineReducers } from 'redux';
import { AnimalDataAction } from '../models/types';

const initialState = {
  animalData: null,
};

const animalDataReducer = (
  state = initialState.animalData,
  action: AnimalDataAction
) => {
  switch (action.type) {
    case 'STORE_ANIMAL_DATA':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  animalData: animalDataReducer,
});

export default rootReducer;
