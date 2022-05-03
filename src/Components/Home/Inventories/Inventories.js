import React from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../../../img/loader.svg';
import useFetch from '../../hooks/useFetch';
import SingleInventory from './SingleInventory';

const Inventories = () => {
  const [inventory, setInventory, loading] = useFetch();
  const navigate = useNavigate();
  const handleManageInventory = () => {
    navigate('/manageInventory');
  };
  return (
    <div className='bg-white w-[90%] lg:w-[80%] mx-auto mt-10 px-3 p-4  md:p-5'>
      <h4 className='text-2xl font-medium text-center'>Inventory</h4>
      <div className='my-5 text-center relative left-2/4'>
        {loading ? (
          <img
            className={` w-10`}
            src={loader}
            alt=''
          />
        ) : (
          ''
        )}
      </div>
      <div className='grid md:grid-cols-2 gap-x-5 gap-y-8 mt-5'>
        {inventory.slice(0, 6).map((product) => (
          <SingleInventory key={product._id} product={product} />
        ))}
      </div>
      <div className='text-center mt-10 '>
        <button
          onClick={handleManageInventory}
          className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Inventories;
