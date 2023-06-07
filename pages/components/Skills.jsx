import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-3xl tracking-widest uppercase text-[#901a1a] text-center mb-8'>
          Skills
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div>
                <Image
                  alt=''
                  src='/../public/assets/skills/html_logo.png'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='uppercase text-xl'>html</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image
                  alt=''
                  src='/../public/assets/skills/css_logo.png'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='uppercase text-xl'>css</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image
                  alt=''
                  src='/../public/assets/skills/javascript_logo.png'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>JavaScript</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image
                  alt=''
                  src='/../public/assets/skills/react_logo.png'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>React</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image
                  alt=''
                  src='/../public/assets/skills/tailwind-icon.png'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
