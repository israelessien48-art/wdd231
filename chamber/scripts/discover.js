// Load JSON and build cards
import discoverData from '../data/discover.json' assert { type: 'json' };

const cardsContainer = document.getElementById('discover-cards');
const visitMessage = document.getElementById('visit-message');

// Build 8 cards
discoverData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

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

// Visitor message using localStorage
const lastVisitKey = 'lastVisit';
const now = Date.now();
const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

const lastVisit = localStorage.getItem(lastVisitKey);

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysAgo = Math.floor((now - lastVisit) / oneDay);
  if (daysAgo < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago.`;
  }
}

// Save current visit
localStorage.setItem(lastVisitKey, now);
