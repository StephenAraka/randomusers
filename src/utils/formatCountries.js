const formatCountries = (countries) => {
  let countriesString = '';

  countries.forEach((country) => {
    countriesString = countriesString.concat(`${country.split('-')[1].trim()},`);
  });

  return countriesString.substring(0, countriesString.length - 1);
}

export default formatCountries;
