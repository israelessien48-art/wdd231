const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  // Accessibility
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close menu when a navigation link is clicked (mobile friendly)
navigation.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
