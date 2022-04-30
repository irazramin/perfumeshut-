import React from 'react';

const Banner = () => {
  return (
    <div className='relative text-white'>
      <img
        className='md:h-[50vh] lg:h-[70vh] w-full object-cover '
        src='https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''
      />
      <div className='absolute top-[50px] lg:top-[100px] left-10 lg:left-14'>
        <h2 className='text-xxl md:text-3xl lg:text-5xl'>
          Welcome to the distributor's distributor. We are the one's <br /> that
          you have been looking for.
        </h2>
      </div>

      {/* <div id='default-carousel' class='relative' data-carousel='static'>
        <div class='overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96'>
          <div
            class='duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20'
            data-carousel-item=''
          >
            <span class='absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800'>
              First Slide
            </span>
            <img
              src='https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
              class='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
              alt='...'
            />
          </div>

          <div
            class='duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10'
            data-carousel-item=''
          >
            <img
              src='https://images.unsplash.com/photo-1514348871858-1d3c20902571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              class='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
              alt='...'
            />
          </div>

          <div
            class='duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10'
            data-carousel-item=''
          >
            <img
              src='https://images.unsplash.com/photo-1595535373192-fc8935bacd89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
              class='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
              alt='...'
            />
          </div>
        </div>

        <div class='flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2'>
          <button
            type='button'
            class='w-3 h-3 rounded-full bg-white dark:bg-gray-800'
            aria-current='true'
            aria-label='Slide 1'
            data-carousel-slide-to='0'
          ></button>
          <button
            type='button'
            class='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to='1'
          ></button>
          <button
            type='button'
            class='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            aria-current='false'
            aria-label='Slide 3'
            data-carousel-slide-to='2'
          ></button>
        </div>

        <button
          type='button'
          class='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
          data-carousel-prev=''
        >
          <span class='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span class='hidden'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          class='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
          data-carousel-next=''
        >
          <span class='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span class='hidden'>Next</span>
          </span>
        </button>
      </div> */}
    </div>
  );
}

export default Banner   