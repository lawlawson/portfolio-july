import React from 'react';

const skillGroups = [
  {
    title: 'Core',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Styling + UI',
    items: ['Tailwind CSS', 'Responsive Layouts', 'UI Flows', 'Accessibility'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'Figma Handoff', 'Performance Audits', 'Component Systems'],
  },
];

const SkillsSection = () => {
  return (
    <section className='w-full bg-white py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-gray-900'>Skills + Tools</h2>
        <p className='mt-3 text-lg text-gray-600'>
          Focused on frontend craftsmanship, performance, and accessible UX.
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {group.title}
              </h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='inline-flex items-center rounded-full border border-[#901a1a]/20 bg-[#901a1a]/10 px-3 py-1 text-xs font-semibold text-[#6f1212]'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
