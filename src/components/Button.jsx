import * as React from 'react';
import PropTypes from 'prop-types';
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

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default CustomButton;
