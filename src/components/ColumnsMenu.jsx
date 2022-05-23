import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CheckBoxItem from './CheckBoxItem';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const ColumnsMenu = ({ itemsToShow, handleSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = ({ target }) => {
    const { name } = target;
    handleSelect(name);
  }

  const { age, phone, gender, dob, email, location, nationality, cell } = itemsToShow;

  return (
    <div>
      <Button
        size='small'
        style={{ padding: 0, backgroundColor: 'transparent' }}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: 'black' }} />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <CheckBoxItem
          disableRipple
          isDisabled
          isDefaultChecked
          label="Name"
        />
        <CheckBoxItem
          isDefaultChecked
          label="Gender"
          name="gender"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={gender}
        />
        <CheckBoxItem
          isDefaultChecked
          label="Age"
          name="age"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={age}
        />
        <CheckBoxItem
          isDefaultChecked
          label="Email"
          name="email"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={email}
        />
        <CheckBoxItem
          isDefaultChecked
          label="Phone"
          name="phone"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={phone}
        />
        <CheckBoxItem
          isDefaultChecked
          label="Date of birth"
          name="dob"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={dob}
        />
        <CheckBoxItem
          isDefaultChecked
          label="Location"
          name="location"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={location}
        />
        <CheckBoxItem
          isDefaultChecked
          label="Cell"
          name="cell"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={cell}
        />
        <CheckBoxItem
          isDefaultChecked
          label="nationality"
          name="nationality"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={nationality}
        />
      </StyledMenu>
    </div>
  );
}

export default ColumnsMenu;
