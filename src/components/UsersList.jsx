import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ColumnsMenu from './ColumnsMenu';
import Row from './TableRow';

import formatData from '../utils/formatUserData';
import '../assets/css/UsersList.css';

const UsersList = ({ users }) => {
  const [showMenuItems, setMenuItems] = useState({
    name: true,
    gender: true,
    age: true,
    email: true,
    phone: true,
    dob: true,
    location: false,
    cell: false,
    nationality: true
  });

  return (
    <Box className="table__wrapper">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead className="table__heading">
            <TableRow>
              <TableCell />
              <TableCell className='photo__column'></TableCell>
              <TableCell>NAME</TableCell>
              {showMenuItems.gender && <TableCell>GENDER</TableCell>}
              {showMenuItems.age && <TableCell>AGE</TableCell>}
              {showMenuItems.dob && <TableCell className='dob__column'>DoB</TableCell>}
              {showMenuItems.email && <TableCell className='email__column'>EMAIL</TableCell>}
              {showMenuItems.phone && <TableCell className='phone__column'>PHONE</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody className='users__table'>
            {users.map((user) => (
              <Row
                showItems={showMenuItems}
                key={uuidv4()}
                user={formatData(user)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="add__columns">
        <ColumnsMenu
          itemsToShow={showMenuItems}
          handleSelect={(item) => setMenuItems({ ...showMenuItems, [item]: !showMenuItems[item] })}
        />
      </Box>
    </Box>
  );
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList;

