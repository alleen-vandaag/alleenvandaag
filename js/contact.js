emailjs.init("huKLDZGK1A8g8vkBO");

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    status.textContent = "Versturen...";
    status.style.color = "black";

    emailjs.sendForm('service_re00izk', 'template_rju8phl', this)
      .then(() => {
        status.textContent = "Bedankt! Je bericht is verzonden.";
        status.style.color = "green";
        form.reset();
      })
      .catch(err => {
        console.error('Fout bij verzenden:', err);
        status.textContent = "Er is iets misgegaan. Probeer het later opnieuw.";
        status.style.color = "red";
      });
  });
});
