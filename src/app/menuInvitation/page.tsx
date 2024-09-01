import React from 'react'
import Image from 'next/image';
import MenuHero from '../../../components/menuHero';
import pageContentCountdown from './components/pageContentCountdown';

const MenuInvitation = () => {
  return (
    <div className='items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-full h-screen'>
      <Image 
        className="bg-background -z-10"
        src="/images/bg menu.jpg"
        alt="background image"
        fill={true}  
        />
        <MenuHero />
        </div>
            {pageContentCountdown()}
    </div>
  )
}

export default MenuInvitation;