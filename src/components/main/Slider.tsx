import SliderErrows from '../shared/SliderErrows';
import Spinner from '../shared/Spinner';
import PetCard from '../PetCard';
import './catalog.scss';
import { AnimalDataSubset } from '../../models/types';
import { useState } from 'react';
type SliderProps = {
  isLoading: boolean;
  pets: AnimalDataSubset[];
};
const Slider = ({ isLoading, pets }: SliderProps) => {
  const initialClassName = 'slider__cards-pets';
  const [animation, setAnimation] = useState(initialClassName);
  const handleMove = (defaultClass: string, styleClass: string) => {
    setAnimation(initialClassName);
    setTimeout(() => setAnimation(`${defaultClass} ${styleClass}`), 0);
  };
  console.log(animation);
  console.log(pets);
  return (
    <section className='slider-pets'>
      <div className='slider__container-pets'>
        <div className='slider__cards-pets'>
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              pets.map((animal) => (
                <PetCard
                  key={animal.id}
                  name={animal.name}
                  photos={animal.photos}
                />
              ))
            )}
          </>
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
  );
};

export default Slider;
