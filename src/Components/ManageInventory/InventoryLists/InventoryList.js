import React from 'react';

const InventoryItem = ({product}) => {
  return (
    <tr key={product._id}>
      <td class='px-6 py-4'>{product._id}</td>
      <td class='px-6 py-4'>{product.perfumsName}</td>
      <td class='px-6 py-4'>{product.quantity}</td>
      <td class='px-6 py-4 text-left'>{product.supplier}</td>
      <td class='px-6 py-4'>${product.price}</td>
      <td class='px-6 py-4 text-right'></td>
    </tr>
  );
}

export default InventoryItem;