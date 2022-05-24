import * as React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ disabled, icon, variant, onClick, label }) => {
  return (
    <Button
      disabled={disabled}
      startIcon={icon}
      sx={{ maxWidth: 310 }}
      onClick={onClick}
      variant={variant}>
      {label}
    </Button>
  );
}

export default CustomButton;
