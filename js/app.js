document.addEventListener(
  "DOMContentLoaded",
  () => {
    const button = document.querySelector(
      "button"
    );
    const email =
      document.getElementById("email");
    const emailError = document.getElementById(
      "error-message"
    );
    const input = document.querySelector(
      "input"
    );

    button.addEventListener("click", (e) => {
      e.preventDefault();
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailValue = email.value.trim();
   
      if (!emailPattern.test(emailValue) || emailValue === "") {

        emailError.style.display = "block";
        emailError.textContent = "Please provide a valid email address";
        input.classList.add("error");
      } else {

        document.querySelector(
          ".card"
        ).style.display = "none";
        document.querySelector(
          ".success-message"
        ).style.display = "block";
      }
    });
  }
);

document
  .getElementById("dismiss-btn")
  .addEventListener("click", () => {
    location.reload();
  });
