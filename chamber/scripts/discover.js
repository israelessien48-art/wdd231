import { items } from "../data/discoverdata.mjs";

const cardsContainer = document.getElementById("discover-cards");

items.forEach(item => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    </figure>
    <h2>${item.title}</h2>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  cardsContainer.appendChild(card);
});

// localStorage visitor message
const visitMessageDiv = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessageDiv.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (diffDays < 1) {
    visitMessageDiv.textContent = "Back so soon! Awesome!";
  } else {
    visitMessageDiv.textContent = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);
