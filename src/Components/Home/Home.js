import React, { useEffect } from 'react';
import Aboutus from './Aboutus/Aboutus';
import Banner from './Banner/Banner';
import Inventories from './Inventories/Inventories';

const Home = () => {
  return (
    <div className='pb-20 bg-stone-50'>
      <Banner />
      <Inventories />
      <Aboutus />
    </div>
  );
}

export default Home