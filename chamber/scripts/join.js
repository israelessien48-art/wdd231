// Set timestamp when page loads
document.getElementById("timestamp").value = new Date().toISOString();

// Modal handling
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});
