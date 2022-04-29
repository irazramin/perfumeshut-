import React from 'react';
import SingleInventory from '../Home/Inventories/SingleInventory';
import useFetch from '../hooks/useFetch';

const Inventory = () => {
    const [inventory] = useFetch();
  return (
    <div className='w-[80%] mx-auto bg-white p-5 my-10'>
      <div className='grid grid-cols-2 gap-x-5 gap-y-8 mt-5'>
        {inventory.map((product) => (
          <SingleInventory key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Inventory