document.addEventListener("DOMContentLoaded", function () {

  // random attention seeker
  const attentionSeekers = [
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__shakeY",
    "animate__headShake",
    "animate__swing",
    "animate__tada",
    "animate__wobble",
    "animate__jello",
    "animate__heartBeat",
  ];

  const greeting = document.querySelector(".greeting");

  const randomChoice = Math.floor(Math.random() * attentionSeekers.length);
  const randomAttention = attentionSeekers[randomChoice];

  greeting.classList.add(randomAttention);

  // datepicker
  const elem = document.getElementById("dob");
  const datepicker = new Datepicker(elem, {
    autohide: true,
    format: "MM-dd",
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll(".form-check-input").forEach((c) => (c.checked = false));

  // event listener for check/uncheck
  document.getElementById("checkbox-card").addEventListener("change", function (e) {
    if (e.target.classList.contains("form-check-input")) {
      const elem = document.getElementById(e.target.id + "Img");
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked
        ? elem.classList.add("animate__animated", "animate__bounceInDown")
        : elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  // toast
  document.getElementById("submit").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".form-check-input");

    let anyChecked = false;
    checkboxes.forEach(function (c) {
      if (c.checked) {
        anyChecked = true;
      }
    });

    if (!anyChecked) {
      bootstrap.Toast.getOrCreateInstance(document.getElementById("noBalloonsToast")).show();
    }
  });

  // select all
  // used chatGPT to help with the dispatchEvent
  document.getElementById("selectAll").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach(function (c) {
      c.checked = true;
      c.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  // deselect all
  document.getElementById("deselectAll").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach(function (c) {
      c.checked = false;
      c.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  // h1 color change
  const labels = document.querySelectorAll(".form-check-label");

  labels.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      const color = e.getAttribute("for");
      greeting.style.color = color;
    });

    e.addEventListener("mouseleave", function () {
      greeting.style.color = "slategray";
    });
  });
});
