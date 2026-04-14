let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields");
    return;
  }

  alert("Message sent! (demo)");

  form.reset();
});
function hireMe() {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=your@email.com&su=Gym Inquiry&body=Hi I want to join HITGYM");
}