import Message from "./Message";
import MessageForm from "./MessageForm";

const messages = [
  {
    id: '1',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Hello',
    agent: 'USER'
  },
  {
    id: '2',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Hello, How may I help you?',
    agent: 'AI'
  },
  {
    id: '3',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Please help me in my work regarding data collection.',
    agent: 'USER'
  },
  {
    id: '4',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Okay, sure.',
    agent: 'AI'
  },
  {
    id: '5',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Hello',
    agent: 'USER'
  },
  {
    id: '6',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Hello, How may I help you?',
    agent: 'AI'
  },
  {
    id: '7',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Please help me in my work regarding data collection.',
    agent: 'USER'
  },
  {
    id: '8',
    avatarUrl: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    message: 'Okay, sure.',
    agent: 'AI'
  }
]

export default function ChatWindow() {
  return (
    <>
      <div className="space-y-3 overflow-auto scrollbar-hide">
        {messages?.map((message) => (
          <Message {...message}/>
        ))}
      </div>
      <MessageForm/>
    </>
  )
}
