import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28 scroll-mt-14'>
      <div className='max-w-[1240px] mx-auto px-4 lg:px-8'>
        {/* Section Header */}
        <div className='mb-16 lg:mb-20'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-1 h-8 bg-gradient-to-b from-[#901a1a] to-[#b02020] rounded-full' />
            <p className='text-sm uppercase tracking-[0.3em] font-semibold text-[#901a1a]'>
              Portfolio
            </p>
          </div>
          <h2 className='mt-2 text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight'>
            Featured Projects
          </h2>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed'>
            Explore a selection of recent projects showcasing my expertise in
            building responsive, performant frontends with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
