const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeIns.forEach(section => {
  observer.observe(section);
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
