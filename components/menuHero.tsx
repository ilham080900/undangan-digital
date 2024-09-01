import React from "react";
import Image from "next/image";
const menuHero = () => {
    return (
        <div className="relative items-center justify-center mx-auto w-full h-screen">
        <div className='flex text-3xl font-bold text-white m-4 pt-4 items-center justify-center'>
          The Wedding of Ceremony
        </div>
        <div className="flex pt-4 items-center justify-center snap-x snap-mandatory">
          <div className="scroll-mx-4 snap-always snap-center overflow-x-auto">
              <Image src="/images/cover wedding.jpg" className="m-2 p-2" alt='slide preweding' width={280} height={280}/>
            </div>
            <div className="scroll-mx-4 snap-always snap-center px-4 py-4">
              <Image src="/images/cover wedding.jpg" className="m-2 p-2" alt ='slide preweding' width={280} height={280}/>
            </div>
            <div className="scroll-mx-4 snap-always snap-center px-4 py-4">
              <Image src="/images/cover wedding.jpg" className="m-2 p-2" alt ='slide preweding' width={280} height={280}/>
            </div>
            <div className="scroll-mx-4 snap-always snap-center px-4 py-4">
              <Image src="/images/cover wedding.jpg" className="m-2 p-2" alt ='slide preweding' width={280} height={280} />
            </div>
            <div className="scroll-mx-4 snap-always snap-center px-4 py-4">
              <Image src="/images/cover wedding.jpg" className="m-2 p-2" alt ='slide preweding' width={280} height={280} />
            </div>
            <div className="scroll-mx-4 snap-always snap-center px-4 py-4">
              <Image src="/images/cover wedding.jpg" className="m-2 p-2" alt ='slide preweding' width={280} height={280} />
            </div>
          </div>
          <div className='flex flex-col text-4xl font-bold text-white px-6 py-6 mt-4 pt-4 pb-4 gap-y-4 text-center items-center bg-gray-800'>
            <div className="text-3xl font-semibold">
              Icam & Puput
            </div>
              <div className='text-base font-semibold m-8'>
                Minggu, 32 Agustus 2050
              </div>
              <div>
              </div>
          </div>
        </div>
    )
}

export default menuHero;