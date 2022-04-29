import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
  const navigate = useNavigate();
 const [user] = useAuthState(auth);
 const handleLogin = () =>{
   navigate('/login')
 }
 const handleSignup = () =>{
      navigate('/registration');

 }
  return (
    <nav className='h-[60px] mb-auto bg-white  flex items-center'>
      <div className='w-[85%] mx-auto flex justify-between items-center'>
        <div className='flex items-center justify-center'>
          <div>
            <h4 className='lg:text-4xl font-medium '>Perfume Hut</h4>
          </div>
          <div>
            <ul className='flex ml-10 items-center justify-center'>
              <li className='mx-5 text-lg font-normal'>
                <CustomLink to='/'>Home</CustomLink>
              </li>
              <li className='mx-5 text-lg font-normal'>
                <CustomLink to='/inventory'>Inventory</CustomLink>
              </li>
              <li className='mx-5 text-lg font-normal'>
                <CustomLink to='/blogs'>Blogs</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {user ? (
            <div className='flex items-center justify-center'>
              <div>
                <ul className='flex ml-10 items-center justify-center'>
                  <li className='mx-5 text-lg font-normal'>
                    <CustomLink to='/'>Home</CustomLink>
                  </li>
                  <li className='mx-5 text-lg font-normal'>
                    <CustomLink to='/inventory'>Inventory</CustomLink>
                  </li>
                  <li className='mx-5 text-lg font-normal'>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                  </li>
                </ul>
              </div>
              <div>
                <button className='bg-black mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
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
    </nav>
  );
}

export default Header