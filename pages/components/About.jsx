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
            I am a Front End Developer specialising in building high impact
            digital products. I have worked in the Tech industry for over 7
            years since graduating from University with a degree in Business
            Computing Systems.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            I have worked as a developer for around two years. Prior to becoming
            a developer I worked as a Technical Project Manager and a Technical
            Account Executive. These roles helped me gain an abundance of
            skills, understanding and experience of the the development process,
            which has contributed to making me a better developer.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            I have a passion for building beautiful, responsive websites with a
            focus on quality testing, web optimisation and accessibility.
          </p>
          <p className='py-4 max-w-[90%] m-auto text-xl leading-9 text-justify text-[#901a1a] font-semibold'>
            My goal is to use my skills and knowledge to build web experiences
            that are not only beautiful, but also accessible and easy to use for
            everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
