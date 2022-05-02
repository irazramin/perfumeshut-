import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import googleIcon from '../../../img/google.png';
import loginBg from '../../../img/login.svg';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading1, error1] =
    useSignInWithGoogle(auth);

  const [currentUser] = useAuthState(auth);
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  if (currentUser) {
    navigate(from, { replace: true });
  }

  const navigateRegistration = () => {
    navigate('/registration');
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
   
  };
  const loginWithGoogle = () => {
    signInWithGoogle();
  };
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if(loading || loading1){
    toast.success('Login Successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className='pb-10'>
      <div className='w-[80%] mx-auto   my-10 '>
        <div className='bg-white'>
          <form onSubmit={loginUser}>
            <h4 className='pt-5 text-2xl font-medium block text-center'>
              Welcome to Perfumes Hut
            </h4>
            <div className='grid grid-cols-2 '>
              <div className='p-10 '>
                <div>
                  <label
                    htmlFor='input-group-1'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Email
                  </label>

                  <div className='relative mb-6'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input
                      onBlur={handleEmailInput}
                      type='text'
                      id='input-group-1'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                      placeholder='your email'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='input-group-1'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your password
                  </label>

                  <div className='relative mb-6'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faKey} />
                    </div>
                    <input
                      onBlur={handlePasswordInput}
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
                      htmlFor='terms'
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

                <div>
                  <p className='text-red-500'>
                    {error?.message || error1?.message}
                  </p>
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
                    <button
                      onClick={navigateRegistration}
                      type='button'
                      className='text-sm font-medium ml-2'
                    >
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
                    onClick={loginWithGoogle}
                    className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black flex items-center justify-center'
                  >
                    <img className='w-[25px] mr-3' src={googleIcon} alt='' />{' '}
                    Login with google
                  </button>
                </div>
              </div>
              <div>
                <img src={loginBg} alt='' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
