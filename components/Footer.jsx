export default function Footer() {
  return (
    <footer className="bg-[#1A1208] border-t border-[#F5F0E8]/8 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C8923A] flex items-center justify-center">
                <span className="text-[#F5F0E8] text-xs font-mono font-bold">B</span>
              </div>
              <span className="font-display text-xl font-semibold text-[#F5F0E8]">Brewhaus</span>
            </div>
            <p className="text-[#8C7B6B] text-sm leading-relaxed max-w-xs">Specialty coffee, crafted with intention.</p>
            <div className="flex gap-3 mt-5">
              {["IG", "TW", "TK"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-[#F5F0E8]/10 flex items-center justify-center text-[#8C7B6B] hover:border-[#C8923A]/40 hover:text-[#C8923A] transition-all text-xs font-mono">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase mb-4">Navigate</div>
            <div className="space-y-2">
              {["Menu", "About", "Testimonials", "Contact"].map((link) => (
                <a key={link} href={"#" + link.toLowerCase()} className="block text-sm text-[#F5F0E8]/60 hover:text-[#C8923A] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#8C7B6B] tracking-widest uppercase mb-4">Hours</div>
            <div className="space-y-1 text-sm text-[#F5F0E8]/60">
              <div>Mon-Fri: 7AM - 10PM</div>
              <div>Sat-Sun: 8AM - 11PM</div>
              <div className="text-[#C8923A] mt-2 text-xs">Open Today</div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F5F0E8]/8 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-[#8C7B6B] text-xs font-mono">2025 Brewhaus. All rights reserved.</p>
          <p className="text-[#8C7B6B] text-xs font-mono">Made with love in Jakarta</p>
        </div>
      </div>
    </footer>
  )
}