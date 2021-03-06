import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import googleIcon from '../../../img/google.png';
import loader from '../../../img/loader.svg';
import loginBg from '../../../img/login.svg';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading1, error1] = useSignInWithGoogle(auth);

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
  const loginUser = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    await fetch(`https://sheltered-bastion-67111.herokuapp.com/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('jwtToken', data.accessToken);
      });

      // navigate(from, { replace: true });
  };

  // if (loading ) {
  //   toast.success('Login Successful', {
  //     position: 'top-right',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }

  const sendResetPass = () => {
    setModalActive(true);
  };
  const resetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      sendPasswordResetEmail(auth, email);
      setModalActive(false);
      toast.success('Check your email for reset password');
    }
  };

  return (
    <div className='pb-10'>
      <div className='lg:w-[80%] w-[90%] mx-auto   my-10 '>
        <div className='bg-white'>
          <form className='relative' onSubmit={loginUser}>
            <h4 className='pt-5 text-2xl font-medium block text-center'>
              Welcome to Perfumes Hut
            </h4>
            <div className='grid lg:grid-cols-2 grid-cols-1 '>
              <div className='lg:p-10 md:p-7 p-5 relative lg:order-1 order-2 '>
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
                      type='password'
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
                    <button
                      onClick={sendResetPass}
                      type='button'
                      className='text-sm font-medium'
                    >
                      Forget password?
                    </button>
                  </div>
                </div>

                <div>
                  <p className='text-red-500'>
                    {error?.message || error1?.message}
                  </p>
                  {loading ? (
                    <img
                      className={`absolute w-10 top-[230px] left-[50%]`}
                      src={loader}
                      alt=''
                    />
                  ) : (
                    ''
                  )}
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
              <div className='order-1 lg:order-2 '>
                <img src={loginBg} alt='' />
              </div>
            </div>
          </form>
          {/* modal */}

          <div
            id='authentication-modal'
            aria-hidden='true'
            className={`${
              modalActive ? 'block' : 'hidden'
            }  mx-auto flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
          >
            <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
              <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                <div className='py-6 px-6 lg:px-8'>
                  <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                    Enter email for reset password
                  </h3>
                  <form className='space-y-6' onSubmit={resetPassword}>
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
                          name='email'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                          placeholder='your email'
                        />
                      </div>
                    </div>
                    <div className='flex'>
                      <button
                        type='submit'
                        className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
                      >
                        Password reset
                      </button>
                      <button
                      onClick={() => setModalActive(false)}
                        type='button'
                        className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
                      >
                        cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
