const aboutLink = document.querySelector('a[href="#about"]');
const aboutText = document.getElementById('aboutText');
const skillsLink = document.querySelector('a[href="#skills"]');
const skillsContent = document.querySelector('.skills-section-content');
aboutLink.addEventListener('click', () => {
  aboutText.classList.remove('fade-slide-up');
  setTimeout(() => {
    aboutText.classList.add('fade-slide-up');
  }, 50); // Small delay to ensure reflow
});
skillsLink.addEventListener('click', () => {
  skillsContent.classList.remove('fade-slide-up');
  setTimeout(() => {
    skillsContent.classList.add('fade-slide-up');
  }, 50);
});
