// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Hero intro animation
gsap.from("header", { 
  y: -40, 
  opacity: 0, 
  duration: 0.8, 
  ease: "power3.out" 
});

gsap.utils.toArray("section:first-of-type .reveal, header .reveal").forEach((el, i) => {
  gsap.from(el, { 
    y: 40, 
    opacity: 0, 
    duration: 1, 
    delay: 0.15 + i * 0.1, 
    ease: "power3.out" 
  });
});

// Scroll reveals for sections
gsap.utils.toArray("section:not(:first-of-type) .reveal").forEach((el) => {
  gsap.from(el, {
    y: 36, 
    opacity: 0, 
    duration: 0.9, 
    ease: "power3.out",
    scrollTrigger: { 
      trigger: el, 
      start: "top 88%" 
    }
  });
});

// Animated Counters logic
document.querySelectorAll(".counter").forEach((el) => {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || 0);
  
  ScrollTrigger.create({
    trigger: el, 
    start: "top 92%", 
    once: true,
    onEnter: () => {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, 
        duration: 1.8, 
        ease: "power2.out",
        onUpdate: () => { 
          el.textContent = obj.v.toFixed(decimals); 
        }
      });
    }
  });
});