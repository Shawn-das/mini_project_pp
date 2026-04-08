// // PARTICLE CANVAS
// const canvas = document.getElementById('particleCanvas');
// const ctx    = canvas.getContext('2d');

// const PARTICLE_COUNT = 80;
// const CONNECT_DIST   = 160;
// const MOUSE_DIST     = 120;

// let particles = [];
// let mouse = { x: null, y: null };

// function resizeCanvas() {
//   canvas.width  = window.innerWidth;
//   canvas.height = window.innerHeight;
// }

// resizeCanvas();
// window.addEventListener('resize', () => { resizeCanvas(); createParticles(); });

// window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
// window.addEventListener('mouseleave', ()  => { mouse.x = null; mouse.y = null; });


// class Particle {
//   constructor() { this.init(); }

//   init() {
//     this.x       = Math.random() * canvas.width;
//     this.y       = Math.random() * canvas.height;
//     this.vx      = (Math.random() - 0.5) * 0.5;
//     this.vy      = (Math.random() - 0.5) * 0.5;
//     this.r       = Math.random() * 2 + 1;
//     this.opacity = Math.random() * 0.4 + 0.3;
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;

//     if (this.x < 0) this.x = canvas.width;
//     if (this.x > canvas.width)  this.x = 0;
//     if (this.y < 0) this.y = canvas.height;
//     if (this.y > canvas.height) this.y = 0;

//     if (mouse.x !== null) {
//       const dx   = this.x - mouse.x;
//       const dy   = this.y - mouse.y;
//       const dist = Math.hypot(dx, dy);
//       if (dist < MOUSE_DIST) {
//         const force = (MOUSE_DIST - dist) / MOUSE_DIST;
//         this.x += (dx / dist) * force * 1.2;
//         this.y += (dy / dist) * force * 1.2;
//       }
//     }
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//     ctx.fill();
//   }
// }

// function createParticles() {
//   particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
// }

// function drawLines() {
//   for (let i = 0; i < particles.length; i++) {
//     for (let j = i + 1; j < particles.length; j++) {
//       const dx   = particles[i].x - particles[j].x;
//       const dy   = particles[i].y - particles[j].y;
//       const dist = Math.hypot(dx, dy);

//       if (dist < CONNECT_DIST) {
//         const alpha = (1 - dist / CONNECT_DIST) * 0.3;
//         ctx.beginPath();
//         ctx.moveTo(particles[i].x, particles[i].y);
//         ctx.lineTo(particles[j].x, particles[j].y);
//         ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
//         ctx.lineWidth   = 0.7;
//         ctx.stroke();
//       }
//     }
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawLines();
//   particles.forEach(p => { p.update(); p.draw(); });
//   requestAnimationFrame(animate);
// }

// createParticles();
// animate();


// // NAVBAR — solid background on scroll
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//   navbar.classList.toggle('scrolled', window.scrollY > 50);
// });


// NAVBAR — highlight active link on scroll
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('#shawn, #about, #skills, #projects, #contact')
  .forEach(section => observer.observe(section));


// PROFILE IMAGE — show when loaded
const profileImg       = document.getElementById('profileImg');
const photoPlaceholder = document.getElementById('photoPlaceholder');

profileImg.addEventListener('load', () => {
  profileImg.style.display       = 'block';
  photoPlaceholder.style.display = 'none';
});