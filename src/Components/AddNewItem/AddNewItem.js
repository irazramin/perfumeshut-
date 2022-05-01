import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handleAddItem = (e) =>{
      e.preventDefault();
      const perfumsName = e.target.perfumsName.value; 
      const img = e.target.img.value; 
      const description = e.target.description.value; 
      const supplier = e.target.supplier.value; 
      const quantity = parseInt(e.target.quantity.value); 
      const price = parseInt(e.target.price.value); 

      const item = {
        perfumsName,
        img,
        description,
        supplier,
        quantity,
        price,
        email:user?.email,
      }

      fetch(`https://sheltered-bastion-67111.herokuapp.com/additem`,{
        method:'POST',
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify(item)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      console.log(item)

      e.target.reset();
  }
  return (
    <div className=' pt-10 pb-20 transition-all duration-500 ease-linear '>
      <div className='w-[90%] lg:w-[50%] mx-auto bg-white py-4 md:p-5 lg:p-10'>
        <h4 className='mb-5 text-2xl text-center font-semibold'>
          Please add a new perfumes
        </h4>
        <form onSubmit={handleAddItem} className='w-[90%] mx-auto '>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
            <div className='mb-3'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perfume name
              </label>
              <input
                type='text'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
                placeholder='Perfume name'
                required
                name='perfumsName'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='img'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perfume image
              </label>
              <input
                type='text'
                id='img'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
                required
                placeholder='Enter image url'
                name='img'
              />
            </div>
          </div>
          <div className='mb-3'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Enter perfumes details
            </label>
            <textarea
              name='description'
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Descriptions'
            ></textarea>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-5'>
            <div className='mb-3'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Supplier name
              </label>
              <input
                type='text'
                id='password'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
                required
                placeholder='Supplier name'
                name='supplier'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perfume price
              </label>
              <input
                type='number'
                id='password'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
                required
                placeholder='Enter price'
                name='price'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perfume quantity
              </label>
              <input
                type='number'
                id='password'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black dark:shadow-sm-light'
                required
                placeholder='Enter quantity'
                name='quantity'
              />
            </div>
          </div>
          <button className='bg-black mx-1 mt-7 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
            Add item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;
