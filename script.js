let form = document.getElementsByClassName("form");
let text = document.getElementById("text");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let massage = document.getElementById("massage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  text.value = "";
  email.value = "";
  subject.value = "";
  massage.value = "";
});


//hambergur is start here 
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.querySelector(".hamburger");

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }
}
