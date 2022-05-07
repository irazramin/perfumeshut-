import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {
  return (
    <div className='  text-white min-h-full'>
      {/* <img
        className='md:h-[50vh] lg:h-[70vh] w-full h-full object-cover '
        src='https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''
      />
      <div className='absolute top-[50px] lg:top-[100px] left-10 lg:left-14'>
        <h2 className='text-xxl md:text-3xl lg:text-5xl bg-[rgba(0,0,0,0.5)] p-2'>
          Welcome to the distributor's distributor. We are the one's <br /> that
          you have been looking for.
        </h2>
      </div> */}

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
        showStatus={false}
        showThumbs={false}
        width='100%'
      >
        <div>
          <img
            className='w-full h-[50vh] lg:h-[80vh] object-cover  '
            src='https://images.unsplash.com/photo-1458538977777-0549b2370168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
            alt='img1'
          />
          <p className='legend'>Welcome to the distributor's distributor</p>
        </div>
        <div>
          <img
            className='w-full h-[50vh] lg:h-[80vh] object-cover  '
            src='https://images.unsplash.com/photo-1514557179557-9efc4d7949cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='img2'
          />
          <p className='legend'>
            We are the one's that you have been looking for.
          </p>
        </div>
        <div>
          <img
            className='w-full h-[50vh] lg:h-[80vh] object-cover  '
            src='https://images.unsplash.com/photo-1543422655-cb586ad21df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='img3'
          />
          <p className='legend'>Stay with us</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
