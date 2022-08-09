import React from 'react'
import PlaceIcon from '@mui/icons-material/Place'
import EmailIcon from '@mui/icons-material/Email'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import Input from './forms/Input'
import Textarea from './forms/Textarea'
import Button from './forms/Button'

const Contact = () => {
  return (
    <section id="contact" className='relative flex flex-col items-center justify-start min-h-screen py-20'>
        <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="w-full lg:w-full px-4 relative">
                <h2 className="text-4xl pb-3 font-semibold">Contact Us</h2>
                <div className='absolute bottom-0.5 left-0 border-b w-full bg-gray-400'></div>
                <div className='absolute bottom-0 left-0 right-0 mx-auto h-1.5 w-14 lg:w-16 bg-green-400'></div>
            </div>
            <span className="text-sm italic mt-2">
                Reach out to us
            </span>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full'>            
            <div className='flex flex-col md:flex-row items-start justify-between w-3/4 mb-5 space-y-3 md:space-x-0'>
                <div className='flex flex-col md:flex-row gap-2 items-start justify-center w-full'>
                    <div>
                        <PlaceIcon fontSize='large' className='text-green-400' />
                    </div>
                    <div>
                        <h4 className='text-gray-400 text-lg font-semibold'>Location:</h4>
                        <p className='text-sm'>43 Highway, Northolt, London, UN3 4EA</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-start justify-center w-full'>
                    <div>
                        <EmailIcon fontSize='large' className='text-green-400' />
                    </div>
                    <div>
                        <h4 className='text-gray-400 text-lg font-semibold'>Email:</h4>
                        <p className='text-sm'>info@example.com</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-start justify-center w-full'>
                    <div>
                        <SmartphoneIcon fontSize='large' className='text-green-400' />
                    </div>
                    <div>
                        <h4 className='text-gray-400 text-lg font-semibold'>Call:</h4>
                        <p className='text-sm'>+44 6533456233</p>
                    </div>
                </div>
            </div>
            <div className='w-3/4'>
                <div className='flex flex-col md:flex-row gap-3 mb-3'>
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" />
                </div>
                <div className='mb-3'>
                    <Input placeholder="Subject" />
                </div>
                <div className='mb-3'>
                    <Textarea placeholder="Subject" />
                </div>
                <div className='text-center'>
                    <Button btnText="Send Message" className="py-2 text-xl md:w-1/4 lg:w-1/6" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact