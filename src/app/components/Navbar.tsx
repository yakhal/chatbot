'use client';
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image';
import ChatBotLogo from 'public/chatbot_logo.svg';
import Hamburger from 'public/hamburger_menu.svg';
import Close from 'public/close_icon.svg';

const linkData = [
  { name: 'HOME', path: '/', targetSegment: null },
  { name: 'CHAT', path: '/chat', targetSegment: 'chat' },
  { name: 'ABOUT', path: '/about', targetSegment: 'about' },
]

export default function Navbar() {
  const activelinkStyle = 'text-emerald-600 border-b-emerald-600 border-b-2'
  const activeSegment = useSelectedLayoutSegment()
  const [isOpen, setIsOpen] = React.useReducer(isOpen => !isOpen, false);

  return (
    <div className='container mx-auto p-4 md:flex justify-between items-center'>
      <div className='flex items-center justify-between'>
        <a className='flex items-center' href="/">
          <h1 className='inline-flex items-center text-l font-bold space-x-3'>
            <Image className='w-8' src={ChatBotLogo} alt='ChatBot Logo' />
            <div>ChatBOT</div>
          </h1>
        </a>
        <div onClick={setIsOpen}>
          {
            isOpen ?
              <Image className='h-6 w-6 cursor-pointer md:hidden block' src={Close} alt='ChatBot Logo' />
              :
              <Image className='h-6 w-6 cursor-pointer md:hidden block' src={Hamburger} alt='ChatBot Logo' />
          }
        </div>
      </div>
      <nav className={`${isOpen || 'hidden'} w-full md:flex md:items-center md:w-auto`}>
        <ul className='text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0 space-y-2 md:space-y-0'>
          {linkData.map((link) => (
            <li key={link.name} className='rounded-sm'>
              <Link
                onClick={setIsOpen}
                className={`md:p-3 p-2 block text-sm hover:text-emerald-600 ${activeSegment === link.targetSegment ? activelinkStyle : ''}`}
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
