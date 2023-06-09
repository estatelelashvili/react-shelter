type StyleType = {
  styleClass: string;
  callback: () => void;
};

const Button = ({ styleClass, callback }: StyleType) => {
  const handleClick = () => {
    callback();
  };
  return (
    <button className={styleClass} onClick={handleClick}>
      <svg
        width='14'
        height='6'
        viewBox='0 0 14 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_56784_408)'>
          <path d='M0 4V2L11 2V0L14 3L11 6V4L0 4Z' fill='#292929' />
        </g>
        <defs>
          <clipPath id='clip0_56784_408'>
            <rect width='14' height='6' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default Button;
