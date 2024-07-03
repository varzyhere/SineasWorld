// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// when menu clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik out area
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
