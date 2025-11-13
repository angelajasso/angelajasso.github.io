const btn = document.getElementById("toggle-theme");
const btn2 = document.getElementById("toggle");
const body = document.body;

// --- Cargar preferencia guardada o usar la del sistema ---
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  body.classList.add("dark");
  btn.textContent = "☀️";
  btn2.textContent = "☀️";
} else {
  body.classList.remove("dark");
  btn.textContent = "🌙";
  btn2.textContent = "🌙";
}

// --- Función para alternar modo y guardar preferencia ---
function toggleTheme() {
  const isDark = body.classList.toggle("dark");
  const icon = isDark ? "☀️" : "🌙";

  btn.textContent = icon;
  btn2.textContent = icon;

  // Guardar modo actual
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// --- Asignar eventos a ambos botones ---
btn.addEventListener("click", toggleTheme);
btn2.addEventListener("click", toggleTheme);

// --- Menú móvil ---
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// --- Actualizar el año automáticamente ---
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
