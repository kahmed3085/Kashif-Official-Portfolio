// Animation Fix - Ensure smooth animations on GitHub Pages
(function() {
  'use strict';

  // Wait for DOM to be ready
  function initAnimations() {
    // Check if GSAP is loaded
    const g = window.gsap;
    const ST = window.ScrollTrigger;

    if (!g || !ST) {
      console.log('GSAP not ready, using CSS fallback animations');
      // Keep CSS animations running
      return;
    }

    console.log('GSAP loaded successfully, initializing animations');

    // Register ScrollTrigger
    g.registerPlugin(ST);

    // Initialize hero animations
    initHeroAnimations(g, ST);

    // Initialize scroll animations
    initScrollAnimations(g, ST);
  }

  function initHeroAnimations(g, ST) {
    // Hero text animations
    const heroLines = document.querySelectorAll('.hero-line');
    if (heroLines.length) {
      heroLines.forEach(line => {
        line.style.opacity = '1';
        line.style.transform = 'none';
      });
    }

    // Hero photo animation
    const heroPhoto = document.querySelector('.hero-photo');
    if (heroPhoto) {
      heroPhoto.style.opacity = '1';
      heroPhoto.style.transform = 'none';
    }

    // Certification badges with staggered animation
    const certBadges = document.querySelectorAll('.cert-badge');
    if (certBadges.length) {
      try {
        g.from(certBadges, {
          opacity: 0,
          scale: 0.8,
          filter: 'blur(4px)',
          duration: 0.7,
          ease: 'back.out',
          stagger: 0.1,
          immediateRender: false
        });
      } catch (e) {
        console.error('Error animating cert badges:', e);
        certBadges.forEach(badge => {
          badge.style.opacity = '1';
          badge.style.scale = '1';
          badge.style.filter = 'blur(0)';
        });
      }
    }

    // Blur in elements
    const blurIns = document.querySelectorAll('.blur-in:not(.cert-badge)');
    if (blurIns.length) {
      blurIns.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }
  }

  function initScrollAnimations(g, ST) {
    // Hero scroll parallax
    const home = document.querySelector('#home');
    if (home) {
      try {
        g.to(document.querySelectorAll('.hero-line'), {
          yPercent: -60,
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: {
            trigger: home,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6
          }
        });

        const heroPhoto = document.querySelector('.hero-photo');
        if (heroPhoto) {
          g.to(heroPhoto, {
            yPercent: 22,
            scale: 0.94,
            opacity: 0.4,
            ease: 'none',
            scrollTrigger: {
              trigger: home,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6
            }
          });
        }
      } catch (e) {
        console.error('Error initializing hero scroll animations:', e);
      }
    }

    // Section reveals
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
      reveals.forEach(el => {
        if (!el.hasAttribute('data-card')) {
          try {
            g.from(el, {
              y: 48,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                once: true
              }
            });
          } catch (e) {
            console.error('Error initializing reveal animation:', e);
          }
        }
      });
    }

    // Work cards animation
    const cards = document.querySelectorAll('#work-grid [data-card]');
    if (cards.length) {
      try {
        const workGrid = document.querySelector('#work-grid');
        if (workGrid) g.set(workGrid, { perspective: 1200 });

        g.from(cards, {
          y: 70,
          opacity: 0,
          scale: 0.92,
          rotateX: 10,
          transformOrigin: '50% 100%',
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          immediateRender: false,
          scrollTrigger: {
            trigger: '#work-grid',
            start: 'top 82%',
            once: true
          }
        });
      } catch (e) {
        console.error('Error initializing card animations:', e);
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    // DOM is already ready
    setTimeout(initAnimations, 100);
  }

  // Also initialize on window load for extra safety
  window.addEventListener('load', () => {
    setTimeout(initAnimations, 500);
  });
})();
