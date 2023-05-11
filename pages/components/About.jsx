import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-3xl tracking-widest text-[#901a1a] text-center'>
            About Me
          </p>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto text-2xl leading-9 text-justify'>
            I am a Front End Developer specialising in building high impact
            digital products. I have around two years working as a professioinal
            developer, and additionally have worked in the Tech industry for
            over 5 years since graduating from University with a degree in
            Business Computing Systems. I have a passion for building beautiful,
            responsive websites with a focus on quality testing, web
            optimisation and accessibility. I primarily work with JavaScript,
            React and Typescript.
          </p>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto text-2xl leading-9 text-justify'>
            I have a passion for building beautiful, responsive websites with a
            focus on quality testing, web optimisation and accessibility. I
            primarily work with JavaScript, React and Typescript. I have been
            exposed to other languages and technologies such as C# and .Net,
            which I am also learning on the side.
          </p>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto text-2xl leading-9 text-justify'>
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
