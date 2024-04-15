import React from 'react';
import Typography from '@mui/material/Typography';

interface TypographyProps{
  variant: String;
  text: String;
}

const CustomTypography: React.FC<TypographyProps> = ({variant, text}) => {
  return(
    <div>
      <Typography variant={variant as any}>{text}</Typography>
    </div>
  )
}

export default CustomTypography