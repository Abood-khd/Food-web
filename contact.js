var boxwidth = $("#boxcontent").width();

var left = true;

$("#close").click(() => {
  if (left) {
    $("#slidbox").animate({ left: `-${boxwidth}` }, 1000);
    left = false;
  } else {
    $("#slidbox").animate({ left: 0 }, 1000);
    left = true;
  }
});
$(document).ready(function () {
  
  $('#spinner').fadeOut(1000,function () {
    $('body').css('overflow','auto')
  })
  })
  

let btn = document.getElementById("btn");
let Name = document.getElementById("name");
let password = document.getElementById("password");
let repass = document.getElementById("repass");
let email = document.getElementById("email");
let age = document.getElementById("age");
let phone = document.getElementById("phone");

function x() {
  if (
    NameValid() == true &&
    AgeValid() == true &&
    phoneValid() == true &&
    PasswordValid() == true &&
    password.value == repass.value
  ) {
    btn.classList.remove("disabled");
  } else {
    btn.classList.add("disabled");
  }
}
x();


// AgeValid() == true &&
// phoneValid() == true &&
// NameValid() == true &&
// PasswordValid() == true

function EmailValid() {
  let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
  if (regexEmail.test(email.value)) {
    return true;
  } else {
    return false;
  }
}
function phoneValid() {
  let regexphone = /[0-9]/g;
  if (regexphone.test(phone.value)) {
    return true;
  } else {
    return false;
  }
}

function AgeValid() {
  let regexage = /^\S[0-9]{0,3}$/g;
  if (regexage.test(age.value)) {
    return true;
  } else {
    return false;
  }
}
function NameValid() {
  let regexName = /[a-z]/g;
  if (regexName.test(Name.value)) {
    return true;
  } else {
    return false;
  }
}
function PasswordValid() {
  let regexPassword = /[a-z0-9]/g;
  if (regexPassword.test(password.value)) {
    return true;
  } else {
    return false;
  }
}
