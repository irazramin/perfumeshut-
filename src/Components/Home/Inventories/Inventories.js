import React from 'react';

const Inventories = () => {
  return (
    <div className='bg-white w-[80%] mx-auto mt-10 p-5'>
      <h4 className='text-2xl font-medium text-center'>Inventory</h4>
      <div className='grid grid-cols-2 gap-x-5 gap-y-8 mt-5 '>
        <div className='grid grid-cols-2 gap-3  p-3 shadow-md'>
          <div>
            <img
              className='w-full h-full object-cover '
              src='https://www.luxuryproperty.com/uploads/blog/JAR_Bolt_of_Lightning.jpg'
              alt=''
            />
          </div>
          <div className=''>
            <h4 className='text-[22px] font-medium'>JAR Bolt of Lightning</h4>
            <h5 className='mt-1 text-xl font-semibold '>$400</h5>
            <p className='mt-2 text-[15px]'>
              JAR is the brainchild of Joseph Arthur Rosenthal, a Paris-based
              Americ...
            </p>
            <span className='mt-2 font-medium  block'>Quantity : 4</span>
            <div className=' '>
              <div className='mt-2'>
                <h5 className='font-medium'>Supplier : Alex John</h5>
              </div>
              <div className='text-right mt-4'>
                <button className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
                 Stoke Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3  p-3 shadow-md'>
          <div>
            <img
              className='w-full h-full object-cover '
              src='https://www.luxuryproperty.com/uploads/blog/JAR_Bolt_of_Lightning.jpg'
              alt=''
            />
          </div>
          <div className=''>
            <h4 className='text-[22px] font-medium'>JAR Bolt of Lightning</h4>
            <h5 className='mt-1 text-xl font-semibold '>$400</h5>
            <p className='mt-2 text-[15px]'>
              JAR is the brainchild of Joseph Arthur Rosenthal, a Paris-based
              Americ...
            </p>
            <span className='mt-2 font-medium  block'>Quantity : 4</span>
            <div className=' '>
              <div className='mt-2'>
                <h5 className='font-medium'>Supplier : Alex John</h5>
              </div>
              <div className='text-right mt-4'>
                <button className='bg-black text-white px-4 py-2'>
                  Manage Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3  p-3 shadow-md'>
          <div>
            <img
              className='w-full h-full object-cover '
              src='https://www.luxuryproperty.com/uploads/blog/JAR_Bolt_of_Lightning.jpg'
              alt=''
            />
          </div>
          <div className=''>
            <h4 className='text-[22px] font-medium'>JAR Bolt of Lightning</h4>
            <h5 className='mt-1 text-xl font-semibold '>$400</h5>
            <p className='mt-2 text-[15px]'>
              JAR is the brainchild of Joseph Arthur Rosenthal, a Paris-based
              Americ...
            </p>
            <span className='mt-2 font-medium  block'>Quantity : 4</span>
            <div className=' '>
              <div className='mt-2'>
                <h5 className='font-medium'>Supplier : Alex John</h5>
              </div>
              <div className='text-right mt-4'>
                <button className='bg-black text-white px-4 py-2'>
                  Manage Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3  p-3 shadow-md'>
          <div>
            <img
              className='w-full h-full object-cover '
              src='https://www.luxuryproperty.com/uploads/blog/JAR_Bolt_of_Lightning.jpg'
              alt=''
            />
          </div>
          <div className=''>
            <h4 className='text-[22px] font-medium'>JAR Bolt of Lightning</h4>
            <h5 className='mt-1 text-xl font-semibold '>$400</h5>
            <p className='mt-2 text-[15px]'>
              JAR is the brainchild of Joseph Arthur Rosenthal, a Paris-based
              Americ...
            </p>
            <span className='mt-2 font-medium  block'>Quantity : 4</span>
            <div className=' '>
              <div className='mt-2'>
                <h5 className='font-medium'>Supplier : Alex John</h5>
              </div>
              <div className='text-right mt-4'>
                <button className='bg-black text-white px-4 py-2'>
                  Manage Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-10 '>
        <button className='bg-black text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'>
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Inventories;
