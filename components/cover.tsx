import React from "react";
import router from "next/router";
import Link from "next/link";

const Cover = () => {
    return (
      <div className="relative inset-0 bg-black bg-opacity-50 h-screen w-full">
        <div className="flex flex-col items-center justify-center py-8 px-6 h-screen w-full">
          <div className="text-3xl font-bold italic transition duration-300 cursor-pointer justify-center mb-4">The wedding of</div>
            <div className="text-3xl font-bold cursor-pointer justify-center mb-4">Icam & Puput</div>
              <div className="etxt-1xl font-bold cursor-pointer justify-center mb-4">Wedding invitation</div>
                <div className="text-3xl font-bold cursor-pointer justify-center mb-4">Ilham & Partner</div>
                  <Link href="/menuInvitation" className="bg-backdrop-blur-lg cursor-pointer mb-4">Open Invitation</Link>
        </div>
      </div>
    )
}

export default Cover;