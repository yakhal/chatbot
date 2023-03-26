import './globals.css'

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
      <body>
        <header>
          Navigation
        </header>
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
      </body>
    </html>
  )
}
