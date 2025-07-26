 const aboutLink = document.querySelector('a[href="#about"]');
  const aboutText = document.getElementById('aboutText');

  aboutLink.addEventListener('click', () => {
    aboutText.classList.remove('fade-slide-up');

    // Use setTimeout to allow reflow naturally
    setTimeout(() => {
      aboutText.classList.add('fade-slide-up');
    }, 50); // Small delay to ensure reflow
  });
  