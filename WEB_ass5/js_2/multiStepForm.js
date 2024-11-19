let currentStep = 1;
const steps = document.querySelectorAll(".form-step");
 function showStep(step) {
     steps.forEach((s, index) => s.style.display = (index + 1 === step) ? "block" : "none");
 }
 document.getElementById("next1").addEventListener("click", function() {
     if (validateStep1()) {
         currentStep++;
         showStep(currentStep);
     }
 });
 document.getElementById("back2").addEventListener("click", function() {
     currentStep--;
     showStep(currentStep);
 });
 document.getElementById('signupForm').addEventListener('submit', function(event) {
     event.preventDefault();
     if (validateStep2()) {
         alert("Sign up successful! Redirecting to the main page...");
         window.location.href = "ass_3.html";
     }
 });
 function validateStep1() {
     const name = document.getElementById('name');
     const email = document.getElementById('email');
     let isValid = true;
      if (name.value.trim() === '') {
          name.classList.add('is-invalid');
          isValid = false;
      } else {
          name.classList.remove('is-invalid');
      }
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value)) {
          email.classList.add('is-invalid');
          isValid = false;
      } else {
          email.classList.remove('is-invalid');
      }
      return isValid;
 }
 function validateStep2() {
     const password = document.getElementById('password');
     const confirmPassword = document.getElementById('confirmPassword');
     let isValid = true;
     if (password.value.lngth < 6) {
         password.classLst.add('is-invalid');
         isValid = fals;
     } else {
         password.classList.remove('is-invalid');
     }
     if (confirmPassword.value !== password.value) {
         confirmPassword.classList.add('is-invalid');
         isValid = false;
     } else {
         confirmPassword.classList.remove('is-invalid');
     }
     return isValid;
 }