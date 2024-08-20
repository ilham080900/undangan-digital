import React from 'react'
import Image from 'next/image';
import MenuHero from '../../../components/menuHero';
import pageContentCountdown from './components/pageContentCountdown';

const MenuInvitation = () => {
  return (
    <div className='flex flex-col items-center bg-black bg-opacity-50'>
      <div className='relative w-full h-screen'>
      <Image 
        className="bg -z-10"
        src="/images/bg menu.jpg"
        alt="background image"
        fill={true}  
        />
        <MenuHero />
        </div>
        <div className='bg-gray-800 mt-4 mb-4 px-2 py-2'>
          <div className='text-3xl font-bold text-white'>
            {pageContentCountdown()}
          </div>
        </div>
    </div>
  )
}

export default MenuInvitation;