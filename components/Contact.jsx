'use client'
import { useEffect, useRef, useState } from 'react'
export default function Contact() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2', notes: '' })
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
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-[#1A1208] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="reveal">
              <span className="text-[#C8923A] text-xs font-mono tracking-widest uppercase">Find Us</span>
              <div className="divider mt-3" />
            </div>
            <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#F5F0E8] mt-4 mb-8 leading-tight">
              Come Visit <em>Anytime</em>
            </h2>
            <div className="reveal delay-200 space-y-6">
              {[
                {
                  label: 'Address',
                  value: 'Jl. Kemang Raya No. 42, Jakarta Selatan 12730',
                },
                {
                  label: 'Hours',
                  value: 'Mon-Fri: 7AM - 10PM\nSat-Sun: 8AM - 11PM',
                },
                {
                  label: 'Contact',
                  value: 'hello@brewhaus.id\n+62 21 7654 3210',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#C8923A] text-xs font-mono">✦</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-[#F5F0E8] text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal delay-300 mt-8 rounded-2xl overflow-hidden aspect-video bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">📍</div>
                <div className="text-[#8C7B6B] text-sm font-mono">Kemang, Jakarta Selatan</div>
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <div className="bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-3xl p-8">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-2">Reserve a Table</h3>
              <p className="text-[#8C7B6B] text-sm mb-8">Book in advance, skip the wait.</p>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">☕</div>
                  <h4 className="font-display text-2xl text-[#C8923A] mb-2">We will See You Soon!</h4>
                  <p className="text-[#8C7B6B] text-sm">Reservation confirmed. Check your email for details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Budi Santoso', required: true },
                    { id: 'date', label: 'Date', type: 'date', required: true },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase block mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#8C7B6B]/50 focus:outline-none focus:border-[#C8923A]/50 transition-colors"
                      />
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase block mb-1.5">Time</label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C8923A]/50 transition-colors"
                      >
                        {['07:00','08:00','09:00','10:00','11:00','14:00','15:00','16:00','17:00','18:00','19:00'].map(t => (
                          <option key={t} value={t} className="bg-[#1A1208]">{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase block mb-1.5">Guests</label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C8923A]/50 transition-colors"
                      >
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n} className="bg-[#1A1208]">{n} {n === 1 ? 'person' : 'people'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase block mb-1.5">Notes (optional)</label>
                    <textarea
                      placeholder="Allergies, special occasion, seating preference..."
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#8C7B6B]/50 focus:outline-none focus:border-[#C8923A]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold w-full bg-[#C8923A] text-[#F5F0E8] font-medium py-4 rounded-xl text-sm tracking-wide mt-2"
                  >
                    <span>Confirm Reservation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
