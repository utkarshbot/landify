const toggle = document.getElementsByClassName("toggle-button")[0];
const navlink = document.getElementsByClassName("navbar-left")[0];
toggle.addEventListener("click", () => {
  navlink.classList.toggle("active");
  console.log("hello");
});
