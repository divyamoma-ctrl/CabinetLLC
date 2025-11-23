const togglerBtn = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".navbar-collapsed");

let nav = false;

function showNavLinks () {
  if (nav == false) {
    navLinks.style.display = "block";
    nav = true;
  }
  else {
    navLinks.style.display = "none";
    nav = false;
  }
  
}

togglerBtn.addEventListener("click", showNavLinks);
