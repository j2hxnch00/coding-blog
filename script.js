document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const response = document.getElementById("formResponse");
  response.textContent = `Thanks, ${name}! Your message has been sent.`;

  this.reset();
});

