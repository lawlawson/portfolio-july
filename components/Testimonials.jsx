import React from 'react';

const Testimonials = () => {
  return (
    <section className='w-full bg-[#f6f7f9] py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-gray-900'>Feedback</h2>
        <p className='mt-3 text-lg text-gray-600'>
          A short note from collaboration and project work.
        </p>
        <figure className='mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm'>
          <blockquote className='text-lg text-gray-700 leading-relaxed'>
            “Lawrence has a great eye for detail and a calm, methodical
            approach. He improved our UI flows, delivered on time, and always
            kept performance and accessibility in mind.”
          </blockquote>
          <figcaption className='mt-6 text-sm font-semibold text-gray-900'>
            — Team Lead, Frontend Collaboration
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
