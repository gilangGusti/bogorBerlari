// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika Navbar diklik muncul
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navabar
const burger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
