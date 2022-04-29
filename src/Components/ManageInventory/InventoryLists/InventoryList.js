import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useFetch from '../../hooks/useFetch';
const InventoryItem = ({product}) => {
     const {_id, perfumsName, supplier, quantity, price, description, img } = product;
     const [inventory,setInventory] = useFetch();
    const deletePerfumeItem = (id)=>{
        fetch(`https://sheltered-bastion-67111.herokuapp.com/inventory/${id}`,{
            method:"DELETE",

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                
            }
        })
    }
  return (
    <tr>
      <td class='px-6 py-4'>{_id}</td>
      <td class='px-6 py-4'>{perfumsName}</td>
      <td class='px-6 py-4'>{quantity}</td>
      <td class='px-6 py-4 text-left'>{supplier}</td>
      <td class='px-6 py-4'>${price}</td>
      <td class='px-6 py-4 text-right'>
          <div onClick={() => deletePerfumeItem(_id)} className='w-9 h-9 bg-red-600 flex justify-center items-center rounded-full cursor-pointer active:scale-105'>
             <FontAwesomeIcon className='text-white text-lg' icon={faTrashAlt }/>
          </div>
      </td>
    </tr>
  );
}

export default InventoryItem;