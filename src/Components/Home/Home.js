import React from 'react';
import Aboutus from './Aboutus/Aboutus';
import Banner from './Banner/Banner';
import Inventories from './Inventories/Inventories';
import Service from './Services/Service';

const Home = () => {
  return (
    <div className='pb-20 bg-stone-50'>
      <Banner />
      <Inventories />
      <Service />
      <Aboutus />
      
    </div>
  );
}

export default Home