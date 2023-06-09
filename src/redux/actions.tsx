type AnimalDataSubset = {
  id: number;
  name: string;
  age: string;
  description: string;
  photos: string[];
};

export const storeData = (data: AnimalDataSubset[]) => ({
  type: 'STORE_ANIMAL_DATA',
  payload: data,
});
