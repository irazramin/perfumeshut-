import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleInventory = ({product}) => {
  const {_id, perfumsName, supplier, quantity, price, description, img } = product;
  const navigate = useNavigate();
  const navigateProductDetails = (id) =>{
      navigate(`/inventory/${id}`);
  }
  return (
    <div className=''>
      <div className='grid lg:grid-cols-2 gap-3  p-3 shadow-md'>
        <div>
          <img className='w-full h-[200px] object-cover ' src={img} alt='' />
        </div>
        <div className=''>
          <h4 className='text-[22px] font-medium'>
            {perfumsName.length > 15
              ? perfumsName.slice(0, 20) + '....'
              : perfumsName}
          </h4>
          <h5 className='mt-1 text-xl font-semibold '>${price}</h5>
          <p className='mt-2 text-[16px] text-left'>
            {description.length > 30
              ? description.slice(0, 55) + '....'
              : description}
          </p>
          <span className='mt-2 font-medium  block'>Quantity : {quantity}</span>
          <div className=' '>
            <div className='mt-2'>
              <h5 className='font-medium'>Supplier : {supplier}</h5>
            </div>
            <div className='text-right mt-4'>
              <button
                onClick={() => navigateProductDetails(_id)}
                className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
              >
                Stock Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
