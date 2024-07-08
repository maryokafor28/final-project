const mobile_menu = document.querySelector(".mobile_header");
const menu_open = document.getElementById("bx-open");
const menu_close = document.getElementById("bx-close");

menu_open.addEventListener("click", function () {
  if (mobile_menu.style.display === "none") {
    mobile_menu.style.display = "block";
    menu_open.style.display = "none";
    menu_close.style.display = "block";
  } else {
    mobile_menu.style.display = "none";
    menu_open.style.display = "block";
    menu_close.style.display = "none";
  }
});

menu_close.addEventListener("click", function () {
  if (mobile_menu.style.display === "block") {
    mobile_menu.style.display = "none";
    menu_open.style.display = "block";
    menu_close.style.display = "none";
  }
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
};

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  window.alert("your request was sent successfully");
});
