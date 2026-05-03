'use client'
import { useState, useEffect } from 'react'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = ['Menu', 'About', 'Testimonials', 'Contact']
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C8923A] flex items-center justify-center">
            <span className="text-[#F5F0E8] text-xs font-mono font-bold">B</span>
          </div>
          <span className="font-display text-xl font-semibold text-[#1A1208] tracking-tight">Brewhaus</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="nav-link text-sm font-medium text-[#8C7B6B] hover:text-[#1A1208] transition-colors duration-200">
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-gold bg-[#C8923A] text-[#F5F0E8] text-sm font-medium px-5 py-2.5 rounded-full">
            <span>Reserve a Table</span>
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-[#1A1208] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1208] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1208] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#F5F0E8] border-t border-[#E8E0D0] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-[#8C7B6B] hover:text-[#1A1208]"
              onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium text-[#C8923A]" onClick={() => setMenuOpen(false)}>
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  )
}
