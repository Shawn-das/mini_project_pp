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