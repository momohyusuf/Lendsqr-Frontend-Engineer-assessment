import React from 'react';
import './button.scss';

type ButtonProps = {
  text: string;
  className: string;
  handleSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className={props.className} onClick={props.handleSubmit}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
