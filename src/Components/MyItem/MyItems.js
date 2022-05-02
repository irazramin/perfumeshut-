import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleInventory from '../Home/Inventories/SingleInventory';

const MyItems = () => {
  const [myItem,setMyItem] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  console.log(myItem)
  useEffect(() =>{
    fetch(`https://sheltered-bastion-67111.herokuapp.com/user?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  },[email])
  return (
    <div className={`pb-20 bg-stone-50`}>
      <div className=' w-[90%] lg:w-[80%] mx-auto mt-20'>
        {myItem.length > 0 ? (
          <div className={`px-3 p-5  md:p-5 bg-white`}>
            <h4 className='text-2xl font-medium text-center'>
              Your added products
            </h4>
            <div className='grid md:grid-cols-2 gap-x-5 gap-y-8 mt-5'>
              {myItem.map((product) => (
                <SingleInventory key={product._id} product={product} />
              ))}
            </div>
            {/* <div className='text-center mt-10 '>
            <button
              // onClick={handleManageInventory}
              className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
            >
              Manage Inventory
            </button>
          </div> */}
          </div>
        ) : (
          <div className='flex justify-center lg:mt-40  bg-stone-50 h-fit lg:pb-56'>
            <h2 className='text-3xl'>NO ITEMS IN YOUR INVENTORY</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyItems