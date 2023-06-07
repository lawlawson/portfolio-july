import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Manage Landing Page',
      description:
        'This landing page project is fully responsive and features a carousel using Swiper. I created this project primarily using Tailwind CSS.',
      // stack:'HTML, CSS, and JavaScript',
      imageUrl: '/../public/assets/projects/manage.png',
      url: 'https://celebrated-biscochitos-f95934.netlify.app/',
    },
    {
      title: 'Social Proof Section',
      description: 'This is the second project!!!',
      imageUrl: '/',
    },
    {
      title: 'Product Preview Card',
      description: 'This is the second project!!!',
      imageUrl: '/',
    },
    {
      title: 'Results Summary Component',
      description: 'This is the second project!!!',
      imageUrl: '/',
    },
    {
      title: 'POD Request Landing Page',
      description: 'This is the second project!!!',
      imageUrl: '/',
    },
    {
      title: 'Markdown Preview',
      description: 'This is the second project!!!',
      imageUrl: '/../public/assets/projects/previewImg.png',
    },
    // {
    //   title: 'Todo App',
    //   description: 'This is the second project!!!',
    //   imageUrl: '/../public/assets/projects/todoPreview.png',
    // },
  ];

  return (
    <div id='projects' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-3xl tracking-widest uppercase text-[#901a1a] text-center mb-8'>
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
                {/* <p className='text-md font-bold mb-2'>{project.stack}</p> */}
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
