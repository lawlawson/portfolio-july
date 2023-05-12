import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[85%] w-full h-full m-auto p2 flex justify-center items-center'>
        <div>
          <h1 className='py-1 text-gray-600'>
            Welcome, I&apos;m <span className='text-[#901a1a]'>Lawrence</span>
          </h1>
          <p className='py-1 text-[#000000] text-4xl'>Front-End Developer</p>
          <p className='py-1 text-[#000000] text-xl'>London, UK</p>
          <p className='text-gray-700 max-w-[70%] mx-auto my-5 text-xl text-justify tracking-tight'>
            An experienced&nbsp;
            <span className='text-[#901a1a]'>
              &#123;Front-end/Frontend/Front end&#125;
            </span>
            &nbsp;web developer with a passion for web development and learning
            about everything related to front end technologies to create modern
            and stylish applications that make a positive impact in the world.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto p-4'>
            <div className='rounded-full shadow-lg shadow-red-700 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
              <Link href='https://www.linkedin.com/in/lawlawson/'>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-purple-800 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
              <Link href='https://github.com/lawlawson'>
                <AiOutlineGithub />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-green-700 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
              <Link href='https://twitter.com/lawsoncodes'>
                <AiOutlineTwitter />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-blue-800 p-6 cursor-pointer hover-scale-110 ease-in duration-300'>
              <Link href='https://dev.to/narhlawson'>
                <ImBlog />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
