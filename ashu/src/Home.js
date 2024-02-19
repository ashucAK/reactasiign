import React from 'react';
import './Home.css'; 

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <h1>Welcome {user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

const UserDetails = () => {
  // Define user details
  const user = {
    name: 'Ashish Kumar Singh',
    age: 19,
    email: 'singhashishk12@gmail.com',
    address: 'Lucknow, UttarPradesh'
  };

  return (
    <div>
      <Home user={user} />
    </div>
  );
};

export default UserDetails;
