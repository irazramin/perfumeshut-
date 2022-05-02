import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const InventoryItem = ({ product, deletePerfumeItem }) => {
  const navigate = useNavigate();
  const { _id, perfumsName, supplier, quantity, price, description, img } =
    product;

  const navigateProductDetails = () => {
    navigate(`/inventory/${_id}`);
  }
  return (
    <tr>
      <td className='px-6 py-4'>{_id}</td>
      <td className='px-6 py-4'>{perfumsName}</td>
      <td className='px-6 py-4'>{quantity}</td>
      <td className='px-6 py-4 text-left'>{supplier}</td>
      <td className='px-6 py-4'>${price}</td>
      <td className='px-6 py-4 items-center justify-between flex'>
        <div
          onClick={navigateProductDetails}
          className='w-8 h-8 mr-2 hover:bg-blue-800 bg-blue-600 flex justify-center items-center rounded-full cursor-pointer active:scale-105'
        >
          <FontAwesomeIcon className='text-white text-base' icon={faEdit} />
        </div>
        <div
          onClick={() => deletePerfumeItem(_id)}
          className='w-8 h-8 mr-2 hover:bg-red-800 bg-red-600 flex justify-center items-center rounded-full cursor-pointer active:scale-105'
        >
          <FontAwesomeIcon className='text-white text-base' icon={faTrashAlt} />
        </div>
      </td>
    </tr>
  );
};

export default InventoryItem;