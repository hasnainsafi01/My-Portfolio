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


// 1. Hamburger button click karne par menu kholne ya band karne ke liye
function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}

// 2. Menu ke links par click hote hi menu ko auto-close karne ke liye
document.querySelectorAll('#navbar li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navbar');
        // 'active' class ko remove kar deta hai taake menu chhup jaye
        nav.classList.remove('active');
        
    });

});