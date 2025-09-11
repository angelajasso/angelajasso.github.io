const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
  console.log("click!"); // 👈 debería aparecer siempre
  document.body.classList.toggle("dark");

  // Cambia el ícono 🌙/☀️
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
