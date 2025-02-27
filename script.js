// Theme Switcher
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Cek apakah user pernah pilih theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

// Toggle theme saat tombol diklik
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Simpan preferensi theme ke localStorage
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
