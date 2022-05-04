import React from 'react';

const Blogs = () => {
  return (
    <div className='bg-white my-10 w-[90%] lg:w-[80%] mx-auto  p-4  md:p-5 flex items-start justify-start'>
      <div>
        <article className='my-5 shadow-md p-5'>
          <h2 className='font-semibold text-xl mb-5'>
           1. Difference between javascript and nodejs?
          </h2>
          <p className=' '>
            জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাংগুয়েজ ,যেটি ব্রাউজারে রান করে।
            কিন্তু নোড জাভাস্ক্রিপ্টের জন্য একটি interpreter অথবা রান টাইম
            environment,যেটিতে অনেক গুলো লাইব্রেরী আছে। এক বাক্যে বলা যেতে পারে
            জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাংগুয়েজ ,এটি যে কোনো ব্রাউজারে রান
            করতে পারে তার default environment দিয়ে । এটি অনেক স্ট্রোং ল্যাংগুয়েজ
            । অপরদিকে নোডজেএস অনেক গুলো লাইব্রেরী দিয়ে তৈরী যেটা সাধারণত নরমালি
            জাভাস্ক্রিপ্টের সাথে ব্যবহার করতে পারি। এটি অনেক environment অথবা
            interpreter যেটি যেকোনো জাভাস্ক্রিপ্ট প্রোগ্রাম রান করতে পারে এটি
            মূলত non-blocking operation exceute করে থাকে।
          </p>
        </article>
        <article className='my-5 shadow-md p-5'>
          <h2 className='font-semibold text-xl mb-5'>
           2. Differences between sql and nosql databases.?
          </h2>
          <p className=' '>
            <ul>
              <h4 className='font-semibold '>SQL database : </h4>
              <li>১। SQL databases ভার্টিক্যালি scalable </li>
              <li>২। SQL database এ ডাটা টেবিল আকারে থাকে।</li>
              <li>৩। SQL database একটি relational database</li>
              <li>
                ৪। এই ডেটাবেজ গুলো hierarchical data storage এর জন্য পারফেক্ট
                না।
              </li>

              <h4 className='font-semibold mt-5'> NoSQL database :</h4>
              <li> ১। NoSQL databases হরিজোন্ট্যালি scalable</li>
              <li> ২। NoSQL database e ডাটা ডকুমেন্ট আকারে থাকে।</li>
              <li> ৩। NoSQL databases একটি non-relational database</li>
              <li>
                ৪। কিন্তু এই ডেটাবেজ গুলো hierarchical data storage এর জন্য অনেক
                ভালো।
              </li>
            </ul>
          </p>
        </article>
        <article className='my-5 shadow-md p-5'>
          <h2 className='font-semibold text-xl mb-5'>
           3. What is the purpose of jwt and how does it work?
          </h2>
          <p className=' '>
            jwt অথবা JSON Web Token মূলত ক্লাইন্ড এবং সার্ভার সাইটের মধ্যে
            সিকিউরিটি ইনফরমেশন আদান প্রদান কে বোঝানো হয় । এদের ২ জনই encoded
            json অব্জেক্ট রাখে । jwt মূলত cryptographic algorithm
           ব্যবহার করে থাকে। সার্ভার সাইড থেকে api এর মাধ্যমে রিকুয়েস্ট পাঠানো হয় ক্লাইন্ড থেকে সেটা রিসিভ করে 
           তার প্রয়োজনী ইনফরমেশন সহ আবার সেই টোকেন টা সার্ভার সাইটে পাঠানো হয় , টোকেন টাকে ডিকোড করে ইনফরমেশন এর সাথে ম্যাচ করানো হয়</p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
