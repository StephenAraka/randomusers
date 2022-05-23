import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import InputForm from '../components/InputForm';
import UsersList from '../components/UsersList';

import formatCountries from '../utils/formatCountries';
import usePeopleFetch from '../utils/usePeopleFetch';

import '../assets/css/App.css';

export default function App() {
  const [gender, setGender] = useState('both');
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('https://randomuser.me/api/?results=5000')

  const handleSearch = (countries) => {
    const nationalities = countries.length > 0 ? `&nat=${formatCountries(countries)}` : '';
    const genderSelected = gender === 'both' ? '' : `&gender=${gender}`;
    let results = 50;

    setUrl(`https://randomuser.me/api/?results=${results}&exc=login${genderSelected}${nationalities}`);

    setPage(1);
  }

  const {
    randomUsers,
    isLoading,
    error,
    hasMore
  } = usePeopleFetch(url);

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