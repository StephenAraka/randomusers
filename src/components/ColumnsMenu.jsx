import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

  const { name, age, phone, gender, dob, email, location, nationality, cell } = itemsToShow;

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
          isChecked={name}
        />
        <CheckBoxItem
          label="Gender"
          name="gender"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={gender}
        />
        <CheckBoxItem
          label="Age"
          name="age"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={age}
        />
        <CheckBoxItem
          label="Email"
          name="email"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={email}
        />
        <CheckBoxItem
          label="Phone"
          name="phone"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={phone}
        />
        <CheckBoxItem
          label="Date of birth"
          name="dob"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={dob}
        />
        <CheckBoxItem
          label="Location"
          name="location"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={location}
        />
        <CheckBoxItem
          label="Cell"
          name="cell"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={cell}
        />
        <CheckBoxItem
          label="nationality"
          name="nationality"
          onChange={(e) => handleOptionSelect(e)}
          isChecked={nationality}
        />
      </StyledMenu>
    </div>
  );
}

ColumnsMenu.propTypes = {
  itemsToShow: PropTypes.shape().isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default ColumnsMenu;
