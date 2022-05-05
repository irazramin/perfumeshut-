import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import webLogo from '../../img/web-logo.png';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [active,setActive] = useState(true)
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/registration');
  };

  const logoutUser = () => {
    signOut(auth);
  };

  return (
    <nav className='h-full py-3  mb-auto bg-white  lg:flex items-center'>
      <div className='w-[85%] mx-auto lg:flex justify-between items-center'>
        <div className='lg:flex items-center justify-center'>
          <div onClick={() => navigate('/')}>
            <img
              className='w-[230px] cursor-pointer object-cover '
              src={webLogo}
              alt=''
            />
          </div>
          <div className={`${active ? 'hidden' : 'block'} lg:block`}>
            <ul className='lg:flex mt-5 lg:mt-0 lg:ml-10 items-center justify-center'>
              <li className='lg:mx-5 ml-0 text-base mb-2 lg:mb-0 font-medium'>
                <CustomLink to='/'>Home</CustomLink>
              </li>
              <li className='lg:mx-5  text-base mb-2 lg:mb-0 font-medium'>
                <CustomLink to='/blogs'>Blogs</CustomLink>
              </li>
              <li className='lg:mx-5  text-base mb-2 lg:mb-0 font-medium'>
                <CustomLink to='/contactus'>Contact Us</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${active ? 'hidden' : 'block'} lg:block`}>
          {user ? (
            <div className='lg:flex items-center justify-center'>
              <div>
                <ul className='lg:flex   lg:ml-10 items-center lg:justify-center'>
                  <li className='lg:mx-5  text-base mb-2 lg:mb-0 font-medium'>
                    <CustomLink to='/manageInventory'>Manage Item</CustomLink>
                  </li>
                  <li className='lg:mx-5  text-base mb-2 lg:mb-0 font-medium'>
                    <CustomLink to='/addnewitem'>Add item</CustomLink>
                  </li>
                  <li className='lg:mx-5  text-base mb-2 lg:mb-0 font-medium'>
                    <CustomLink to='/myitem'>My Item</CustomLink>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={logoutUser}
                  className='bg-black lg:mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={handleLogin}
                className='bg-black mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className='bg-black mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        onClick={() => setActive(!active)}
        className='absolute top-5 text-2xl border-[1px] cursor-pointer  px-2 lg:invisible  right-5'
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Header;
