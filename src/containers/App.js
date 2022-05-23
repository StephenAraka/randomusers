import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import axios from 'axios';

import '../assets/css/App.css';
import InputForm from '../components/InputForm';
import UsersList from '../components/UsersList';

export default function App() {
  const [randomUsers, setRandomUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5&exc=login')
      .then(function (res) {
        setRandomUsers(res.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log('done!');
      });
  }, [])


  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <InputForm />
        <UsersList users={randomUsers} />
      </Container>
    </>
  );
}