import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import SingleInventory from './SingleInventory';

const Inventories = () => {
    const [inventory,setInventory] = useFetch();
    const navigate = useNavigate()
    const handleManageInventory = () =>{
      navigate('/inventory');
    }
  return (
    <div className='bg-white w-[80%] mx-auto mt-10 p-5'>
      <h4 className='text-2xl font-medium text-center'>Inventory</h4>
      <div className='grid grid-cols-2 gap-x-5 gap-y-8 mt-5'>
        {inventory.slice(0,6).map((product) => (
          <SingleInventory key={product._id} product={product} />
        ))}
      </div>
      <div className='text-center mt-10 '>
        <button onClick={handleManageInventory} className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
          Manage Inventory
        </button>
      </div>
    </div>
  );
}

export default Inventories