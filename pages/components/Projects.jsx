import previewImg from '../../public/assets/projects/previewImg.png';
import todoPreview from '../../public/assets/projects/todoPreview.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-3xl tracking-widest text-[#901a1a]'>
            Projects
          </p>
          <p className='py-4 text-gray-600 text-xl'>Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
