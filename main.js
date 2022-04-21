let firstName = document.querySelector("[name='firstName']");
let age = document.querySelector("[name='age']");
let email = document.querySelector("[name='email']");
let eye = document.querySelector("[name='eye']");
let gender = document.querySelectorAll("[name='gender']");
let animal = document.querySelectorAll("[name='animal']");
let submitBtn = document.querySelector("[type='submit']");
let users = [];

submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  let errors = [];
  let userData = {};

  if (firstName.value === "" || firstName.value === null) {
    errors.push("First name is requared");
    firstName.setAttribute("placeholder", "First name is requared");
  } else {
    userData["firstName"] = firstName.value.trim();
  }

  if (parseInt(age.value) >= 18 && parseInt(age.value) <= 45) {
    userData["age"] = age.value;
  } else {
    age.setAttribute(
      "placeholder",
      "Age is requared and must between 18 and 45"
    );
    age.value = "";
    errors.push("Age is requared and must between 18 and 45");
  }

  if (
    email.value === "" ||
    email.value === null ||
    email.value.indexOf("@") === -1
  ) {
    errors.push("Email is requared");
    email.value = "";
    email.setAttribute("placeholder", "Email is requared");
  } else {
    userData["email"] = email.value;
  }

  if (eye.value === "" || eye.value === null) {
    errors.push("Eye is requared");
    eye.querySelector("[disabled]").innerText = "Eye is requared";
  } else {
    userData["eye"] = eye.value;
  }

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userData["gender"] = gender[i].value;
    }
  }
  userData["animal"] = [];
  for (let i = 0; i < animal.length; i++) {
    if (animal[i].checked) {
      userData["animal"].push(animal[i].value);
    }
  }

  if (errors.length === 0) {
    users.push(userData);
    console.log(users);
  }
}
