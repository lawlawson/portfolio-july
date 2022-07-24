import React from 'react'
import Image from 'next/image'

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
            {/* <Image rounded-xl group-hover:opacity-10 src='' alt='/'/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects