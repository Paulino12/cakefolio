import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './forms/Button'


const HeroBanner = () => {
  return (
    <section id='hero' className='relative flex content-center items-center justify-center min-h-screen'>
      <Image src="/assets/img/gallery/heroBanner.jpg" layout='fill' objectFit='cover' priority={true} alt="heroBanner" />
      <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-black" ></span>
      <div className="w-full flex items-center text-center z-10">
        <div className='w-full px-5'>
          <motion.div className='flex flex-col items-center justify-center' initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
            <h2 className='mb-3 text-4xl font-bold lg:w-1/2'>
              I&apos;m 
              <span 
              className='font-serif relative z-10 px-1 inline-block before:absolute before:h-1/2 before:bottom-0 before:left-0 before:right-0 before:bg-green-400 before:-z-10'> 
                Jenny Wilson
              </span> 
              a Professional Baker In The Heart of London</h2>
            <p className='mb-8 text-xl text-gray-400 lg:w-1/2'>
              Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
            </p>
          </motion.div>
          <motion.div>
            <a href='/#contact'>
              <Button btnText="Available for Hire" className="py-2 text-xl md:w-1/4 lg:w-1/6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner