import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useFetch from '../../hooks/useFetch';
const InventoryItem = ({ product, deletePerfumeItem }) => {
  const { _id, perfumsName, supplier, quantity, price, description, img } =
    product;

  return (
    <tr>
      <td className='px-6 py-4'>{_id}</td>
      <td className='px-6 py-4'>{perfumsName}</td>
      <td className='px-6 py-4'>{quantity}</td>
      <td className='px-6 py-4 text-left'>{supplier}</td>
      <td className='px-6 py-4'>${price}</td>
      <td className='px-6 py-4 text-right'>
        <div
          onClick={() => deletePerfumeItem(_id)}
          className='w-9 h-9 bg-red-600 flex justify-center items-center rounded-full cursor-pointer active:scale-105'
        >
          <FontAwesomeIcon className='text-white text-lg' icon={faTrashAlt} />
        </div>
      </td>
    </tr>
  );
};

export default InventoryItem;