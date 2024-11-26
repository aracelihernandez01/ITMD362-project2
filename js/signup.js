let current = 1;

function showStep(step) {
  document.querySelectorAll(".step").forEach((element, index) => {
    element.style.display = index === step - 1 ? "block" : "none";
  });
}

function nextStep() {
  if (current < 3) {
    current++;
    showStep(current);
  }
}

showStep(current);