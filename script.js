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
