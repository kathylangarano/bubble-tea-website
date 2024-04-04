import React from 'react';
import Button from '@mui/material/Button';

interface ButtonsProps {
  variant: "text" | "contained" | "outlined" ; // Puedes añadir más variantes según necesites
  size: "small" | "medium" | "large";
  buttonText: String;
}

const Buttons: React.FC<ButtonsProps> = ({ variant, size, buttonText }) => {
  return (
    <div>
      <Button variant={variant} size={size}>{buttonText}</Button>
    </div>
  );
}

export default Buttons;
