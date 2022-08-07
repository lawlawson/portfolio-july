import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#901a1a]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-2xl'>
            I am a Front End Developer specialising in building high impact
            digital products. I have over 2+ years working as a developer, in
            addition to working within the Tech industry for 5+ years. I have a
            passion for building beautiful, responsive websites with a focus on
            quality testing, web optimisation and accessibility. I primarily
            work with JavaScript, React and Typescript.
          </p>
          <p className='py-2 text-gray-600 text-2xl'>
            I have a passion for building beautiful, responsive websites with a
            focus on quality testing, web optimisation and accessibility. I
            primarily work with JavaScript, React and Typescript. I have been
            exposed to other languages and technologies such as C# and .Net,
            which I am also learning on the side.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
