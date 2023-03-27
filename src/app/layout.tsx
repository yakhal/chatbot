import './globals.css';
import React from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'ChatBot',
  description: 'Chat that connects people!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen bg-slate-100'>
        <header>
          <Navbar />
        </header>
        <main className='h-[calc(100%-64px)] md:h-[calc(100%-78px)]'>
          <div className="container mx-auto p-4 h-[100%]">
            {children}
          </div>
        </main>
        {/* Maybe, Will add in future */}
        {/* <footer>
          <div className="container mx-auto p-4 text-gray-600 lg:text-center">
            <div className="inline-flex space-x-2">
              <Image className='w-5' src={ChatBotLogo} alt='ChatBot Logo' />
              <p>Chatbot &#169; 2023</p>
            </div>
          </div>
        </footer> */}
      </body>
    </html>
  )
}