import Providers from './providers'

import './globals.css'

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}