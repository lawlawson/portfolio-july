import React from 'react';

const CTASection = () => {
  return (
    <section
      id='contact'
      className='w-full bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28'>
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

            <div className='mt-10 flex flex-col sm:flex-row gap-4'>
              <a
                href='mailto:lawlawson@gmail.com'
                className='inline-flex items-center justify-center rounded-lg bg-[#901a1a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-200 hover:bg-[#a01d1d] hover:shadow-2xl'>
                Get In Touch
              </a>
              <a
                href='https://www.linkedin.com/in/lawlawson/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-lg border-2 border-gray-600 px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:border-[#901a1a] hover:bg-[#901a1a]/10 hover:text-[#ff6b6b]'>
                LinkedIn
              </a>
            </div>

            <p className='mt-6 text-sm text-gray-500'>
              Or find me on{' '}
              <a
                href='https://github.com/lawlawson'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-[#901a1a] transition duration-200'>
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
