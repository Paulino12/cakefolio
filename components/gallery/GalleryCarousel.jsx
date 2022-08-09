import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { galleryImages } from '../../utils/gallery';
import GalleryImage from './GalleryImage';

const GalleryCarousel = ({ selectedImage, alt }) => {

    const [filteredImages, setFilteredImages] = useState([])

    useEffect(() => {
        setFilteredImages(galleryImages.filter((elt) => elt.img !== selectedImage))
    }, [selectedImage])
    return (
        <Carousel>
            <Image src={selectedImage} layout="intrinsic" width="500" height="500" className='rounded-lg' alt={alt} />
            {
                filteredImages.map((image, index) => {
                    return <div 
                    key={index} 
                    >
                        <GalleryImage 
                        image={image} imgLayout="intrinsic" width="500" height="500" />
                    </div>
                })
            }
        </Carousel>
    )
}

export default GalleryCarousel