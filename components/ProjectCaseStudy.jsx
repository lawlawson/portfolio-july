import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../data/projectsData';

const ProjectCaseStudy = ({ projectId }) => {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className='w-full min-h-screen flex items-center justify-center'>
        <p className='text-lg text-gray-600'>Project not found</p>
      </div>
    );
  }

  const { title, imageUrl, imageAlt, url, code, tools, caseStudy } = project;

  return (
    <article className='w-full min-h-screen bg-white'>
      {/* Back Navigation */}
      <nav className='sticky top-0 bg-white border-b border-gray-200 z-10'>
        <div className='max-w-4xl mx-auto px-4 py-4'>
          <Link href='/#projects'>
            <a className='text-[#901a1a] font-medium hover:underline'>
              ← Back to Projects
            </a>
          </Link>
        </div>
      </nav>

      {/* Case Study Container */}
      <div className='max-w-4xl mx-auto px-4 py-12'>
        {/* Hero Section */}
        <header className='mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>{title}</h1>

          <div className='relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-6'>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Tech Stack */}
          <div className='mb-6'>
            <h2 className='text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {tools.map((tool) => (
                <span
                  key={tool}
                  className='inline-block bg-[#901a1a] text-white px-4 py-2 rounded text-sm font-medium'>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className='flex gap-4 py-4 border-t border-b border-gray-200'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#901a1a] font-medium hover:underline'
              aria-label={`Visit ${title} project`}>
              → Visit Live Project
            </a>
            <a
              href={code}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#901a1a] font-medium hover:underline'
              aria-label={`View ${title} source code on GitHub`}>
              → Source Code
            </a>
          </div>
        </header>

        {/* Overview Section */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Overview</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            {caseStudy.overview}
          </p>
        </section>

        {/* Challenges Section */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Challenges</h2>
          <ul className='space-y-4'>
            {caseStudy.challenges.map((challenge, index) => (
              <li
                key={index}
                className='flex gap-4 text-gray-700 leading-relaxed'>
                <span className='w-6 h-6 bg-[#901a1a] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold'>
                  {index + 1}
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Solutions Section */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Solutions</h2>
          <ul className='space-y-4'>
            {caseStudy.solutions.map((solution, index) => (
              <li
                key={index}
                className='flex gap-4 text-gray-700 leading-relaxed'>
                <svg
                  className='w-6 h-6 text-[#901a1a] flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Results Section */}
        <section className='mb-12 bg-gray-50 p-8 rounded-lg border-l-4 border-[#901a1a]'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Results</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            {caseStudy.results}
          </p>
        </section>

        {/* Related Projects */}
        <section className='pt-12 border-t border-gray-200'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Explore More
          </h2>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link href='/#projects'>
              <a className='flex-1 bg-[#901a1a] text-white py-3 px-6 rounded font-medium text-center hover:bg-[#700f0f] transition-colors duration-200'>
                Back to All Projects
              </a>
            </Link>
            <Link href='/'>
              <a className='flex-1 border-2 border-[#901a1a] text-[#901a1a] py-3 px-6 rounded font-medium text-center hover:bg-[#901a1a] hover:text-white transition-colors duration-200'>
                Home
              </a>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
