import React from 'react';
import Banner from './Banner/Banner';
import Inventories from './Inventories/Inventories';

const Home = () => {
  return (
    <div className='pb-20 bg-stone-50'>
      <Banner />
      <Inventories />
    </div>
  );
}

export default Home