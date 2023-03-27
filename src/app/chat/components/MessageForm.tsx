import React from 'react';
import Image from 'next/image'
import EmojiIcon from "public/emoji_icon.svg";
import AttachmentIcon from "public/attachment_icon.svg";
import SendIcon from "public/send_icon.svg";

export default function MessageForm() {
  return (
    <div className="flex space-x-2">
      {/* Text Input */}
      <div className="relative grow">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <Image className='w-6 fill-gray-600' src={EmojiIcon} alt='Search Icon' />
        </div>
        <input
          type="text"
          id="searchInput"
          className="border text-gray-800 text-base rounded-full focus:ring-emerald-400 focus:border-emerald-500 block w-full px-11 p-3.5 outline-none bg-slate-100 placeholder-gray-500"
          placeholder="Type a message"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
          <Image className='w-6 fill-gray-600' src={AttachmentIcon} alt='Emoji Button' />
        </div>
      </div>
      {/* Send Button  */}
      <button className='rounded-full bg-emerald-500 p-4'>
        <Image className='w-6' src={SendIcon} alt='Search Icon' />
      </button>
    </div>
  )
}
