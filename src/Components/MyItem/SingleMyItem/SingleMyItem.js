import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleMyItem = ({product,deletePerfumeItem}) => {
const { _id, perfumsName, supplier, quantity, price, description, img } =
  product;
const navigate = useNavigate();
const navigateProductDetails = (id) => {
  navigate(`/inventory/${id}`);
};


return (
  <div className='relative  bg-white h-fit'>
    <div className='grid lg:grid-cols-2 gap-3 bg-white  p-3 shadow-md'>
      <div>
        <img className='w-full h-[200px] object-cover ' src={img} alt='' />
      </div>
      <div className=''>
        <h4 className='text-[22px] mt-5 font-medium w-full h-[40px] overflow-hidden'>
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
        <div
          onClick={() => deletePerfumeItem(_id)}
          className='w-8 h-8 hover:bg-red-800 bg-red-600 flex justify-center items-center rounded-full cursor-pointer active:scale-105 absolute top-[250px] lg:top-2 right-3'
        >
          <FontAwesomeIcon className='text-white text-base' icon={faTrashAlt} />
        </div>
      </div>
    </div>
  </div>
);
}

export default SingleMyItem