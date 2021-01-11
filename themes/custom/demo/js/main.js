var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my_slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function validate(){
  var name=document.forms["contactForm"]["Name"];
  var getemail=document.forms["contactForm"]["Email"];
  var subject=document.forms["contactForm"]["Subject"];
  var email=getemail.value;
  var atposition= email.indexOf("@");
  var dotposition=email.lastIndexOf(".");
if(name.value==""){
  alert("Name cant be blank");
  name.focus(); 
   return false;
}
if(subject.value.length>25 || subject.value.length<4){
  alert("Subject Length should be min-4 and max-25 characters");
  subject.focus(); 
   return false;
}
if(name.value.length<25 || subject.value.length<4){
  alert("Name should not be less than 4 character");
  subject.focus(); 
   return false;
}
if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
  email.focus();
  return false;
}

}

function myFunction() {
  var x = document.getElementById("order1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction1() {
  var x = document.getElementById("menu_items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
