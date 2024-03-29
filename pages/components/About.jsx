import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-3xl tracking-widest text-[#901a1a] text-center'>
            About Me
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            Hello! I just wanted to use this space to share a little bit about
            myself. I am a Front End Developer and absolutely love learning and
            building applications.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            I love working on visually attractive websites/applications that not
            only look stunning, but are also responsive, accessible and easy to
            use for all. I strongly believe that quality testing, web
            optimisation and accessibility are all key components of a good
            project.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            As a Front End Developer I take great pride in my work and am
            committed to delivering the best results possible. My ultimate goal
            is to create web experiences that exceed expectations and leave a
            lasting impression on users. I believe that everyone should have
            access to high-quality digital products, and I am dedicated to
            making that a reality through my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
