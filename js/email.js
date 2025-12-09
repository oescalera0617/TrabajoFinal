document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".footer-newsletter form");
  if (!form) return;

  const input = form.querySelector("input[type='email']");
  const button = form.querySelector("button");

  // Initialize Bootstrap tooltip on the button
  const tooltip = new bootstrap.Tooltip(button, {
    title: "Please enter your email",
    trigger: "manual", // we control when it shows/hides
    placement: "top"
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.trim() === "") {
      tooltip.show();

      // hide tooltip after 2 seconds
      setTimeout(() => tooltip.hide(), 2000);
    } else {
      button.textContent = "Subscribed!";
    }
  });
});
