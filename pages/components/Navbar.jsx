import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineMenu,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/previewer' || router.asPath === '/todo') {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <Link href='/'>
            <div className='ml-10 text-m font-bold uppercase hover:border-b transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
              Home
            </div>
          </Link>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/#about'>
              <li className='ml-10 text-m uppercase hover:border-b transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-m uppercase hover:border-b transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-m uppercase hover:border-b transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                Projects
              </li>
            </Link>
            {/* <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link> */}
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>Lawrence Narh-Lawson</Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#901a1a]'>
                Find me on
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineTwitter />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <ImBlog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
