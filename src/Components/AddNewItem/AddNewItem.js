import React from 'react';

const AddNewItem = () => {
  return (
    <div className='w-[85%] mx-auto bg-white p-5 my-20'>
      <form className='w-6/12 mx-auto'>
        <div className='grid grid-cols-2 gap-10'>
          <div className='mb-6'>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Perfume name
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
              placeholder='Perfume name'
              required=''
            />
          </div>
          <div className='mb-6'>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Perfume image
            </label>
            <input
              type='text'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
              required=''
              placeholder='Enter image url'
            />
          </div>
        </div>
        <div className='mb-6'>
          <label
            for='message'
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Enter perfumes details
          </label>
          <textarea
            id='message'
            rows='4'
            class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Descriptions'
          ></textarea>
        </div>

        <div className='grid grid-cols-3 gap-5'>
          <div className='mb-6'>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Supplier name
            </label>
            <input
              type='text'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
              required=''
              placeholder='Supplier name'
            />
          </div>
          <div className='mb-6'>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Perfume price
            </label>
            <input
              type='number'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
              required=''
              placeholder='Enter price'
            />
          </div>
          <div className='mb-6'>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Perfume quantity
            </label>
            <input
              type='number'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
              required=''
              placeholder='Enter quantity'
            value='0'
            />
          </div>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
