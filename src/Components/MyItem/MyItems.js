
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleMyItem from './SingleMyItem/SingleMyItem';

const MyItems = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://sheltered-bastion-67111.herokuapp.com/user?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [email]);

   const deletePerfumeItem = (id) => {
     const url = `https://sheltered-bastion-67111.herokuapp.com/inventory/${id}`;
     fetch(url, {
       method: 'DELETE',
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.deletedCount > 0) {
           const afterDelete = myItem.filter((user) =>{
            console.log(user._id, id);
            return user._id !== id;
           });
           setMyItem(afterDelete);
           setShowModal(false)
           console.log(afterDelete)
         }
       });
   };

   console.log(myItem)
  return (
    <div className={`pb-20 relative `}>
      <div className=' w-[90%] lg:w-[80%] mx-auto mt-20'>
        {myItem.length > 0 ? (
          <div className={`px-3 p-5  md:p-5 bg-white `}>
            <h4 className='text-2xl font-medium text-center'>
              Your added products
            </h4>
            <div className='grid md:grid-cols-2 gap-x-5 gap-y-8 mt-5'>
              {myItem.map((product) => (
                <>
                  <SingleMyItem
                    onDelete={deletePerfumeItem}
                    key={product._id}
                    product={product}
                  />
                </>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex justify-center lg:mt-40  bg-stone-50  lg:pb-56'>
            <h2 className='text-3xl'>NO ITEMS IN YOUR INVENTORY</h2>
          </div>
        )}
        {/* mx-auto flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center */}
      </div>
    </div>
  );
};

export default MyItems;
