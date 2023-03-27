import Link from 'next/link'
import React from 'react'

export default function ConversationsList() {
  const chatsInfo = [
    {
      id: '1',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'Prakhar Rastogi',
      subTitle: 'Hello, How are you?',
      time: '9:00',
    },
    {
      id: '2',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'John Doe',
      subTitle: 'Mai hoon India',
      time: '12:20',
    },
    {
      id: '3',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'Lisa Ann',
      subTitle: 'Hi Babe.',
      time: '13:23',
    },
    {
      id: '4',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'Prakhar Rastogi',
      subTitle: 'Hello, How are you?',
      time: '9:00',
    },
    {
      id: '5',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'John Doe',
      subTitle: 'Mai hoon India',
      time: '12:20',
    },
    {
      id: '6',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'Lisa Ann',
      subTitle: 'Hi Babe.',
      time: '13:23',
    },
    {
      id: '7',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'Prakhar Rastogi',
      subTitle: 'Hello, How are you?',
      time: '9:00',
    },
    {
      id: '8',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'John Doe',
      subTitle: 'Mai hoon India',
      time: '12:20',
    },
    {
      id: '9',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      title: 'Lisa Ann',
      subTitle: 'Hi Babe.',
      time: '13:23',
    }
  ]
  return (
    <>
      {chatsInfo.map((chat) => (
        <Link href='/chat/chat_window' className="flex space-x-3">
          <div>
            <img className="w-12 h-12 rounded-full" src={chat.avatar} alt="Rounded avatar" />
          </div>
          <div className="grow">
            <div className="flex justify-between">
              <h2 className="text-base font-bold">{chat.title}</h2>
              <p className="text-sm">{chat.time}</p>
            </div>
            <p className="text-sm font-light">{chat.subTitle}</p>
            <div className="pb-5 border-b border-zinc-200"></div>
          </div>
        </Link>
      ))}
    </>
  )
}
