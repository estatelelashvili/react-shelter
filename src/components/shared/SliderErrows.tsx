import Button from '../main/Button';
import { useLocation } from 'react-router-dom';

type SliderArrowTypes = {
  actions: (() => void)[];
  styleArray: string[];
};

const SliderErrows = ({ actions, styleArray }: SliderArrowTypes) => {
  const location = useLocation();
  const isPetsRoute = location.pathname === '/pets';
  return isPetsRoute ? (
    <div className='slider__arrows'>
      <Button styleClass={styleArray[0]} callback={actions[0]} />
      <Button styleClass={styleArray[1]} callback={actions[1]} />
    </div>
  ) : (
    <div className='slider__arrows'>
      <Button styleClass={styleArray[0]} callback={actions[0]} />
      <Button styleClass={styleArray[1]} callback={actions[1]} />
    </div>
  );
};

export default SliderErrows;
