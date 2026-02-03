// scripts/discover.js
import { items } from "../data/discoverData.mjs";

const cardsContainer = document.getElementById("discover-cards");

// Build cards dynamically
items.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "card";
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${item.title}</h2>
    <figure>
      <img src="images/${item.image}" alt="${item.alt}" loading="lazy">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  cardsContainer.appendChild(card);
});

// localStorage visit message
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
