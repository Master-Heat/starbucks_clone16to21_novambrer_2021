const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navtoggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
}
btn.addEventListener("click", navtoggle);
