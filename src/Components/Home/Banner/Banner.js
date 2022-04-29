import React from 'react';

const Banner = () => {
  return (
    <div className='relative text-white'>
      <img
        className='h-[70vh] w-full object-cover '
        src='https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''
      />
      <div className='absolute top-[100px] left-14'>
        <h2 className='text-5xl'>
          Welcome to the distributor's distributor. We are the one's <br /> that
          you have been looking for.
        </h2>
      </div>
    </div>
  );
}

export default Banner   