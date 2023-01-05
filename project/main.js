let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function formValidation() {
  
  // name Validation
  let n = document.forms["myForm"]["fname"].value;
    if (n == "") {
      alert("Name must be filled out");
      return false;
    }

  // password validation
  var pw = document.getElementById("pswd").value;  
            //check empty password field  
    if(pw == "") {  
      document.getElementById("message").innerHTML = "\n**Fill the password please!";  
      return false;  
    }  
    if(pw.length < 8) {  
      document.getElementById("message").innerHTML = "\n**Password length must be atleast 8 characters";  
      return false;  
    }  

    if(pw.length > 15) {  
      document.getElementById("message").innerHTML = "\n**Password length must not exceed 15 characters";  
      return false;  
    }
    else {  
      alert("Password is correct");  
    } 

  // email validation
  var em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(em)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
    } 
    else {
      alert("Invalid email address!");
      document.form1.text1.focus();
      return false;
    }
  }

function phone(){
    var phone=document.myForm.phone.value;
    if (input.value.match(phone)){
      document.getElementById("numloc").innerHTML="Enter Numeric value only";
      return false;
    }else{
      return true;
      }
    
}
  