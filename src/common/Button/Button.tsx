import React from 'react';
import Button from '@mui/material/Button';

interface ButtonsProps {
  variant: "text" | "contained" | "outlined" ; // Puedes añadir más variantes según necesites
  size: "small" | "medium" | "large";
  buttonText: String;
  onClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ variant, size, buttonText, onClick }) => {
  return (
    <div>
      <Button variant={variant} size={size} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export default Buttons;
