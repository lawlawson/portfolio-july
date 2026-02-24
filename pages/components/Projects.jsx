import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full bg-gray-50 py-20 lg:py-28 scroll-mt-14'>
      <div className='max-w-[1240px] mx-auto px-4 lg:px-8'>
        {/* Section Header */}
        <div className='mb-12 lg:mb-16'>
          <p className='text-sm uppercase tracking-[0.3em] font-semibold text-[#901a1a]'>
            Portfolio
          </p>
          <h2 className='mt-3 text-3xl lg:text-4xl font-bold text-gray-900'>
            All Projects
          </h2>
          <div className='mt-2 h-1 w-12 bg-[#901a1a] rounded'></div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
