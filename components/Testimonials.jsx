'use client'
import { useEffect, useRef, useState } from 'react'
const testimonials = [
  {
    name: 'Aditya Ramadhan',
    role: 'Coffee Enthusiast',
    avatar: 'AR',
    text: 'Brewhaus completely changed how I think about coffee. Their Gayo Natural pour-over is honestly the best cup I had in Jakarta. The baristas genuinely know their craft.',
    rating: 5,
  },
  {
    name: 'Sasha Kusumawardani',
    role: 'Freelance Designer',
    avatar: 'SK',
    text: 'This is my office away from office. Fast wifi, great vibes, and the Flat White here is consistently perfect every single time. Never disappointed.',
    rating: 5,
  },
  {
    name: 'Marco Tjiandra',
    role: 'Startup Founder',
    avatar: 'MT',
    text: 'Took a client here for a morning meeting and they ended up raving more about the coffee than our product. Brewhaus does that to people. The Cold Brew Tonic is something else.',
    rating: 5,
  },
  {
    name: 'Rania Dewi',
    role: 'Food Blogger',
    avatar: 'RD',
    text: 'The banana bread alone is worth the trip. Pair it with a cortado and you have the ideal start to any day. Cozy space, warm team, zero pretension.',
    rating: 5,
  },
]
export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  const t = testimonials[active]
  return (
    <section id="testimonials" ref={sectionRef} className="py-28 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="text-[#C8923A] text-xs font-mono tracking-widest uppercase">What People Say</span>
            <div className="divider mx-auto mt-3" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#1A1208] mt-4">
            Our Regulars <em>Love Us</em>
          </h2>
        </div>
        <div className="reveal delay-200 max-w-2xl mx-auto">
          <div
            key={active}
            className="bg-white rounded-3xl p-10 shadow-sm relative"
            style={{ animation: 'fadeIn 0.5s ease both' }}
          >
            <div className="absolute top-8 right-10 font-display text-8xl text-[#C8923A]/10 leading-none select-none">"</div>
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-[#C8923A] text-lg">★</span>
              ))}
            </div>
            <p className="font-display text-xl text-[#1A1208] leading-relaxed italic mb-8">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A1208] flex items-center justify-center">
                <span className="text-[#C8923A] text-sm font-mono font-bold">{t.avatar}</span>
              </div>
              <div>
                <div className="font-semibold text-[#1A1208]">{t.name}</div>
                <div className="text-xs text-[#8C7B6B] font-mono tracking-wider">{t.role}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active ? 'w-8 h-2 bg-[#C8923A]' : 'w-2 h-2 bg-[#C8923A]/30 hover:bg-[#C8923A]/60'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="reveal delay-300 grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto text-center">
          {[
            { num: '4.9', label: 'Google Rating' },
            { num: '2.4k+', label: 'Reviews' },
            { num: '98%', label: 'Happy Customers' },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-[#1A1208]">
              <div className="font-display text-3xl font-bold text-[#C8923A]">{s.num}</div>
              <div className="text-xs text-[#8C7B6B] font-mono tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
