import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import axios from 'axios';

import InputForm from '../components/InputForm';
import UsersList from '../components/UsersList';

import formatCountries from '../utils/formatCountries';

import '../assets/css/App.css';

export default function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [gender, setGender] = useState('both');

  const handleSearch = (countries) => {
    const nationalities = countries.length > 0 ? `&nat=${formatCountries(countries)}` : '';
    const genderSelected = gender === 'both' ? '' : `&gender=${gender}`;
    let results = 50;

    // axios.get(`https://randomuser.me/api/?results=${results}&exc=login${genderSelected}${nationalities}`)
    axios.get(`https://randomuser.me/api/?results=${results}&exc=login${genderSelected}${nationalities}`)
      .then(function (res) {
        setRandomUsers(res.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log('done!');
      });

  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: 'grid', gap: 2 }}>
        <h1>Random Users</h1>
        <InputForm
          changeGender={(selectedGender) => setGender(selectedGender)}
          submit={handleSearch}
        />
        <UsersList users={randomUsers} />
      </Container>
    </>
  );
}