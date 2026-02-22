import React from 'react';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/lawlawson/',
    icon: <FaLinkedin className='w-6 h-6' />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/lawlawson',
    icon: <FaGithub className='w-6 h-6' />,
    label: 'GitHub',
  },
  {
    href: 'https://dev.to/lawlawson',
    icon: <FaDev className='w-6 h-6' />,
    label: 'Dev.to',
  },
];

const Main = () => {
  return (
    <div
      id='home'
      className='w-full h-screen text-center bg-white text-gray-800'>
      <div className='max-w-[85%] w-full h-full m-auto flex justify-center items-center px-4'>
        <div>
          {/* Heading */}
          <h1 className='text-5xl font-bold mb-4'>
            Welcome, I&apos;m <span className='text-[#901a1a]'>Lawrence</span>
          </h1>

          {/* Role and Location */}
          <p className='text-2xl text-black mb-2'>Front-End Developer</p>
          <p className='text-lg text-gray-700 mb-6'>London, UK</p>

          {/* Bio */}
          <p className='max-w-prose mx-auto text-lg md:text-xl leading-relaxed tracking-wide px-2 mb-8'>
            I build fast, accessible frontends optimized for Core Web Vitals and
            WCAG compliance. Every interaction is intentional, streamlined UI
            flows, intuitive navigation, measurable performance gains.
          </p>

          {/* Social Media Icons */}
          <div className='flex justify-center items-center space-x-6'>
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                aria-label={label}
                className='bg-[#901a1a] text-white p-4 rounded-lg hover:scale-110 transition-transform duration-300 shadow-md'>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
