import moment from 'moment';

const formatData = ({ phone, dob, email, gender, location, name, registered, picture, nat, cell }) => {
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

export default formatData;
