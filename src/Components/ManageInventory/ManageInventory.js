import React from 'react';
import useFetch from '../hooks/useFetch';
import InventoryItem from './InventoryLists/InventoryList';

const ManageInventory = () => {
  const [inventory, setInventory] = useFetch();
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
  return (
    <div className='w-[80%] mx-auto bg-white p-5 my-10'>
      <div className=''>
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

            <tbody>{inventory.map((product) => <InventoryItem key={product._id} product={product} deletePerfumeItem={deletePerfumeItem} />)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
