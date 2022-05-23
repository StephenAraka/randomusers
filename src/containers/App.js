import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import InputForm from '../components/InputForm';
import UsersList from '../components/UsersList';

import formatCountries from '../utils/formatCountries';

import '../assets/css/App.css';
import ProgressBar from '../components/ProgressBar';

const App = () => {
  const [gender, setGender] = useState('both');
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('')
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [hasMore, setHasMore] = useState(false);

  const handleSearch = (countries) => {
    const nationalities = countries.length > 0 ? `&nat=${formatCountries(countries)}` : '';
    const genderSelected = gender === 'both' ? '' : `&gender=${gender}`;
    let results = 10;

    setUrl(`https://randomuser.me/api/?results=${results}&exc=login${genderSelected}${nationalities}&page=${page}`);
  }

  useEffect(() => {
    const handleScroll = () => {

      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

      if (bottom) {
        setPage(page + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  useEffect(() => {
    let cancel;

    if (!url) return;

    setisLoading(true);
    setError(false);

    axios.get(url, { cancelToken: new axios.CancelToken(c => cancel = c) })
      .then((res => {
        setRandomUsers(prevUsers => {
          return [...new Set([...prevUsers, ...res.data?.results])]
        })
        // setHasMore(res.data?.results.length > 0);
        setisLoading(false);
      }))
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [page, url]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: 'grid', gap: 2 }}>
        <h1>Random Users</h1>
        <InputForm
          data={randomUsers}
          changeGender={(selectedGender) => setGender(selectedGender)}
          submit={handleSearch}
        />
        <UsersList users={randomUsers} />
        {isLoading && <ProgressBar />}
        {error && <div className="error">Oops! Error occured while fetching...</div>}
      </Container>
    </>
  );
};

export default App;
