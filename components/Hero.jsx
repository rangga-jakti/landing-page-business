'use client'
import { useEffect, useRef } from 'react'
export default function Hero() {
  const heroRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      const y = window.scrollY
      heroRef.current.style.transform = `translateY(${y * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1208]">
      <div ref={heroRef} className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/90 via-[#1A1208]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/80 via-transparent to-transparent" />
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C8923A]/20 hidden lg:block" />
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#C8923A]/10 hidden lg:block" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-[#C8923A]/40 rounded-full px-4 py-1.5 mb-8"
            style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8923A] animate-pulse" />
            <span className="text-[#C8923A] text-xs font-mono tracking-widest uppercase">Est. 2019 · Jakarta</span>
          </div>
          <h1 className="font-display text-[#F5F0E8] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', animation: 'fadeUp 0.7s ease 0.35s both' }}>
            Where Every Cup
            <br />
            <em className="text-[#C8923A] not-italic">Tells a Story</em>
          </h1>
          <p className="text-[#8C7B6B] text-lg leading-relaxed mb-10 max-w-lg"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}>
            Specialty coffee sourced from the highlands of Aceh and Flores,
            roasted in-house, served with care. Come as you are.
          </p>
          <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp 0.7s ease 0.65s both' }}>
            <a href="#menu" className="btn-gold bg-[#C8923A] text-[#F5F0E8] font-medium px-8 py-4 rounded-full text-sm tracking-wide">
              <span>Explore Our Menu</span>
            </a>
            <a href="#about" className="flex items-center gap-2 text-[#F5F0E8]/70 hover:text-[#F5F0E8] transition-colors text-sm font-medium">
              Our Story
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="flex gap-10 mt-16 pt-10 border-t border-[#F5F0E8]/10"
            style={{ animation: 'fadeUp 0.7s ease 0.8s both' }}>
            {[
              { num: '12+', label: 'Origins' },
              { num: '40k+', label: 'Cups Served' },
              { num: '4.9', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[#C8923A] text-2xl font-bold">{stat.num}</div>
                <div className="text-[#8C7B6B] text-xs font-mono tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[#F5F0E8] text-xs font-mono tracking-widest">scroll</span>
        <div className="w-px h-10 bg-[#F5F0E8] animate-pulse" />
      </div>
    </section>
  )
}
