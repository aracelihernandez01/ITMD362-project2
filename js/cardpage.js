document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.card button');

  buttons.forEach(button => {
      button.addEventListener('mouseover', function() {
          this.style.backgroundColor = '#005699';
      });

      button.addEventListener('mouseout', function() {
          this.style.backgroundColor = '#0077CC';
      });
  });
});
