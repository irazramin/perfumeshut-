import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../../img/google.png';
import loginBg from '../../../img/login.svg';
const Login = () => {
  const navigate = useNavigate()

  const navigateRegistration = () =>{
     navigate('/registration')
  }
  return (
    <div className='w-[80%] mx-auto   my-10 h-screen'>
      <form className='bg-white'>
        <h4 className='pt-5 text-2xl font-medium block text-center'>Welcome to Perfumes Hut</h4>
        <div className='grid grid-cols-2 '>
          <div className='p-10 '>
            <div>
              <label
                for='input-group-1'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your Email
              </label>

              <div className='relative mb-6'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type='text'
                  id='input-group-1'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                  placeholder='your email'
                />
              </div>
            </div>
            <div>
              <label
                for='input-group-1'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your password
              </label>

              <div className='relative mb-6'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <input
                  type='text'
                  id='input-group-1'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                  placeholder='your password'
                />
              </div>
            </div>
            <div className='flex  justify-between'>
              <div className='flex items-start mb-6'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                  />
                </div>
                <label
                  for='terms'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Remember me
                </label>
              </div>
              <div>
                <button type='button' className='text-sm font-medium'>
                  Forget password?
                </button>
              </div>
            </div>
            <button
              type='submit'
              className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
            >
              Login
            </button>
            <div className='mt-5 text-center'>
              <div className='flex justify-center'>
                <h4>Don't have an account yet?</h4>
                <button onClick={navigateRegistration} type='button' className='text-sm font-medium ml-2'>
                  Create an account
                </button>
              </div>
            </div>
            <div className='flex items-center mt-5 w-[90%] mx-auto'>
              <hr className='w-[50%] border-[1px] border-black' />
              <p className='mx-4'>or</p>
              <hr className='w-[50%] border-[1px] border-black' />
            </div>
            <div>
              <button
                type='button'
                // onClick={handleLoginWithGoogle}
                className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black flex items-center justify-center'
              >
                <img className='w-[25px] mr-3' src={googleIcon} alt='' /> Login
                with google
              </button>
            </div>
          </div>
          <div>
            <img src={loginBg} alt='' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
