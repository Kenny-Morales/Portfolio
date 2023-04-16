const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const linkHref = link.getAttribute('href');
    const target = document.querySelector(linkHref);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    window.requestAnimationFrame(step);
  });
});

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href');
    const target = document.querySelector(linkHref);
    const sectionTop = target.offsetTop - 100;
    const sectionBottom = sectionTop + target.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
      link.classList.add('active')
    } else {
      link.classList.remove('active');
    }
  });
});


const content = document.getElementById('content');
const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    const contentText = option.getAttribute('data-content');
    content.innerHTML = contentText;
  });
});



