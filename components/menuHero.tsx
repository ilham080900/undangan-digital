import React from "react";
const menuHero = () => {
    return (
        <div className="relative w-full h-screen">
        <div className='text-3xl font-bold text-white my-4 text-center items-center'>
          The Wedding of Ceremony
        </div>
        <div className="flex grid grid-flow-col auto-cols-max m-8 items-center justify-center snap-x snap-mandatory">
          <div className="snap-always snap-center mx-3">
              <img src="/images/cover wedding.jpg" className='m-2 p-2' alt='slide preweding' width={280} />
            </div>
            <div className="snap-always snap-center ...">
              <img src="/images/cover wedding.jpg" className='m-2 p-2' alt ='slide preweding' width={280} />
            </div>
            <div className="snap-always snap-center ...">
              <img src="/images/cover wedding.jpg" className='m-2 p-2' alt='slide preweding' width={280} />
            </div>
            <div className="snap-always snap-center ...">
              <img src="/images/cover wedding.jpg" className='m-2 p-2' alt='slide preweding' width={280}  />
            </div>
            <div className="snap-always snap-center ...">
              <img src="/images/cover wedding.jpg" className='m-2 p-2' alt='slide preweding' width={280} />
            </div>
            <div className="snap-always snap-center ...">
              <img src="/images/cover wedding.jpg" className='m-2 p-2' alt="slide preweding" width={280} />
            </div>
          </div>
          <div className='relative text-4xl font-bold text-white m-6 w-full h-full text-center items-center'>
              Icam & Puput
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