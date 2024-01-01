function myFunction() {
  const element = document.getElementById("sketch");
  const button =
document.getElementById("button");
  element.classList.remove("hidden");
  button.classList.add("hidden");
  button.classList.remove("button");
}

function myFunction1() {
  const element = document.getElementById("sketch");
  const button =
document.getElementById("button");
  element.classList.add("hidden");
  button.classList.remove("hidden");
  button.classList.add("button");
}

const element = document.querySelector(".menu");

const menubtn =
document.querySelector(".menu-button-bars")

const sidebar=
document.querySelector(".sidebar")
const sidebar2=
document.querySelector(".sidebar2")
const sidebar3=
document.querySelector(".sidebar3")
const on =
document.querySelector(".on")

element.addEventListener('click', () => {    element.classList.toggle("active"); 
   sidebar.classList.toggle("active");
   sidebar2.classList.toggle("active");
   sidebar3.classList.toggle("active");
   on.classList.toggle("turnoff");
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
// For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});
