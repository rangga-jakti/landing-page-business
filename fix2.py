content = open('components/Testimonials.jsx', 'r', encoding='utf-8').read()
old = 'className={       ransition-all duration-300 rounded-full }'
new = 'className={	ransition-all duration-300 rounded-full $' + '{i === active ? ' + "'w-8 h-2 bg-[#C8923A]' : 'w-2 h-2 bg-[#C8923A]/30 hover:bg-[#C8923A]/60'" + '}}'
content = content.replace(old, new)
open('components/Testimonials.jsx', 'w', encoding='utf-8').write(content)
print('Done')
print(repr(new))
