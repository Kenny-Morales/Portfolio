// Get all the navigation links on the page
const navLinks = document.querySelectorAll('nav a');

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Loop through each navigation link on the page
  navLinks.forEach((link) => {
    // Get the href attribute value of the link and remove the '#' character
    const linkHref = link.getAttribute('href').slice(1);

    // Get the corresponding section element
    const section = document.getElementById(linkHref);

    // Get the top and bottom position of the section
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;

    // Check if the current scroll position is within the section
    if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
      // Add the 'active' class to the corresponding navigation link
      link.classList.add('active');
    } else {
      // Remove the 'active' class from the corresponding navigation link
      link.classList.remove('active');
    }
  });
});


