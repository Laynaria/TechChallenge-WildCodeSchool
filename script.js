const nav = document.querySelector("nav");
const foot = document.querySelector("footer");
const logo = document.querySelector("#logo");
const mobileIcon = document.querySelector("#mobile-icon");
const rightNav = document.querySelector("#right-nav");

let navOffset = 0;
let mouseX = 0;

var prevScrollpos = window.pageYOffset;
var rightRightnav = 2;

document.querySelector("nav").innerHTML =
  '<div id="Main-Menu"><ul><li><a href="./index.html">About</a></li><li><a href="./royal-family.html">Royal Family</a></li><li><a href="./royal-assets.html">Royal Assets</a></li><li id="Menu-Contact"><a href="./contact.html">Contact Us</a></li></ul></div>';

foot.innerHTML =
  '<h3>copyright © <a href="https://laynaria.com/en" target="_blank">Laynaria.com</a></h3>';

window.addEventListener("scroll", (e) => {
  var currentScrollPos = window.pageYOffset;

  if (window.scrollY > 50 && prevScrollpos < currentScrollPos) {
    nav.style.top = "-100px";
    logo.style.top = "-100px";
    mobileIcon.style.top = "-100px";
    rightNav.style.right = "-200px";

    nav.style.transition = "0.8s";
    logo.style.transition = "0.8s";
    mobileIcon.style.transition = "0.8s";
    rightNav.style.transition = "0.8s";
  } else {
    nav.style.top = "0px";
    logo.style.top = "0px";
    mobileIcon.style.top = "1rem";

    nav.style.transition = "0.8s";
    logo.style.transition = "0.8s";
    mobileIcon.style.transition = "0.8s";
  }
  prevScrollpos = currentScrollPos;
});

mobileIcon.addEventListener("click", () => {
  if (rightRightnav < 2) {
    rightNav.style.right = "-200px";
    rightNav.style.transition = "0.8s";
    rightRightnav++;
  } else if (rightRightnav > 0) {
    rightNav.style.right = "0px";
    rightNav.style.transition = "0.8s";
    rightRightnav--;
  }
  setTimeout(() => {
    rightNav.style.transition = "0s";
  }, 1500);
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 741px)").matches) {
    rightNav.style.right = "-200px";
    rightNav.style.transition = "0s";
    mobileIcon.style.transition = "0s";
    rightRightnav = 2;
  } else {
    rightNav.style.right = "-200px";
    rightNav.style.transition = "0.8s";
    mobileIcon.style.transition = "0s";
    rightRightnav = 2;

    setTimeout(() => {
      rightNav.style.transition = "0s";
    }, 0);
  }
});

window.addEventListener("mousedown", (e) => {
  navOffset = rightNav.offsetLeft;
  mouseX = e.clientX;

  if (mouseX < navOffset) {
    rightNav.style.right = "-200px";
    rightNav.style.transition = "0.8s";
    mobileIcon.style.transition = "0s";
    rightRightnav = 2;

    setTimeout(() => {
      rightNav.style.transition = "0s";
    }, 1500);
  } else {
  }
});
