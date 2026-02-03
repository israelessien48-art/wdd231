// Menu toggle
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Display visit message using localStorage
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffDays = Math.floor((now - lastVisit) / (1000*60*60*24));
  if (diffDays === 0) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${diffDays} day${diffDays > 1 ? 's' : ''} ago.`;
  }
}

localStorage.setItem('lastVisit', now);

// Build cards from JSON
const cardsContainer = document.getElementById('discover-cards');

fetch('data/discover.json')
  .then(res => res.json())
  .then(items => {
    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = `card${i+1}`;
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
  })
  .catch(err => console.error('Error loading JSON:', err));
