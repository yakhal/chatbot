'use client'
import React from 'react';
import Image from 'next/image'
import EmojiIcon from "public/emoji_icon.svg";
import AttachmentIcon from "public/attachment_icon.svg";
import SendIcon from "public/send_icon.svg";
import { getAIResponse, STYLE_AIMSG, STYLE_USERMSG } from '../constants';
import { useChannel } from './ablyReactEffect';
import { MessageDataType } from './models';

export default function ChatWindow() {
  // Ref Variables to manipulate the DOM
  let inputBox: any = null;
  let messageEnd: any = null;

  // Form State variables
  const [userMessage, setUserMessage] = React.useState("");
  const [receivedMessages, setMessages] = React.useState([] as any);
  const userMessageIsEmpty = userMessage.trim().length === 0;

  // Ably Channel
  const [channel, ably] = useChannel("chatbot-conversation", (messageData: any) => {
    const history: any = receivedMessages.slice(-199);
    setMessages([...history, messageData]);
  })

  const sendChatMessage = (data: MessageDataType) => {
    channel.publish({ name: "chatbot-conversation", data });
    setUserMessage("");
    inputBox?.focus();
  }

  const handleFormSubmission = async (event: any) => {
    event.preventDefault();
    if (userMessageIsEmpty) return;
    sendChatMessage({message: userMessage, agent: 'USER', avatar: ''});
    const aiResponse: any = await getAIResponse();
    sendChatMessage({message: aiResponse, agent: 'AI', avatar: ''})
  }

  React.useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <>
      {/* Chat Messages */}
      <div className="space-y-3 overflow-auto scrollbar-hide">
        {receivedMessages?.map((obj: any, id: number) => (
          <p key={id}
            className={`p-5 max-w-[70%] w-fit ${obj.data.agent === 'USER' ? STYLE_USERMSG : STYLE_AIMSG}`}
          >
            {obj.data.message}
          </p>
        ))}
        {/* To Scroll at the bottom */}
        <div ref={(element) => { messageEnd = element; }}></div>
      </div>

      {/* Message Form  */}
      <form className="flex space-x-2" onSubmit={handleFormSubmission}>
        {/* Text Input */}
        <div className="relative grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Image className='w-6 fill-gray-600' src={EmojiIcon} alt='Search Icon' />
          </div>
          <input
            ref={(element) => { inputBox = element; }}
            value={userMessage}
            onChange={e => setUserMessage(e.target.value)}
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
        <button type='submit' className='rounded-full bg-emerald-500 p-4'>
          <Image className='w-6' src={SendIcon} alt='Search Icon' />
        </button>
      </form>
    </>
  )
}
