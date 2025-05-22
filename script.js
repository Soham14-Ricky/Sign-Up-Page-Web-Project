const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear old messages
  nameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  // Basic name check: at least 2 characters and only letters/spaces
  if (name.length < 2 || containsNumber(name)) {
    nameError.textContent = "Please enter a valid name.";
    isValid = false;
  }

  // Basic phone check: 10 digits and only numbers
  if (phone.length !== 10 || isNaN(phone)) {
    phoneError.textContent = "Phone must be 10 digits.";
    isValid = false;
  }

  // Basic email check: must include @ and .
  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Signup successful!";
    alert("Success");
    form.reset();
  }
});

// Helper: Check if name contains any number
function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      return true;
    }
  }
  return false;
}
