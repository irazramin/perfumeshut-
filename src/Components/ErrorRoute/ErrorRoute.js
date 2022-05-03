import React from 'react';
import error from '../../img/404page.gif';

const ErrorRoute = () => {
  return (
    <div className='flex justify-center items-center bg-white -mt-20'>
      <img src={error} alt="" />
    </div>
  )
}

export default ErrorRoute