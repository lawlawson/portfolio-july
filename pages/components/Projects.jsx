import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section id='projects' className='w-full lg:h-screen p-2 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-3xl tracking-widest uppercase text-[#901a1a] text-center pt-48 pb-8'>
          My Projects
        </p>
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
