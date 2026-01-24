const spotlightContainer = document.getElementById("spotlight-container");
const membersURL = "data/members.json";

async function loadSpotlights() {
  try {
    const response = await fetch(membersURL);
    const members = await response.json();

    // Filter Gold and Silver members only
    const qualifiedMembers = members.filter(
      member =>
        member.membership === "Gold" || member.membership === "Silver"
    );

    // Randomize order
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    // Select 2–3 members (use 3 when available)
    const selectedMembers = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selectedMembers.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">
          Visit Website
        </a>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading spotlight members:", error);
    spotlightContainer.textContent = "Unable to load member spotlights.";
  }
}

loadSpotlights();
