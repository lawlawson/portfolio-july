import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#901a1a]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>{/* <img className='' src='/' alt='/'/> */}</div>
              <div>
                <h2 className='py-2'>Name here</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  Feel free to get in touch with me if you&apos;re curious about
                  any of my work or availability.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with me</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
                    <AiOutlineGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
                    <AiOutlineTwitter />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
                    <ImBlog />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
