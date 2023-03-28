export const STYLE_USERMSG = 'bg-violet-900 rounded-l-2xl rounded-br-2xl ml-auto text-white'
export const STYLE_AIMSG = 'bg-slate-100 rounded-r-2xl rounded-bl-2xl mr-auto'

export const getAIResponse = () =>
    new Promise((resolve, reject) => {
      const message = "Fake AI response";
      setTimeout(() => resolve(message), 5000);
  });

export const messages = [
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

export const chatsInfo = [
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