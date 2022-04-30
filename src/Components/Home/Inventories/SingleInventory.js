import React from 'react';

const SingleInventory = ({product}) => {
  const { perfumsName, supplier, quantity, price, description, img } = product;
  return (
    <div className=''>
      <div className='grid lg:grid-cols-2 gap-3  p-3 shadow-md'>
        <div>
          <img className='w-full h-[200px] object-cover ' src={img} alt='' />
        </div>
        <div className=''>
          <h4 className='text-[22px] font-medium'>{perfumsName}</h4>
          <h5 className='mt-1 text-xl font-semibold '>${price}</h5>
          <p className='mt-2 text-[15px]'>
            {description.length > 30
              ? description.slice(0, 60) + '....'
              : description}
          </p>
          <span className='mt-2 font-medium  block'>Quantity : {quantity}</span>
          <div className=' '>
            <div className='mt-2'>
              <h5 className='font-medium'>Supplier : {supplier}</h5>
            </div>
            <div className='text-right mt-4'>
              <button className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
                Stoke Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
