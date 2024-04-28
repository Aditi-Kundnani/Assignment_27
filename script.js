const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
  if (themeToggle.checked) {
    body.style.backgroundColor = '#222'; // Dark background
    body.style.color = '#fff'; // Light text
  } else {
    body.style.backgroundColor = '#f5f5f5'; // Light background
    body.style.color = '#333'; // Dark text
  }
});
