import * as React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ variant, onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}>
      {label}
    </Button>
  );
}

export default CustomButton;
