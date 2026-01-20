const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Set initial state
menuButton.setAttribute("aria-expanded", "false");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close menu when clicking a nav link
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navigation.contains(e.target) && !menuButton.contains(e.target)) {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

// Close menu with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
