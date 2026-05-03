import sys
lines = open('components/Testimonials.jsx', 'r', encoding='utf-8').readlines()
fixed = []
for line in lines:
    if 'ransition-all duration-300 rounded-full' in line:
        line = line.replace(
            '{       ransition-all duration-300 rounded-full }',
            '{	ransition-all duration-300 rounded-full \}'
        )
    fixed.append(line)
open('components/Testimonials.jsx', 'w', encoding='utf-8').writelines(fixed)
print('Done')
