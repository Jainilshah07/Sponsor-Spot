import React from 'react';
import Homebody from '../../components/Homebody';
import pic from '../../assets/bg2.jpg'

const Home = () => {
  return (
    <div className='vh-100' style={{ backgroundImage: `url(${pic})`}}>
      <Homebody/>
    </div>
  );
}

export default Home
