// Simple form validation and submission (ajax would be added for PHP backend)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Votre message a été envoyé avec succès !');
  });
  
  window.onload = function() {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/memories-zone-records/presentation?month=2024-12',
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
      utm: {}
    });
  };
  