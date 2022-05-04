import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(true);
  const [singleItem, setSingleItem] = useState({});
  const { inventoryId } = useParams();
  const [deliveryItem, setDeliveryItem] = useState(0);
  const [restockInput, setRestockInput] = useState('');
  const url = `https://sheltered-bastion-67111.herokuapp.com/inventory/${inventoryId}`;
  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleItem(data[0]);
        setDeliveryItem(data[0].quantity);
        setIsLoading(false)
      });
  }, [url]);

  const deliverProduct = () => {
    if (singleItem.quantity > 0) {
      singleItem.quantity = singleItem.quantity - 1;
      setDeliveryItem(singleItem.quantity);
    }

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        quantity: singleItem.quantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const restockProduct = (e) => {
    e.preventDefault();
    setDeliveryItem(parseInt(restockInput) + parseInt(singleItem.quantity));
    singleItem.quantity =
      parseInt(restockInput) + parseInt(singleItem.quantity);
    const restockItem = singleItem.quantity;
    console.log(restockItem)
    console.log(deliveryItem)
       fetch(url, {
         method: 'PUT',
         headers: {
           'content-type': 'application/json',
         },
         body: JSON.stringify({
           quantity: parseInt(restockItem),
         }),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
         });
    e.target.reset()
  };

   const handleManageInventory = () => {
     navigate('/manageInventory');
   };
  return (
    <>
      {isLoading ? (
        <div className='h-screen flex justify-center mt-40'>
          <h2>Loading....</h2>
        </div>
      ) : (
        <div className='pb-24'>
          <div className='w-[80%]  mx-auto mt-10'>
            <div className='bg-white p-5'>
              <div className='grid lg:grid-cols-2 gap-5 '>
                <div>
                  <img
                    className='w-full h-full object-cover'
                    src={singleItem.img}
                    alt=''
                  />
                </div>
                <div className='pr-10'>
                  <h2 className='text-3xl font-bold'>
                    {singleItem.perfumsName}
                  </h2>
                  <h5 className='mt-3 bg-black text-white inline-block py-[2px] rounded px-3'>
                    {singleItem.supplier}
                  </h5>
                  <p className='mt-4'>{singleItem.description}</p>
                  <p className='mt-6 text-4xl font-semibold'>
                    ${singleItem.price}
                  </p>
                  <div className='mt-10 flex items-center '>
                    <div className=' px-5 py-2 border-[2px]'>
                      <span>Total product : {deliveryItem}</span>
                    </div>
                    <div className='ml-10 flex justify-center items-center'>
                      <button
                        onClick={deliverProduct}
                        className={`${
                          !deliveryItem
                            ? 'bg-red-600'
                            : 'bg-black hover:border-2 hover:border-black hover:text-black  border-2 border-black hover:bg-white'
                        }  w-full  text-white px-4 py-[6px] `}
                      >
                        {deliveryItem ? 'Delivery' : 'Sold'}
                      </button>
                    </div>
                  </div>
                  <form onSubmit={restockProduct}>
                    <div className='grid grid-cols-5 justify-between gap-5 mt-10'>
                      <div className='col-span-3'>
                        <input
                          onBlur={(e) => setRestockInput(e.target.value)}
                          className='w-full'
                          type='number'
                          placeholder='please enter product quantity'
                        />
                      </div>
                      <div className='col-span-2'>
                        <button className='bg-black w-full  text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
                          Restock
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
