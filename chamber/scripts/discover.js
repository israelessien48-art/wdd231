import { discoverItems } from "../data/discover.mjs";

const cardsContainer = document.querySelector("#discover-cards");

discoverItems.forEach((item, index) => {
  const card = document.createElement("article");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${item.title}</h2>
    <figure>
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  cardsContainer.appendChild(card);
});

// localStorage visit message
const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageBox.textContent = "You last visited 1 day ago.";
  } else {
    messageBox.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
