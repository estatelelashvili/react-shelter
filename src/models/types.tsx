type Photo = {
  small: string;
  medium: string;
  large: string;
  full: string;
};

export type AnimalDataSubset = {
  id: number;
  name: string;
  age: string;
  description: string;
  photos: Photo[];
};

export type AnimalDataSubsetPartial = Partial<
  Pick<AnimalDataSubset, 'id' | 'name' | 'photos'>
>;

export type AnimalDataAction = {
  type: 'STORE_ANIMAL_DATA';
  payload: AnimalDataSubset[];
};

export interface RootState {
  animalData: AnimalDataSubset[];
}
