import React from 'react';

const steps = [
  {
    title: 'Discover',
    description:
      'Clarify goals, users, and constraints so the UI solves the right problem.',
  },
  {
    title: 'Design + Build',
    description:
      'Turn layouts into responsive, accessible components with strong UI flows.',
  },
  {
    title: 'Optimize',
    description:
      'Tighten performance, audit Core Web Vitals, and validate accessibility.',
  },
  {
    title: 'Iterate',
    description:
      'Ship, test, and refine based on feedback to keep improving the product.',
  },
];

const ProcessSection = () => {
  return (
    <section className='w-full bg-[#f6f7f9] py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-gray-900'>How I Work</h2>
        <p className='mt-3 text-lg text-gray-600'>
          A simple, repeatable process that keeps projects moving and outcomes
          clear.
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
              <p className='text-sm font-semibold text-[#901a1a]'>
                Step {index + 1}
              </p>
              <h3 className='mt-2 text-xl font-semibold text-gray-900'>
                {step.title}
              </h3>
              <p className='mt-3 text-gray-600 leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
