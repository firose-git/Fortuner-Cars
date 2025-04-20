// script.js
// Go to Top Button functionality
const goTopBtn = document.getElementById('goTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goTopBtn.style.display = 'block';
  } else {
    goTopBtn.style.display = 'none';
  }
};

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  
  // Contact form validation
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input[placeholder="Name"]');
    const emailInput = form.querySelector('input[placeholder="Email-Address"]');
    const passwordInput = form.querySelector('input[placeholder="******"]');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default form submission
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!name || !email || !password) {
        alert('Please fill out all fields.');
        return;
      }
  
      if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 6) {
        alert('Password should be at least 6 characters.');
        return;
      }
  
      alert(`Welcome, ${name}! Your login was successful.`);
      form.reset();
    });
  });
  