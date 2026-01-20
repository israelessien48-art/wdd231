// Set timestamp on page load
document.getElementById("timestamp").value = new Date().toISOString();

// Open modals
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});

// Close modals (no inline onclick)
document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});
