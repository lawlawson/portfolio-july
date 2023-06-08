import Image from 'next/image';
import React from 'react';
import htmlLogo from '/public/assets/skills/html_logo.png';
import cssLogo from '/public/assets/skills/css_logo.png';
import javaScriptLogo from '/public/assets/skills/javascript_logo.png';
import reactLogo from '/public/assets/skills/react_logo.png';
import typescriptLogo from '/public/assets/skills/ts_logo.png';
import nextjsLogo from '/public/assets/skills/nextjs_logo.png';
import gitLogo from '/public/assets/skills/git_logo.png';

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
                <Image alt='' src={htmlLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='uppercase text-xl'>html</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image alt='' src={cssLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='uppercase text-xl'>css</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image alt='' src={javaScriptLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>JavaScript</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image alt='' src={reactLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>React</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image alt='' src={typescriptLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>TypeScript</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image alt='' src={nextjsLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>Next.js</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image alt='' src={gitLogo} width='64px' height='64px' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
