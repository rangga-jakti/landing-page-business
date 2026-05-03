'use client'
import { useEffect, useRef } from 'react'
export default function About() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section id="about" ref={sectionRef} className="py-28 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#1A1208]">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Barista crafting coffee"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1A1208] text-[#F5F0E8] rounded-2xl p-6 shadow-2xl max-w-[180px]">
              <div className="font-display text-4xl font-bold text-[#C8923A]">5+</div>
              <div className="text-xs text-[#8C7B6B] font-mono tracking-widest uppercase mt-1">Years of Craft</div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-[#C8923A]/30" />
          </div>
          <div className="space-y-6">
            <div className="reveal">
              <span className="text-[#C8923A] text-xs font-mono tracking-widest uppercase">Our Story</span>
              <div className="divider mt-3" />
            </div>
            <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#1A1208] leading-tight">
              Passion Roasted<br /><em>to Perfection</em>
            </h2>
            <p className="reveal delay-200 text-[#8C7B6B] leading-relaxed">
              Brewhaus started with a simple belief: great coffee changes your morning,
              and a great morning changes your day. We source single-origin beans directly
              from farmers across Indonesia volcanic highlands.
            </p>
            <p className="reveal delay-300 text-[#8C7B6B] leading-relaxed">
              Our in-house roasting process is done in small batches, ensuring each cup
              carries the full complexity of its origin - earthy, floral, bold, or bright.
            </p>
            <div className="reveal delay-400 grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🌱', title: 'Direct Trade', desc: 'Straight from farmers' },
                { icon: '🔥', title: 'In-house Roasted', desc: 'Small batch weekly' },
                { icon: '☕', title: 'Expert Baristas', desc: 'SCA certified team' },
                { icon: '♻️', title: 'Sustainable', desc: 'Zero-waste program' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start p-4 rounded-xl bg-white/60 hover:bg-white transition-colors duration-200">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#1A1208]">{item.title}</div>
                    <div className="text-xs text-[#8C7B6B] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
