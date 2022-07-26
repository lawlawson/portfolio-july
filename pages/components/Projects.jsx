import Image from 'next/image'
import Link from 'next/link';
import previewImg  from '../../public/assets/projects/previewImg.png'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-full mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#901a1a]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#901a1a] to-[#901]'>
            <Image className='rounded-xl group-hover:opacity-10' src={previewImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>Markdown Previewer</h3>
            <p className='pb-4 pt-2 text-white text-center'>React.js</p>
            <Link href='/'>
              <p className='text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer'>More info</p>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects