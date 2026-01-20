const params = new URLSearchParams(window.location.search);

["fname", "lname", "email", "phone", "business", "timestamp"].forEach(field => {
  document.getElementById(field).textContent = params.get(field) || "N/A";
});
