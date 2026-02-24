import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/lawlawson/',
    icon: <FaLinkedin className='w-6 h-6' />,
    label: 'LinkedIn',
    gradient: 'from-blue-600 to-blue-800',
    hoverGradient: 'hover:from-blue-700 hover:to-blue-900',
  },
  {
    href: 'https://github.com/lawlawson',
    icon: <FaGithub className='w-6 h-6' />,
    label: 'GitHub',
    gradient: 'from-gray-700 to-gray-900',
    hoverGradient: 'hover:from-gray-800 hover:to-black',
  },
  {
    href: 'https://x.com/lawsoncodes',
    icon: <FaXTwitter className='w-6 h-6' />,
    label: 'X (Twitter)',
    gradient: 'from-slate-800 to-black',
    hoverGradient: 'hover:from-slate-900 hover:to-black',
  },
  {
    href: 'mailto:narhlawson@gmail.com',
    icon: <HiMail className='w-6 h-6' />,
    label: 'Email',
    gradient: 'from-[#901a1a] to-[#b02020]',
    hoverGradient: 'hover:from-[#a02020] hover:to-[#c02828]',
  },
];

const CTASection = () => {
  return (
    <section
      id='contact'
      className='w-full bg-white py-20 lg:py-28 scroll-mt-14'>
      <div className='max-w-[1240px] mx-auto px-4 lg:px-8'>
        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-[#1a1f35] to-[#0f172a] px-8 py-16 lg:px-16 lg:py-20 border border-gray-800/50 shadow-2xl'>
          <div className='absolute inset-0 bg-gradient-to-br from-[#901a1a]/10 via-transparent to-transparent opacity-50'></div>

          <div className='relative z-10 max-w-2xl'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white leading-tight'>
              Let&apos;s work together
            </h2>
            <div className='mt-3 h-1 w-12 bg-[#901a1a] rounded'></div>

            <p className='mt-6 text-lg text-gray-300 leading-relaxed'>
              I&apos;m always interested in new projects and collaboration. If
              you need a frontend developer who cares about speed,
              accessibility, and building great UI systems,{' '}
              <span className='text-white font-semibold'>
                let&apos;s connect
              </span>
              .
            </p>

            <div className='mt-10 flex items-center gap-4'>
              {socialLinks.map(
                ({ href, icon, label, gradient, hoverGradient }) => (
                  <a
                    key={label}
                    href={href}
                    {...(label !== 'Email' && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                    aria-label={label}
                    className={`
                    relative group
                    bg-gradient-to-br ${gradient} ${hoverGradient}
                    text-white p-4 rounded-full
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
