import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';

import CountriesSelect from './CountriesSelect';
import CustomButton from './Button';

const InputForm = ({ changeGender, submit }) => {
  const [countries, setCountries] = useState([]);

  const handleGenderSelect = ({ target }) => {
    changeGender(target.value);
  };

  const submitCountries = () => {
    submit(countries);
  }

  return (
    <Box sx={{
      borderRadius: 2,
      paddingY: '1rem',
      paddingX: { xs: '1rem', sm: '1rem', md: '3rem', lg: '4rem' },
      bgcolor: '#f5f5f5'
    }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={2} lg={4}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="both"
              name="radio-buttons-group"
              onChange={handleGenderSelect}
            >
              <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
              <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
              <FormControlLabel value="both" control={<Radio size="small" />} label="Both" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box>Select Countries</Box>
          <CountriesSelect onChange={(countries) => setCountries(countries)} />
        </Grid>
        <Grid
          sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}
          item xs={12} sm={4} md={2} lg={2}>
          {true && <CustomButton icon={<DownloadIcon />} variant="outlined" label="Download" onClick={() => null} />}
        </Grid>
        <Grid
          sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}
          item xs={12} sm={4} md={2} lg={2}>
          <CustomButton variant="contained" label="Search" onClick={submitCountries} />
        </Grid>
      </Grid>
    </Box >
  );
}

export default InputForm;
