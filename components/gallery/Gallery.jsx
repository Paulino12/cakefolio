
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion"
import { galleryImages } from '../../utils/gallery'
import GalleryImage from './GalleryImage'
import "@fortawesome/fontawesome-free/css/all.min.css"
import GalleryCarousel from './GalleryCarousel'
import CloseIcon from '@mui/icons-material/Close'

const Gallery = () => {

    const [selectedImage, setSelectedImage] = useState({
        id: null, img: '', alt: ''
    })

    const handleSelectedImage = (id, image, alt) => {
        setSelectedImage({
            id, img: image, alt
        })
    }

    useEffect(() => {
        if(selectedImage.id) {
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'
        }
    }, [selectedImage.id])

    return (
        <section id="gallery" className='flex flex-col items-center justify-start min-h-screen py-20'>
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <div className="w-full lg:w-full px-4 relative">
                    <h2 className="text-4xl pb-3 font-semibold">Gallery</h2>
                    <div className='absolute bottom-0.5 left-0 border-b w-full bg-gray-400'></div>
                    <div className='absolute bottom-0 left-0 right-0 mx-auto h-1.5 w-14 lg:w-16 bg-green-400'></div>
                </div>
                <span className="text-sm italic mt-2">
                    Some of Our Work in a Nutshell
                </span>
            </div>
            <AnimatePresence>
                {
                    selectedImage.id &&
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center z-20'>
                        <div onClick={() => setSelectedImage({})}>
                            <CloseIcon fontSize='large' className='absolute top-20 md:top-20 lg:top-10 right-10 md:right-20 z-10 cursor-pointer' />
                        </div>
                        <div className='p-32'>
                            <GalleryCarousel selectedImage={selectedImage.img} alt={selectedImage.alt} />
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2 px-3'>
                <AnimatePresence>
                    {
                        galleryImages.map((image, index) => {
                            return <motion.div 
                            key={index} 
                            onClick={() => handleSelectedImage(image.id, image.img, image.alt)}
                            >
                                <GalleryImage 
                                image={image} imgLayout="intrinsic" width="500" height="400" />
                            </motion.div>
                        })
                    }
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Gallery