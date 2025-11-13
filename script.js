const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
  });
}, { threshold: 0.1 });

sections.forEach(sec => {
  sec.style.transition = 'opacity 1s ease';
  observer.observe(sec);
});
