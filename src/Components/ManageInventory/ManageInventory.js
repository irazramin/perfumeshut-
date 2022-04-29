import React from 'react';
import useFetch from '../hooks/useFetch';
import InventoryItem from './InventoryLists/InventoryList';

const ManageInventory = () => {
  const [inventory, setInventory] = useFetch();
  return (
    <div className='w-[80%] mx-auto bg-white p-5 my-10'>
      <div className=''>
        <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  Id
                </th>
                <th scope='col' class='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' class='px-6 py-3'>
                  Quantity
                </th>
                <th scope='col' class='px-6 py-3'>
                  Supplier Name
                </th>
                <th scope='col' class='px-6 py-3'>
                  Price
                </th>
                <th scope='col' class='px-6 py-3'>
                  <span class='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>

            <tbody>{inventory.map((product) => <InventoryItem key={product._id} product={product} />)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
