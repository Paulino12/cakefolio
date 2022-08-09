import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import "@fortawesome/fontawesome-free/css/all.min.css"
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// Import react scroll
import { Link as LinkScroll } from "react-scroll"

function Navbar() {

    const router = useRouter()

    const [menuToggle, setMenuToggle] = useState(true)

    const [activeLink, setActiveLink] = useState(null)

    return (
        <>
            <nav className="bg-gray-900 fixed w-full z-20">
                <div className="px-5">
                    <div className="flex items-center justify-between py-1">
                        <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" 
                        onClick={() => setMenuToggle(!menuToggle)}
                        className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer ${!menuToggle ? 'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white':''} `} aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="flex items-center justify-between sm:items-stretch sm:justify-start w-full">
                        <div className="flex-shrink-0 flex items-center text-white md:w-1/6">
                            <div className='hidden sm:flex sm:flex-row sm:items-baseline'>
                                <Link href="https://www.maryoctav.com">
                                    <a target="_blank" className='uppercase text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        Cakefolio
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <div className="hidden sm:block sm:ml-6">
                            <div className={`flex space-x-4`}>
                                <LinkScroll 
                                activeClass='active'
                                to="hero"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={() => {
                                    setActiveLink("hero");
                                }}
                                className={`cursor-pointer
                                    ${activeLink === 'hero' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                                    : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    `}
                                >
                                    Home
                                </LinkScroll>
                                <LinkScroll 
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={() => {
                                    setActiveLink("about");
                                }}
                                className={`cursor-pointer
                                    ${activeLink === 'about' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                                    : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    `}
                                >
                                    About
                                </LinkScroll>
                                <LinkScroll 
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={() => {
                                    setActiveLink("gallery");
                                }}
                                className={`cursor-pointer
                                    ${activeLink === 'gallery' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                                    : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    `}
                                >
                                    Gallery
                                </LinkScroll>
                                <LinkScroll 
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={() => {
                                    setActiveLink("contact");
                                }}
                                className={`cursor-pointer
                                    ${activeLink === 'contact' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                                    : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    `}
                                >
                                    Contact
                                </LinkScroll>
                            </div>
                            </div>
                        </div>
                        <div className='flex items-center w-2/3 md:w-1/6'>
                        <div className="space-x-4 w-full flex items-center justify-end">
                            <TwitterIcon fontSize='small' className='cursor-pointer text-gray-400 hover:text-white' />
                            <FacebookIcon fontSize='small' className='cursor-pointer text-gray-400 hover:text-white' />
                            <LinkedInIcon fontSize='small' className='cursor-pointer text-gray-400 hover:text-white' />
                            <InstagramIcon fontSize='small' className='cursor-pointer text-gray-400 hover:text-white' />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${menuToggle ? 'hidden':''} sm:hidden`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                        <LinkScroll 
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={() => {
                            setActiveLink("hero");
                        }}
                        className={`cursor-pointer
                            ${activeLink === 'hero' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                            : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                            `}
                        >
                            Home
                        </LinkScroll>
                        <LinkScroll 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={() => {
                            setActiveLink("about");
                        }}
                        className={`cursor-pointer
                            ${activeLink === 'about' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                            : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                            `}
                        >
                            About
                        </LinkScroll>
                        <LinkScroll 
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={() => {
                            setActiveLink("gallery");
                        }}
                        className={`cursor-pointer
                            ${activeLink === 'gallery' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                            : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                            `}
                        >
                            Gallery
                        </LinkScroll>
                        <LinkScroll 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={() => {
                            setActiveLink("contact");
                        }}
                        className={`cursor-pointer
                            ${activeLink === 'contact' ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
                            : 'text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                            `}
                        >
                            Contact
                        </LinkScroll>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
