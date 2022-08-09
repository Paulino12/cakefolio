import React from 'react'
import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const About = () => {
  return (
    <section id="about" className='relative flex flex-col items-center justify-start min-h-screen py-20'>
        <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="w-full lg:w-full px-4 relative">
                <h2 className="text-4xl pb-3 font-semibold">About</h2>
                <div className='absolute bottom-0.5 left-0 border-b w-full bg-gray-400'></div>
                <div className='absolute bottom-0 left-0 right-0 mx-auto h-1.5 w-14 lg:w-16 bg-green-400'></div>
            </div>
            <span className="text-sm italic mt-2">
                Getting to know Jennifer
            </span>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:px-32 w-full h-full'>
            <div className='w-3/4 md:w-1/3 h-full'>
                <Image src="/assets/img/profile-img.jpg" layout="responsive" width="50" height="50" alt='profile' />
            </div>
            <div className='w-3/4 md:w-2/3 h-full px-3'>
                <h2 className="text-2xl pb-2 font-semibold text-green-400">Professional Baker from London</h2>
                <p className='italic text-gray-500 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                    <ul>
                        <li><ChevronRightIcon fontSize='large' className='text-green-400' /><strong>Email: </strong><span>jennifer@gmail.com</span></li>
                        <li><ChevronRightIcon fontSize='large' className='text-green-400' /><strong>Phone: </strong><span>+44 89833213455</span></li>
                        <li><ChevronRightIcon fontSize='large' className='text-green-400' /><strong>Location: </strong><span>Northolt</span></li>
                    </ul>
                </div>
                <p className='py-3'>
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. 
                    Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. 
                    Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. 
                    Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
                <p>
                    Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. 
                    Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. 
                    Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. 
                    Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About