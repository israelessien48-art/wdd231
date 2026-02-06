export function showModal(park) {
    let modal = document.getElementById('modal');
    if(!modal){
        modal = document.createElement('div');
        modal.id = 'modal';
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = 1000;
        modal.addEventListener('click', () => modal.remove());
        document.body.appendChild(modal);
    }
    modal.innerHTML = `
        <div style="background:#fff;padding:1rem;border-radius:5px;max-width:500px;position:relative;">
            <h2>${park.name}</h2>
            <img src="images/${park.image}" alt="${park.name}" style="width:100%;height:auto;">
            <p><strong>State:</strong> ${park.state}</p>
            <p><strong>Established:</strong> ${park.established}</p>
            <p><strong>Visitors:</strong> ${park.visitors}</p>
            <button style="position:absolute;top:5px;right:5px;" onclick="document.getElementById('modal').remove()">Close</button>
        </div>
    `;
}
