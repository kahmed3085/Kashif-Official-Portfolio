# Kashif Official Portfolio - v2 🎉

Welcome to my professional portfolio website. A modern, animated portfolio showcasing my work, skills, and experience with smooth scroll animations and GSAP integration.

**Live:** https://kahmed3085.github.io/Kashif-Official-Portfolio/

## ✨ v2 Features (NEW!)

- ✅ **Smooth Animations** - GSAP + ScrollTrigger for 60fps animations
- ✅ **Loading Screen** - 3.2s countdown with word rotation
- ✅ **Hero Section** - Staggered text reveal animation
- ✅ **Work Grid** - 3D card lift effects on scroll
- ✅ **Parallax Effects** - ±17px continuous drift on focus cards
- ✅ **Scroll Velocity** - Auto-skew animation based on scroll speed
- ✅ **Stats Counter** - Viewport-triggered animated counters
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **No Build Required** - Pure HTML, CSS, and JavaScript

## 📁 Project Structure

```
Kashif-Official-Portfolio/
├── index.html              # Main portfolio (v2 with animations)
├── support.js              # DC runtime & component system
├── image-slot.js           # Image upload/crop component
├── animations.js           # GSAP animation helpers
├── assets/                 # Profile images & badges
│   ├── kashif-bw.png      # B&W profile (392KB)
│   ├── kashif-cutout.png  # Cutout portrait (685KB)
│   ├── kashif.png         # Color portrait (611KB)
│   └── [SVG badges]       # Certification badges
├── screenshots/            # Portfolio preview images
├── uploads/                # User uploads directory
└── README.md              # This file
```

## 🚀 Getting Started

### View Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/kahmed3085/Kashif-Official-Portfolio.git
   cd Kashif-Official-Portfolio
   ```

2. Open `index.html` in your browser:
   - Double-click `index.html`, or
   - Use a local server: `python -m http.server 8000` (then visit `http://localhost:8000`)

### View Online
Visit: **https://kahmed3085.github.io/Kashif-Official-Portfolio/**

## 🎬 Animation Details

| Animation | Timing | Description |
|-----------|--------|-------------|
| **Loader** | 3.2s | Countdown (000→100%) with word rotation |
| **Hero Text** | 1.05s | Line-by-line reveal with stagger (0.12s) |
| **Work Cards** | 0.9s | 3D lift effect (70px, 10° rotation) on scroll |
| **Experience** | 0.8s | Alternating ±46px slide-in animations |
| **Focus Cards** | Continuous | ±17px parallax drift synced with scroll |
| **Stats** | 1.7s | Number counter animation on viewport trigger |
| **Scroll Skew** | Dynamic | ±6° based on scroll velocity |
| **Badge Float** | 4.2s | Certificate badges with float animation |

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Animations, responsive design with clamp()
- **JavaScript** - DC runtime, component system
- **GSAP 3.12.5** - Animation library
- **ScrollTrigger** - Scroll-based animation plugin
- **GitHub Pages** - Free hosting

## 📱 Responsive Breakpoints

- **Mobile** (< 820px): Single column, stacked layout
- **Tablet** (820px - 1024px): Flexible grid
- **Desktop** (> 1024px): Full two-column layout with parallax

All animations are optimized for mobile with touch support.

## 📝 Content Sections

The portfolio showcases:
- **Hero** - AI-first operations consultant introduction
- **Work** - ITWorks, Microsoft, GRAPA projects
- **Experience** - 7 years in client success & operations
- **Focus Areas** - AI automation, agentic systems, CX strategy
- **Stats** - 7 years experience, 6+ companies, 3 continents
- **Contact** - Email and social links

## ✏️ How to Update

### Update Content
1. Edit `index.html` to modify text, sections, and structure
2. Update images in the `assets/` folder
3. Test locally with: `python -m http.server 8000`

### Customize Animations
1. Edit keyframes in the `<style>` section of `index.html`
2. Modify GSAP triggers in the `<script>` section
3. Test animations on scroll before deploying

### Push Changes to GitHub
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes deploy to your live site within 1-2 minutes.

## 🔍 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (webkit prefixes included)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Animation FPS:** 60fps smooth
- **Page Load:** < 2 seconds
- **Lighthouse:** Optimized for Core Web Vitals
- **File Size:** ~130KB total (gzipped)

## 🐛 Troubleshooting

**Animations not playing?**
- Check that GSAP is loaded: Open DevTools Console → no errors
- Make sure JavaScript is enabled in browser settings
- Try a hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Styles not loading?**
- Clear browser cache: Ctrl+Shift+Delete (Windows)
- Try a different browser to isolate the issue

**Images not showing?**
- Check asset paths in `index.html`
- Make sure images are in the `assets/` folder
- Verify file names match exactly (case-sensitive on Linux)

## 📧 Contact & Social

- **Email:** kahmed_3085@hotmail.com
- **LinkedIn:** [linkedin.com/in/kashif-ahmed-12130538](https://www.linkedin.com/in/kashif-ahmed-12130538)
- **GitHub:** [github.com/kahmed3085](https://github.com/kahmed3085)
- **Phone:** +92 302 5344435
- **Location:** Islamabad, Remote, Global

## 🎯 Current Focus

Co-Founder at **ITWorks** - AI-first operations consulting
- Building automated systems with Claude + Make.com
- Transforming manual processes into 24/7 operations
- Serving transport & logistics SMBs

## 📄 License

This portfolio is personal work. Feel free to fork and adapt for your own portfolio!

---

**v2.0 - Production Ready** | **Last Updated:** June 24, 2026 | **Status:** ✅ LIVE
