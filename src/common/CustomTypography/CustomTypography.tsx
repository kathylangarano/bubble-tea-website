import React from 'react';
import Typography from '@mui/material/Typography';

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | undefined;
  text: string;
}

const CustomTypography: React.FC<TypographyProps> = ({ variant, text }) => {
  return (
    <div>
      <Typography variant={variant}>{text}</Typography>
    </div>
  )
}

export default CustomTypography;
