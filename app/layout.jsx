import './globals.css'

export const metadata = {
  title: 'Brewhaus — Specialty Coffee',
  description: 'Where every cup tells a story. Specialty coffee, crafted with passion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  )
}