document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const introOverlay = document.getElementById('intro-overlay');
  const mainContent = document.getElementById('main-content');
  const cancelBtn = document.querySelector('.cancel');
  const closeBtn = document.querySelector('.close-btn');

  function openScrapbook() {
    // Play a small click sound if we had one, otherwise just transition
    introOverlay.classList.add('fade-out');
    
    // Show main content and hide overlay completely after transition
    setTimeout(() => {
      introOverlay.classList.add('hidden');
      mainContent.classList.remove('hidden');
      
      // We can trigger an animation here to slide up the scrapbook
      mainContent.style.animation = "slideUp 0.8s ease-out forwards";
    }, 500); // match the transition duration in CSS
  }

  startBtn.addEventListener('click', openScrapbook);
  
  // Close buttons act like start as well, or you can make them do nothing
  cancelBtn.addEventListener('click', openScrapbook);
  closeBtn.addEventListener('click', openScrapbook);

  // Add polaroid hover effects
  const polaroids = document.querySelectorAll('.polaroid-wrapper');
  polaroids.forEach(p => {
    p.addEventListener('mouseenter', () => {
      p.style.zIndex = "100";
      p.style.transform = p.style.transform + " scale(1.05)";
      p.style.transition = "transform 0.3s ease";
    });
    p.addEventListener('mouseleave', () => {
      p.style.zIndex = "1";
      p.style.transform = p.style.transform.replace(" scale(1.05)", "");
    });
  });
});
