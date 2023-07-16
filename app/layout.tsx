import Navbar from "@/componets/Navbar"
import "./globals.css"
import Footer from "@/componets/Footer"

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <main>{children}</main>
      <Footer />
        </body>
    </html>
  )
}
