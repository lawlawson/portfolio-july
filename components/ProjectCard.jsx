import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const { id, title, description, imageUrl, imageAlt, url, code, tools } = project;

  return (
    <article className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      {/* Image Container */}
      <div className='relative w-full h-64 overflow-hidden bg-gray-100'>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className='object-cover hover:scale-105 transition-transform duration-300'
          priority={false}
        />
      </div>

      {/* Card Content */}
      <div className='p-6 flex flex-col h-full'>
        {/* Title */}
        <h3 className='text-xl font-semibold mb-3 text-gray-800'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 mb-4 flex-grow leading-relaxed'>
          {description}
        </p>

        {/* Tech Stack */}
        <div className='mb-4'>
          <p className='text-sm font-semibold text-gray-700 mb-2'>
            Tech stack:
          </p>
          <div className='flex flex-wrap gap-2'>
            {tools.map((tool) => (
              <span
                key={tool}
                className='inline-block bg-[#901a1a] text-white text-xs px-3 py-1 rounded'
                aria-label={`Technology: ${tool}`}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3 pt-4 border-t border-gray-200'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1'>
            <button
              className='w-full bg-[#901a1a] text-white py-2 px-4 rounded font-medium hover:bg-[#700f0f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#901a1a] focus:ring-offset-2'
              aria-label={`View ${title} project`}>
              View Project
            </button>
          </a>
          <a
            href={code}
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1'>
            <button
              className='w-full border-2 border-[#901a1a] text-[#901a1a] py-2 px-4 rounded font-medium hover:bg-[#901a1a] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#901a1a] focus:ring-offset-2'
              aria-label={`View ${title} source code`}>
              Source Code
            </button>
          </a>
          <Link href={`/projects/${id}`}>
            <a>
              <button
                className='flex-1 text-[#901a1a] py-2 px-4 rounded font-medium hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#901a1a] focus:ring-offset-2'
                aria-label={`Read ${title} case study`}>
                Case Study
              </button>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
