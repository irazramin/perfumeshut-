import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <nav className='h-[60px] mb-auto bg-slate-200 shadow-md flex items-center'>
      <div className='w-[80%] mx-auto flex justify-between items-center'>
        <div className='flex items-center justify-center'>
          <div>
            <h4 className='lg:text-2xl font-medium '>Website Title</h4>
          </div>
          <div>
            <ul className='flex ml-10 items-center justify-center'>
              <li className='mx-5'>
                <CustomLink to='/'>Home</CustomLink>
              </li>
              <li className='mx-5'>
                <CustomLink to='/inventory'>Inventory</CustomLink>
              </li>
              <li className='mx-5'>
                <CustomLink to='/blogs'>Blogs</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <button className='mx-2 bg-lime-500 py-2 px-5 rounded-md text-white'>
              Login
            </button>
            <button className='mx-2 bg-lime-500 py-2 px-5 rounded-md text-white'>
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header