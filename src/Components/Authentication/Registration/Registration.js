import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import googleIcon from '../../../img/google.png';
import loginBg from '../../../img/signup.svg';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading1, error1] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [currentUser] = useAuthState(auth);
  const [sendEmailVerification, sending, error2] =
    useSendEmailVerification(auth);
  // const [showToast,setShowToast] = useState(false)
  if (currentUser) {
    navigate('/');
  }

  const navigateLogin = () => {
    navigate('/login');
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password).then(() => {
      verifyRegisterUser();
      toast.success('send verification code to your email')
    });
  };
  
 
  const loginWithGoogle = () => {
    signInWithGoogle();
  };

  const verifyRegisterUser = () => {
     sendEmailVerification(auth.currentUser);
     
  };

  return (
    <div className='w-[80%] mx-auto mt-10 mb-32 h-screen '>
      <form className='bg-white' onSubmit={registerUser}>
        <h4 className='pt-5 text-2xl font-medium block text-center'>
          Welcome to Perfumes Hut
        </h4>
        <div className='grid grid-cols-2'>
          <div className='p-10 '>
            <div>
              <label
                htmlFor='input-group-1'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your Name
              </label>

              <div className='relative mb-5'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  type='text'
                  id='input-group-1'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                  placeholder='your name'
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='input-group-1'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your Email
              </label>

              <div className='relative mb-5'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  onBlur={handleEmailInput}
                  type='text'
                  id='input-group-1'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                  placeholder='your email'
                  required
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

              <div className='relative mb-5'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <input
                  type='password'
                  onBlur={handlePasswordInput}
                  id='input-group-1'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                  placeholder='your password'
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='input-group-1'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Confirm password
              </label>

              <div className='relative mb-5'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <input
                  type='password'
                  id='input-group-1'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                  placeholder='confirm password'
                  required
                />
              </div>
            </div>

            <div>
              <p className='text-red-500'>
                {error?.message || error1?.message || error2?.message}
              </p>
            </div>
            <button
              type='submit'
              className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
            >
              Registration
            </button>
            <div className='mt-5 text-center'>
              <div className='flex justify-center'>
                <h4>Already an account?</h4>
                <button
                  onClick={navigateLogin}
                  type='button'
                  className='text-sm font-medium ml-2'
                >
                  Login
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
      <ToastContainer />
    </div>
  );
};

export default Registration;
