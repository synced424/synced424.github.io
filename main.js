// Optional: tiny “tick” for vibe (no actual clock logic)
const timeEl = document.querySelector(".time");
if (timeEl) {
  setInterval(() => {
    timeEl.classList.add("pulse");
    setTimeout(() => timeEl.classList.remove("pulse"), 120);
  }, 3000);
}
