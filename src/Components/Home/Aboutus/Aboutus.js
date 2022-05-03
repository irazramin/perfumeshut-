import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutus from '../../../img/about us.gif';
const Aboutus = () => {
  const navigate = useNavigate();
  const navigateContactUs = () =>{
      navigate('/contactus')
  }
  return (
    <div className='bg-white w-[90%] lg:w-[80%] mx-auto mt-10 px-3 p-4  md:p-5'>
      <div className='grid lg:grid-cols-5 grid-cols-1  p-10 '>
        <div className='col-span-2 order-2 lg:order-1 flex flex-col justify-center'>
          <h3 className='font-semibold text-2xl'>About us</h3>
          <p className='mt-5'>
            Welcome to the distributor's distributor. We are the one's
            that you have been looking for.
          </p>
          <div className='mt-10 '>
            <button
              onClick={navigateContactUs}
              className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
            >
              Contact us
            </button>
          </div>
        </div>
        <div className='col-span-3 order-1 lg:order-2 text-end'>
          <img className='w-full h-[400px] object-cover' src={aboutus} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Aboutus