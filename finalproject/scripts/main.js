import { parksData } from './data.js';
import { showModal } from './modal.js';

const featuredContainer =
  document.querySelector('#featured-parks .cards-container') ||
  document.getElementById('parks-list');

function displayParks(parks) {
    featuredContainer.innerHTML = '';
    parks.forEach(park => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="images/${park.image}" alt="${park.name}" loading="lazy">
            <h3>${park.name}</h3>
            <p><strong>State:</strong> ${park.state}</p>
            <p><strong>Established:</strong> ${park.established}</p>
            <p><strong>Visitors:</strong> ${park.visitors}</p>
        `;
        card.addEventListener('click', () => showModal(park));
        featuredContainer.appendChild(card);
    });
}

displayParks(parksData);

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger){
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Save last visited park in localStorage
localStorage.setItem('lastVisited', new Date().toISOString());
