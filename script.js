const btn = document.getElementById("toggle-theme");
const btn2 = document.getElementById("toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Cambia el ícono 🌙/☀️
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});

btn2.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Cambia el ícono 🌙/☀️
  if (document.body.classList.contains("dark")) {
    btn2.textContent = "☀️";
  } else {
    btn2.textContent = "🌙";
  }
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
