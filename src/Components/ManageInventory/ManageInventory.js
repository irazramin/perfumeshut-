import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import InventoryItem from './InventoryLists/InventoryList';
const ManageInventory = () => {
  const [inventory, setInventory] = useFetch();
  const navigate = useNavigate();
   const deletePerfumeItem = (id) => {
     const url = `https://sheltered-bastion-67111.herokuapp.com/inventory/${id}`;
     fetch(url, {
       method: 'DELETE',
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.deletedCount > 0) {
           const afterDelete = inventory.filter((user) => user._id !== id);
           setInventory(afterDelete);
         }
       });
   };
   const navigateAddNewItem = () =>{
      navigate('/addnewitem')
   }
  return (
    <div className='relative  w-[90%] lg:w-[85%] mx-auto pb-20 bg-stone-50'>
      <div className='text-right'>
        <button
          onClick={navigateAddNewItem}
          type='submit'
          className='bg-black top-10 right-0 relative  mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
        >
          <FontAwesomeIcon icon={faPlus} className='mr-2' />
          add new item
        </button>
      </div>
      <div className='bg-white p-5 mt-20'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Id
                </th>
                <th scope='col' className='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Quantity
                </th>
                <th scope='col' className='px-6 py-3'>
                  Supplier Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((product) => (
                <InventoryItem
                  key={product._id}
                  product={product}
                  deletePerfumeItem={deletePerfumeItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
