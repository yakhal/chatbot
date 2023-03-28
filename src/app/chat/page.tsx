import Link from 'next/link';
import { chatsInfo } from './constants'

export default function ChatCoversations() {

  return (
    <>
      {chatsInfo.map((chat) => (
        <Link href='/chat/chatwindow' className="flex space-x-3">
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
  );
}