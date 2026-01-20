const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.setAttribute("aria-expanded", "false");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!navigation.contains(e.target) && !menuButton.contains(e.target)) {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
