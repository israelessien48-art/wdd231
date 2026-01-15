document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  const modified = new Date(document.lastModified);
  document.getElementById("lastModified").textContent =
    "Last Modification: " +
    modified.toLocaleDateString() +
    " " +
    modified.toLocaleTimeString();
});
