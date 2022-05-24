import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxItem = ({ disableRipple, isDisabled, label, onChange, name, isChecked }) => {
  return (
    <MenuItem disableRipple={disableRipple}>
      <FormControlLabel
        disabled={isDisabled}
        control={
          <Checkbox
            name={name}
            onChange={onChange}
            checked={isChecked}
          />
        }
        label={label}
      />
    </MenuItem>

  )
}

CheckBoxItem.propTypes = {
  disableRipple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
};

export default CheckBoxItem;
