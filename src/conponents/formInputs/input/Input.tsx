import './input.sass';
import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  required?: boolean;
}

const Input = ({
  type,
  placeholder,
  handleInput,
  value,
  id,
  name,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
      id={id}
      required={required}
    />
  );
};

export default Input;
