import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiBook } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { id, title, description, imageUrl, imageAlt, url, code, tools } =
    project;

  return (
    <article className='group h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
      {/* Image Container with Overlay */}
      <div className='relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className='object-cover transition duration-500 group-hover:scale-110'
          priority={false}
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300' />
      </div>

      {/* Card Content */}
      <div className='relative z-10 flex flex-col flex-1 p-6'>
        {/* Title */}
        <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#901a1a] transition duration-300'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3'>
          {description}
        </p>

        {/* Tech Stack */}
        <div className='mb-6 flex flex-wrap gap-2'>
          {tools.map((tool) => (
            <span
              key={tool}
              className='inline-flex items-center rounded-full bg-gradient-to-r from-[#901a1a]/10 to-[#901a1a]/5 border border-[#901a1a]/20 px-3 py-1.5 text-xs font-semibold text-[#7a1515] hover:border-[#901a1a]/40 transition duration-200'
              aria-label={`Technology: ${tool}`}>
              {tool}
            </span>
          ))}
        </div>

        {/* Action Links - Spacer for bottom positioning */}
        <div className='mt-auto' />

        {/* Action Links */}
        <div className='flex gap-3 flex-wrap'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2 flex-1 min-w-[120px] rounded-lg bg-gradient-to-r from-[#901a1a] to-[#b02020] hover:from-[#a02020] hover:to-[#c02828] px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 group/btn'
            aria-label={`View ${title} project`}>
            <FiExternalLink className='w-4 h-4 transition-transform group-hover/btn:translate-x-0.5' />
            <span>Live</span>
          </a>
          <a
            href={code}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2 flex-1 min-w-[120px] rounded-lg border-2 border-gray-200 hover:border-[#901a1a] bg-white hover:bg-[#901a1a]/5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#901a1a] transition-all duration-200 group/btn'
            aria-label={`View ${title} source code`}>
            <FiGithub className='w-4 h-4 transition-transform group-hover/btn:scale-110' />
            <span>Code</span>
          </a>
          <Link href={`/projects/${id}`}>
            <a
              className='inline-flex items-center justify-center gap-2 flex-1 min-w-[120px] rounded-lg border-2 border-gray-200 hover:border-[#901a1a]/30 bg-white hover:bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#901a1a] transition-all duration-200 group/btn'
              aria-label={`Read ${title} case study`}>
              <FiBook className='w-4 h-4 transition-transform group-hover/btn:rotate-3' />
              <span>Study</span>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
