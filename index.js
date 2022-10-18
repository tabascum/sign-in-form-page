//validation on username and password length

let userName = document.querySelector("#name");
let nameLabel = document.querySelector("#name-label");
let password = document.querySelector("#password");
let passwordLabel = document.querySelector("#password-label");

userName.oninput = () => {
  if (userName.value.length <= 2) {
    nameLabel.setAttribute("style", "color: red");
    nameLabel.innerHTML = "username * should have at least 3 characters";
  } else {
    nameLabel.setAttribute("style", "color: limegreen");
    nameLabel.innerHTML = "name" + " " + "&#10003";
  }
};

password.oninput = () => {
  if (password.value.length < 7) {
    passwordLabel.setAttribute("style", "color: red");
    passwordLabel.innerHTML = "password * should have at least 7 characters";
  } else {
    passwordLabel.setAttribute("style", "color: limegreen");
    passwordLabel.innerHTML = "password" + " " + "&#10003";
  }
};

/* RegExp Pattern

/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

*/
