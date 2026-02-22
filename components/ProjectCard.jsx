import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const { id, title, description, imageUrl, imageAlt, url, code, tools } =
    project;

  return (
    <article className='group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/90 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#901a1a]/5 opacity-0 transition duration-300 group-hover:opacity-100' />

      {/* Image Container */}
      <div className='relative w-full aspect-[16/10] overflow-hidden'>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className='object-cover transition duration-500 group-hover:scale-105'
          priority={false}
        />
      </div>

      {/* Card Content */}
      <div className='relative z-10 flex h-full flex-col p-6'>
        <div className='mb-3 flex flex-wrap gap-2'>
          {tools.map((tool) => (
            <span
              key={tool}
              className='inline-flex items-center rounded-full border border-[#901a1a]/20 bg-[#901a1a]/10 px-3 py-1 text-xs font-semibold text-[#6f1212]'
              aria-label={`Technology: ${tool}`}>
              {tool}
            </span>
          ))}
        </div>

        <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>

        <p className='mt-3 text-gray-600 leading-relaxed'>{description}</p>

        {/* Action Links */}
        <div className='mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-[#901a1a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#700f0f] focus:outline-none focus:ring-2 focus:ring-[#901a1a] focus:ring-offset-2'
            aria-label={`View ${title} project`}>
            Project
          </a>
          <a
            href={code}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full border border-[#901a1a] px-4 py-2 text-sm font-semibold text-[#901a1a] transition duration-200 hover:bg-[#901a1a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#901a1a] focus:ring-offset-2'
            aria-label={`View ${title} source code`}>
            Code
          </a>
          <Link href={`/projects/${id}`}>
            <a
              className='inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition duration-200 hover:border-[#901a1a] hover:text-[#901a1a] focus:outline-none focus:ring-2 focus:ring-[#901a1a] focus:ring-offset-2'
              aria-label={`Read ${title} case study`}>
              Case Study
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
