import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


const GalleryImage = ({ image: {id, img, alt}, imgLayout, width, height }) => {
    return (
        <motion.div 
        className='cursor-pointer relative'>
            <motion.div className='rounded-lg'>
                <Image src={img} layout={imgLayout} width={width} height={height} alt={alt} 
                className='hover:scale-110 transition-all rounded-md' />
            </motion.div>          
        </motion.div>
    )
}

export default GalleryImage