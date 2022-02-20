const form = document.querySelector("form");
const emailField = document.querySelector(".email");
const emailInput = document.querySelector(".email-input");
const pwdField = document.querySelector(".password");
const pwdInput = document.querySelector(".password-input");

//  preventing default loading after submitting
form.onsubmit = (e) => {
  e.preventDefault();

  emailInput.value == ""
    ? emailField.classList.add("shake", "error")
    : checkEmail();

  pwdInput.value == "" ? pwdField.classList.add("shake", "error") : pwdCheck();

  setTimeout(() => {
    // remove shake class after 500ms
    emailField.classList.remove("shake");
    pwdField.classList.remove("shake");
  }, 500);

  // working on input keyup

  emailInput.onkeyup = () => {
    checkEmail();
  };
  pwdInput.onkeyup = () => {
    pwdCheck();
  };

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
      emailField.classList.add("error");
      emailField.classList.remove("valid");

      let errorTxt = document.querySelector(".error-text");

      emailInput.value != ""
        ? (errorTxt.innerText = "enter valid email address")
        : (errorTxt.innerText = "Email cant be blank");
    } else {
      emailField.classList.remove("error");
      emailField.classList.add("valid");
    }
  }

  function pwdCheck() {
    if (pwdInput.value == "") {
      pwdField.classList.add("error");
      pwdField.classList.remove("valid");
    } else {
      pwdField.classList.remove("error");
      pwdField.classList.add("valid");
    }

    // what to do if all details put are valid
  }

  if (
    !emailField.classList.contains("error") &&
    !pwdField.classList.contains("error")
  ) {
    window.location.href = "#";
    // put url link above
    console.log("form submitted");
  }
};