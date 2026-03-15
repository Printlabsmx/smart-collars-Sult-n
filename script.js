/* ===== DATOS DE LA MASCOTA ===== */

const petData = {
  name: "SULTÁN",
  species: "Perro Mestizo",
  size: "Tamaño mediano",
  owner: "Xóchitl Mariela",
  phone: "6181516426",
  location: "Durango, Dgo",
  friendly: true,
  instructions: "Le gusta mucho estar en la calle pero sabe volver, Porfavor no lo captures."
};

/* ===== CARGA AUTOMÁTICA ===== */

document.getElementById("pet-name").textContent = petData.name;
document.getElementById("pet-species").textContent = petData.species;
document.getElementById("pet-size").textContent = petData.size;
document.getElementById("owner-name").textContent = petData.owner;
document.getElementById("pet-location").textContent = petData.location;
document.getElementById("instructions").textContent = petData.instructions;

const contactBtn = document.getElementById("contact-btn");
contactBtn.href = `https://wa.me/52${petData.phone}`;

const friendlyBox = document.getElementById("friendly-box");
if (!petData.friendly) {
  friendlyBox.textContent = "Mascota NO amigable";
  friendlyBox.style.background = "#ffe6e6";
}
