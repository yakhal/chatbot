import React from 'react'
import Image from "next/image";
import SearchIcon from "public/search_icon.svg";

export default function Search() {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <Image className='w-5 fill-gray-600' src={SearchIcon} alt='Search Icon' />
      </div>
      <input type="text" id="searchInput" className="border text-gray-600 text-base rounded-full focus:ring-emerald-400 focus:border-emerald-500 block w-full pl-11 p-3.5 outline-none" placeholder="SEARCH" />
    </div>
  )
}
