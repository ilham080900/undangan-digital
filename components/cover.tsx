import React from "react";
import router from "next/router";
import Link from "next/link";

const Cover = () => {
    return (
      <div className="flex flex-col absolute inset-0 bg-black bg-opacity-50 items-center justify-center h-screen w-full">
        <div className="text-3xl font-bold italic text-neutral-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-neutral-100 duration-300 cursor-pointer">The wedding of</div>
        <div className="text-7xl font-bold text-white py-4 px-4 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-neutral-100 duration-300 cursor-pointer">Icam & Puput</div>
        <div className="text-3xl font-bold italic text-neutral-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-neutral-100 duration-300 cursor-pointer py-2 px-2">Wedding invitation</div>
        <div className="text-6xl font-bold text-white my-2 p-2 mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-neutral-100 duration-300 cursor-pointer">Ilham & Partner</div>
        <Link href="/menuInvitation" className="bg-backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 animate-bounce hover:bg-neutral-700 duration-300 shadow-lg shadow-black border border-neutral-800 text-neutral-400 hover:text-neutral-200 font-bold py-3 px-6 rounded-lg my-4">Open Invitation</Link>
        </div>
    )
}

export default Cover;