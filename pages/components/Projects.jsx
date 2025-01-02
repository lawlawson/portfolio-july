import React from 'react';
import Image from 'next/image';

import manage from '/public/assets/projects/manage.png';
// import socialProof from '/public/assets/projects/social_proof.png';
// import priceGrid from '/public/assets/projects/price_grid.png';
import recipick from '/public/assets/projects/recipick.png';

const Projects = () => {
  const projects = [
    {
      title: 'ReciPick',
      description:
        'ReciPick is a JavaScript based tool that allows users to input an ingredient and find recipes that use that specific ingredient.',
      imageUrl: recipick,
      url: 'https://recipick-v46-tier1-team-02.netlify.app/',
      code: 'https://github.com/chingu-voyages/v46-tier1-team-02',
      tools: 'HTML, CSS & JavaScript',
    },
    {
      title: 'Manage Landing Page',
      description:
        'Landing page project is fully responsive and features a carousel using Swiper. I created this project primarily using Tailwind CSS. It is fully responsive and has some visual changes based on screen/device size.',
      imageUrl: manage,
      url: 'https://celebrated-biscochitos-f95934.netlify.app/',
      tools: 'HTML & Tailwind CSS',
    },
  ];

  return (
    <div id='projects' className='w-full lg:h-screen p-2 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-3xl tracking-widest uppercase text-[#901a1a] text-center pt-48 pb-8'>
          My Projects
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
          {projects.map((project, index) => (
            <div
              key={index}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'>
              <div key={index} className='bg-white rounded-lg shadow-md p-4'>
                <Image
                  src={project.imageUrl}
                  width={900}
                  height={500}
                  alt=''
                  fill={true}
                />
                <h3 className='text-lg font-semibold mb-2 pt-5'>
                  {project.title}
                </h3>
                <p className='text-gray-600'>{project.description}</p>
                <p className='text-gray-600 font-bold'>
                  Tech stack: {project.tools}
                </p>
                <div className='flex justify-left'>
                  <button className='text-white py-2 px-4 mt-4 mr-2'>
                    Project
                  </button>
                  <button className='text-white py-2 px-4 mt-4 ml-2'>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
