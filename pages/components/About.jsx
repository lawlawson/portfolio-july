import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16 bg-white text-gray-800'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-3xl tracking-widest text-[#901a1a] text-center'>
            About Me
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            Hey, I&apos;m Lawrence. I genuinely enjoy building things on the web
            and learning as I go. I get a lot of energy from turning an idea or
            a rough design into a real, usable product people can rely on.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            I care about the stuff users actually feel—speed, clarity, and flows
            that just make sense. That means keeping Core Web Vitals in check,
            making sure accessibility is built in, and building components that
            are clean, reusable, and easy to grow over time.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            My main tools are HTML, CSS, JavaScript, React, and Tailwind CSS. I
            like using them to build real products like ReciPick (ingredient-led
            recipe search), the Manage landing page, and my Markdown Previewer,
            because each project teaches me something new about UI, performance,
            and user flow.
          </p>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto text-xl leading-9 text-justify'>
            I&apos;m always looking for the next project to build or improve,
            and I enjoy learning by doing—shipping, testing, and refining until
            the experience feels right. If there&apos;s a new tool or technique
            that can make the product better, I want to try it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
