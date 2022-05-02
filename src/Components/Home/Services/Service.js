import React from 'react';
import bestprice from '../../../img/bestprice.png';
import customerservice from '../../../img/customerservice.png';
import deliverytruck from '../../../img/deliverytruck.png';
const Service = () => {
  return (
    <div className='bg-white w-[90%] lg:w-[80%] mx-auto mt-10 px-3 p-5 md:p-10'>
      <h2 className='font-semibold text-2xl text-center'>Our services</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5 text-center mt-10'>
        <div>
          <h4>FAST DELIVERY</h4>
          <img className='w-28 object-cover mx-auto' src={bestprice} alt='' />
          <p className='text-center'>
            Fast shipping throughout the World with trusted partners
          </p>
        </div>
        <div>
          <h4>BEST PRICES</h4>
          <img
            className='w-28 object-cover mx-auto'
            src={deliverytruck}
            alt=''
          />
          <p className='text-center'>
            Save buying Wholesale over min €500 Maximize your profit by buying
            wholesale
          </p>
        </div>
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <img
            className='w-28 object-cover mx-auto'
            src={customerservice}
            alt=''
          />
          <p className='text-center'>For support <br /> Contact us Mon-Fri from 10:00 to 17:00</p>
        </div>
      </div>
    </div>
  );
}

export default Service