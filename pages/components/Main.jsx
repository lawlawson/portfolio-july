import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/lawlawson/',
    icon: <FaLinkedin className='w-7 h-7' />,
    label: 'LinkedIn',
    gradient: 'from-blue-600 to-blue-800',
    hoverGradient: 'hover:from-blue-700 hover:to-blue-900',
  },
  {
    href: 'https://github.com/lawlawson',
    icon: <FaGithub className='w-7 h-7' />,
    label: 'GitHub',
    gradient: 'from-gray-700 to-gray-900',
    hoverGradient: 'hover:from-gray-800 hover:to-black',
  },
  {
    href: 'https://dev.to/lawlawson',
    icon: <FaDev className='w-7 h-7' />,
    label: 'Dev.to',
    gradient: 'from-gray-800 to-gray-950',
    hoverGradient: 'hover:from-gray-900 hover:to-black',
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
          <div className='flex justify-center items-center space-x-4 md:space-x-6 mb-8'>
            {socialLinks.map(
              ({ href, icon, label, gradient, hoverGradient }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={label}
                  className={`
                  relative group
                  bg-gradient-to-br ${gradient} ${hoverGradient}
                  text-white p-5 rounded-full
                  transform transition-all duration-300 ease-out
                  hover:scale-110 hover:-translate-y-1
                  shadow-md hover:shadow-lg
                  before:absolute before:inset-0 before:rounded-full
                  before:bg-white before:opacity-0 hover:before:opacity-10
                  before:transition-opacity before:duration-300
                  ring-2 ring-transparent hover:ring-white/20
                  active:scale-95
                `}>
                  <span className='relative z-10 transition-transform duration-300 group-hover:rotate-12'>
                    {icon}
                  </span>
                </a>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div>
            <Link href='/#featured'>
              <a
                className='
                inline-flex items-center gap-2
                bg-gradient-to-r from-[#901a1a] to-[#b02020]
                hover:from-[#a02020] hover:to-[#c02828]
                text-white font-semibold
                px-8 py-4 rounded-full
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-xl
                active:scale-95
                shadow-lg
                group
              '>
                Featured Work
                <HiArrowDown className='w-5 h-5 transition-transform duration-300 group-hover:translate-y-1' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
