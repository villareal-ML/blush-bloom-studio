document.addEventListener("DOMContentLoaded", () => {
 
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Hello";

    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";

    greetingEl.textContent = `${greeting}, welcome to Blush Bloom Studio!`;
  }

  
  const dateEl = document.getElementById("current-date");
  if (dateEl) {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateEl.textContent = now.toLocaleDateString("en-US", options);
  }

  
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

 
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  
  const form = document.getElementById("contact-form");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const successMsg = document.getElementById("form-success");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      
      [nameError, emailError, messageError].forEach((el) => (el.textContent = ""));
      successMsg.textContent = "";

      
      if (!nameInput.value.trim()) {
        nameError.textContent = "Please enter your name.";
        isValid = false;
      }

      
      const emailValue = emailInput.value.trim();
      if (!emailValue) {
        emailError.textContent = "Please enter your email.";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      
      if (!messageInput.value.trim()) {
        messageError.textContent = "Please type a short message.";
        isValid = false;
      }

      if (isValid) {
        successMsg.textContent = "Thank you! Your message has been sent (demo).";
        form.reset();
      }
    });
  }
});
