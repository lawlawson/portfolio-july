import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../data/projectsData';

const FeaturedProject = () => {
  const project = projectsData[0];

  if (!project) {
    return null;
  }

  return (
    <section className='w-full bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28'>
      <div className='max-w-[1240px] mx-auto px-4 lg:px-8'>
        {/* Section Header */}
        <div className='mb-12 lg:mb-16'>
          <p className='text-sm uppercase tracking-[0.3em] font-semibold text-[#901a1a]'>
            Featured Work
          </p>
          <h2 className='mt-3 text-3xl lg:text-4xl font-bold text-gray-900'>
            Recent Project Highlight
          </h2>
          <div className='mt-2 h-1 w-12 bg-[#901a1a] rounded'></div>
        </div>

        {/* Featured Project Card */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch'>
          {/* Image */}
          <div className='lg:col-span-3'>
            <div className='relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200/80 shadow-lg hover:shadow-2xl transition duration-500 group'>
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                fill
                className='object-cover group-hover:scale-105 transition duration-500'
                priority={false}
              />
            </div>
          </div>

          {/* Content */}
          <div className='lg:col-span-2 flex flex-col justify-between'>
            <div>
              <h3 className='text-2xl lg:text-3xl font-bold text-gray-900'>
                {project.title}
              </h3>
              <p className='mt-4 text-gray-700 leading-relaxed text-lg'>
                {project.caseStudy.overview}
              </p>

              {/* Tech Stack */}
              <div className='mt-6'>
                <p className='text-xs uppercase font-semibold text-gray-600 tracking-wider mb-3'>
                  Tech Stack
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className='inline-block px-3 py-1.5 bg-gray-100 border border-gray-300 text-xs font-semibold text-gray-800 rounded-full'>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Result */}
              <div className='mt-8 p-4 bg-[#901a1a]/5 border-l-4 border-[#901a1a] rounded'>
                <p className='text-xs uppercase font-semibold text-[#901a1a] tracking-wider'>
                  Key Outcome
                </p>
                <p className='mt-2 text-gray-900 font-medium leading-relaxed'>
                  {project.caseStudy.results}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='mt-8 flex flex-col gap-3'>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-lg bg-[#901a1a] px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#700f0f] hover:shadow-lg'>
                View Live Project
              </a>
              <a
                href={project.code}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-lg border-2 border-[#901a1a] px-5 py-3 text-sm font-semibold text-[#901a1a] transition duration-200 hover:bg-[#901a1a] hover:text-white'>
                View Source Code
              </a>
              <Link href={`/projects/${project.id}`}>
                <a className='inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition duration-200 hover:border-[#901a1a] hover:text-[#901a1a] hover:bg-gray-50'>
                  Read Case Study
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
