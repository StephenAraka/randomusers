import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
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

import '../assets/css/UsersList.css';

const createData = ({ phone, dob, email, gender, location, name, registered, picture, nat, cell }) => {
  const { first, last } = name;
  const { street, city, state } = location;
  const { age } = dob;
  const { date } = registered;

  const user = {
    name: `${first} ${last}`,
    gender,
    street: `${street.number}, ${street.name}`,
    address: `${city} - ${state}`,
    email,
    age,
    dateOfBirth: moment(dob.date).format("MMM Do YY"),
    registrationSeniority: moment(date).fromNow(),
    phone,
    cell,
    picture,
    nationality: nat
  };

  return user;
}

const Row = (props) => {
  const { user } = props;
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
        <TableCell component="th" scope="row">
          {!open && <Avatar alt={name} src={picture.thumbnail} />}
        </TableCell>
        <TableCell>{name}</TableCell>
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
        <TableCell>{age}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Details:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img alt={name} src={picture.large} loading="lazy" className='details__img' />
                </Grid>
                <Grid item xs={4}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <AccessTimeIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Registered: ${registrationSeniority}`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <LocalPhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Phone: ${phone}`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <TtyIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Cell: ${cell}`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <LocationOnIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Location: ${street}. ${address}`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FlagIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Nationality: ${nationality}`} />
                    </ListItem>
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
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const UsersList = ({ users }) => {
  console.log("uersrs", users)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>GENDER</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>AGE</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>EMAIL</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>PHONE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Row user={createData(user)} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersList;

