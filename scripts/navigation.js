const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  // Update aria-expanded for accessibility
  menuButton.setAttribute("aria-expanded", isOpen);
});
