import React from 'react';
import Image from 'next/image';

import manage from '/public/assets/projects/manage.png';
import socialProof from '/public/assets/projects/social_proof.png';
import priceGrid from '/public/assets/projects/price_grid.png';

const Projects = () => {
  const projects = [
    {
      title: 'Manage Landing Page',
      description:
        'Landing page project is fully responsive and features a carousel using Swiper. I created this project primarily using Tailwind CSS. It is fully responsive and has some visual changes based on screen/device size.',
      imageUrl: manage,
      url: 'https://celebrated-biscochitos-f95934.netlify.app/',
    },
    {
      title: 'Social Proof Section',
      description:
        'Small section of a larger website project was a great opportunity to work with semantic HTML, flexbox and grid. It is fully responsive.',
      imageUrl: socialProof,
      url: 'https://bejewelled-marigold-51491d.netlify.app/',
    },
    {
      title: 'Single Price Grid Component',
      description:
        'Component from a larger website built using semantic HTML, CSS and Grid. Full responsive and was built pixel perfect from provided designs.',
      imageUrl: priceGrid,
      url: 'https://velvety-custard-2fecd5.netlify.app/',
    },
  ];

  return (
    <div id='projects' className='w-full lg:h-screen p-2 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-3xl tracking-widest uppercase text-[#901a1a] text-center mb-8 pt-8'>
          My Projects
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'>
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
