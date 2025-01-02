import React from 'react';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[85%] w-full h-full m-auto flex justify-center items-center'>
        <div>
          <h1 className='py-1 text-gray-600'>
            Welcome, I&apos;m <span className='text-[#901a1a]'>Lawrence</span>
          </h1>
          <p className='py-5 text-[#000000] text-4xl'>Front-End Developer</p>
          <p className='py-5 text-[#000000] text-xl'>London, UK</p>
          <p className='text-gray-700 md:max-w-[60%] mx-auto my-5 text-xl md:text-2xl text-center leading-9'>
            Experienced&nbsp;
            <span className='text-[#901a1a]'>
              &#123;Front-end/Frontend/Front end&#125;
            </span>
            &nbsp;web developer with a passion for web development and learning
            about the latest front end technologies used to create modern,
            stylish, accessible and performant applications that make a positive
            impact in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
