import Image from 'next/image'
import Link from 'next/link';
import previewImg  from '../../public/assets/projects/previewImg.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-full mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#901a1a]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem title='Markdown Previewer' backgroundImg={previewImg} projectUrl='/property'/>
        <ProjectItem title='Markdown Previewer' backgroundImg={previewImg} projectUrl='/property'/>
        <ProjectItem title='Markdown Previewer' backgroundImg={previewImg} projectUrl='/property'/>
        <ProjectItem title='Markdown Previewer' backgroundImg={previewImg} projectUrl='/property'/>
        {/* <ProjectItem title='Todo' backgroundImg={previewImg} projectUrl='/property'/> */}
        </div>
      </div>
    </div>
  )
}

export default Projects