import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import TtyIcon from '@mui/icons-material/Tty';

const Row = (props) => {
  const { user, showItems, ref } = props;
  const [open, setOpen] = useState(false);
  const {
    name,
    gender,
    street,
    address,
    email,
    age,
    dateOfBirth,
    registrationSeniority,
    phone,
    cell,
    picture,
    nationality
  } = user;

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className='photo__column' component="th" scope="row">
          {!open && <Avatar alt={name} src={picture.thumbnail} />}
        </TableCell>
        <TableCell ref={ref}>{name}</TableCell>
        {showItems.gender && (
          <TableCell>{gender === 'male' ? (
            <Tooltip title="Male">
              <ManIcon sx={{ color: '#019ef5' }} />
            </Tooltip>
          ) : (
            <Tooltip title="Female">
              <WomanIcon sx={{ color: '#e647a1' }} />
            </Tooltip>
          )}
          </TableCell>
        )}
        {showItems.age && <TableCell>{age}</TableCell>}
        {showItems.dob && <TableCell className='dob__column'>{dateOfBirth}</TableCell>}
        {showItems.email && <TableCell className='email__column'>{email}</TableCell>}
        {showItems.phone && <TableCell className='phone__column'>{phone}</TableCell>}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Details:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <img alt={name} src={picture.large} loading="lazy" className='details__img' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <AccessTimeIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Registered: ${registrationSeniority}`} />
                    </ListItem>
                    {showItems.email && (
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Email: ${email}`} />
                      </ListItem>
                    )}
                    {!showItems.phone && (
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <LocalPhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Phone: ${phone}`} />
                      </ListItem>
                    )}
                    {showItems.cell && (
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <TtyIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Cell: ${cell}`} />
                      </ListItem>
                    )}
                    {showItems.location && (
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Location: ${street}. ${address}`} />
                      </ListItem>
                    )}
                    {showItems.nationality && (
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <FlagIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Nationality: ${nationality}`} />
                      </ListItem>
                    )}
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    registrationSeniority: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      thumbnail: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
    }).isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired,
};

export default Row;
