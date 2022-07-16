import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub,AiOutlineTwitter } from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-600">Welcome, I&apos;m <span className="text-[#901a1a]">Lawrence</span></h1>
          <h1 className="py-2 text-gray-600">Front End Developer</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">I&apos;m a front end web developer specialising in building high quality digital products.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default Main