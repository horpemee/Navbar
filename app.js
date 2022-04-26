burger = document.querySelector(".hamburger");
navLinks = document.querySelector(".nav-links");
//Event listener
burger.addEventListener("click", handleClick);

function handleClick() {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
}
