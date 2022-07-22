import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className='text-xl tracking-widest uppercase text-[#901a1a]'>Skills</p>
        <h2 className='py-4'>My Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image alt="" src='/' width='64px' height='64px'/>
              </div>
            </div>
          </div>


          </div>
      </div>
    </div>
  )
}

export default Skills