import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Manage Landing Page',
      description:
        'Landing page project is fully responsive and features a carousel using Swiper. I created this project primarily using Tailwind CSS. It is fully responsive and has some visual changes based on screen/device size.',
      imageUrl: '/public/assets/projects/manage.png',
      url: 'https://celebrated-biscochitos-f95934.netlify.app/',
    },
    {
      title: 'Social Proof Section',
      description:
        'Small section of a larger website project was a great opportunity to work with semantic HTML, flexbox and grid. It is fully responsive.',
      imageUrl: '/public/assets/projects/social_proof.png',
      url: 'https://bejewelled-marigold-51491d.netlify.app/',
    },
    {
      title: 'Product Preview Card',
      description:
        'Product preview component built with the purpose of using semantic HTML and writing CSS using BEM methodology. This was a good attempt at building a pixel perfect design.',
      imageUrl: '/public/assets/projects/product_preview.png',
      url: 'https://sensational-eclair-c6c44c.netlify.app/',
    },
    {
      title: 'Markdown Preview',
      description:
        'Markdown Previewer built with react. Based on a FreeCodeCamp curriculum project where the aim was to build a project that allows you to preview markdown text based on user input.',
      imageUrl: '/public/assets/projects/previewImg.png',
      url: 'https://mp-react.netlify.app/',
    },
    {
      title: 'Create-A-List',
      description:
        'Application built with React that allows you to create a todo list. You can strike through completed items, remove items all together and also filter by completed and uncompleted items. Also uses local storage to keep track of changes.',
      imageUrl: '/public/assets/projects/todoPreview.png',
      url: 'https://lawson-todo-app.netlify.app/',
    },
  ];

  return (
    <div id='projects' className='w-full lg:h-screen p-2'>
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
