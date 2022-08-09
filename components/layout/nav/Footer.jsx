import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer flex flex-col items-center justify-center text-base'>
      <div>
      © Copyright 
      <strong><span> Cakefolio. </span></strong>
      All Rights Reserved
      </div>
      <div>
        Designed by 
        <Link href="https://www.maryoctav.com">
          <a target="_blank" className='text-green-400'> Mary Octav Ltd</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer