import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxItem = ({ disableRipple, isDisabled, isDefaultChecked, label, onChange, name, isChecked }) => {
  return (
    <MenuItem disableRipple={disableRipple}>
      <FormControlLabel
        disabled={isDisabled}
        control={
          <Checkbox
            name={name}
            defaultChecked={isDefaultChecked}
            onChange={onChange}
          // checked={isChecked}
          />
        }
        label={label}
      />
    </MenuItem>

  )
}

export default CheckBoxItem;
