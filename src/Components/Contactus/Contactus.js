import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import contactus from '../../img/contactus.gif';
const Contactus = () => {
  return (
    <div className='pb-10'>
      <div className='w-[80%] mx-auto   my-10 '>
        <div className='bg-white'>
          <form>
            <h4 className='pt-5 text-2xl font-medium block text-center'>
              Contact us
            </h4>
            <div className='grid grid-cols-2 '>
              <div className='p-10 '>
                <div>
                  <label
                    htmlFor='input-group-1'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Name
                  </label>

                  <div className='relative mb-5'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input
                      type='text'
                      id='input-group-1'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                      placeholder='your name'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='input-group-1'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Email
                  </label>

                  <div className='relative mb-6'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input
                      type='text'
                      id='input-group-1'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black'
                      placeholder='your email'
                    />
                  </div>
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='message'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Enter message
                  </label>
                  <textarea
                    name='description'
                    id='message'
                    rows='4'
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Message'
                  ></textarea>
                </div>

                <div></div>
                <button
                  type='button'
                  className='bg-black w-full mt-5 mx-1 text-white px-4 py-2 hover:border-2 hover:border-black hover:bg-white hover:text-black border-2 border-black'
                >
                  Send
                </button>
              </div>
              <div>
                <img src={contactus} alt='' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus