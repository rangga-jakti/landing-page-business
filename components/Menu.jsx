'use client'
import { useEffect, useRef, useState } from 'react'
const menuData = {
  'Espresso Bar': [
    { name: 'Signature Espresso', desc: 'Double shot, bold and balanced with notes of dark chocolate', price: 'Rp 28k', tag: 'Bestseller' },
    { name: 'Cortado', desc: 'Equal parts espresso and steamed milk, silky smooth', price: 'Rp 35k', tag: null },
    { name: 'Flat White', desc: 'Ristretto shots with velvety microfoam, Aussie-style', price: 'Rp 38k', tag: 'Popular' },
    { name: 'Cold Brew Tonic', desc: 'Slow-drip cold brew over tonic water and citrus zest', price: 'Rp 42k', tag: 'Seasonal' },
  ],
  'Pour Over': [
    { name: 'Gayo Natural', desc: 'Aceh highlands, strawberry jam and brown sugar finish', price: 'Rp 48k', tag: 'Single Origin' },
    { name: 'Flores Bajawa', desc: 'Floral notes, hibiscus and citrus peel', price: 'Rp 52k', tag: 'Single Origin' },
    { name: 'Toraja Peaberry', desc: 'Full body, dark fruit, chocolate-forward profile', price: 'Rp 55k', tag: 'Limited' },
  ],
  'Food': [
    { name: 'Avocado Toast', desc: 'Sourdough, smashed avo, chili flakes, poached egg', price: 'Rp 55k', tag: null },
    { name: 'Banana Bread', desc: 'House-baked, served warm with whipped butter', price: 'Rp 32k', tag: 'Homemade' },
    { name: 'Croissant Board', desc: 'Butter croissant, jam, honey, seasonal fruit', price: 'Rp 65k', tag: 'Popular' },
  ],
}
export default function Menu() {
  const [activeTab, setActiveTab] = useState('Espresso Bar')
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section id="menu" ref={sectionRef} className="py-28 bg-[#1A1208] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="reveal">
            <span className="text-[#C8923A] text-xs font-mono tracking-widest uppercase">What We Serve</span>
            <div className="divider mx-auto mt-3" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#F5F0E8] mt-4 leading-tight">
            The Brewhaus <em>Menu</em>
          </h2>
          <p className="reveal delay-200 text-[#8C7B6B] mt-4 max-w-md mx-auto">
            Rotating seasonal offerings alongside our classic staples. Something for every palate, every hour.
          </p>
        </div>
        <div className="reveal delay-300 flex justify-center gap-2 mb-10 flex-wrap">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#C8923A] text-[#F5F0E8]'
                  : 'border border-[#F5F0E8]/10 text-[#8C7B6B] hover:border-[#C8923A]/40 hover:text-[#F5F0E8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {menuData[activeTab].map((item, i) => (
            <div
              key={item.name}
              className="reveal menu-card group bg-[#F5F0E8]/5 border border-[#F5F0E8]/8 rounded-2xl p-6 hover:border-[#C8923A]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-[#F5F0E8] text-lg font-semibold group-hover:text-[#C8923A] transition-colors">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-mono tracking-wider text-[#C8923A] border border-[#C8923A]/40 rounded-full px-2 py-0.5 uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[#8C7B6B] text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-[#C8923A] font-mono font-medium text-sm whitespace-nowrap">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal text-center mt-12">
          <p className="text-[#8C7B6B] text-sm mb-4">Seasonal items rotate monthly. Ask our baristas for today specials.</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#C8923A] text-sm font-medium hover:gap-4 transition-all duration-200">
            Reserve your spot
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
