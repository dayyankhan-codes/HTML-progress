// Select the form and input elements
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

// Error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");

// Validation functions
function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 2) {
        nameError.textContent = "Name must be at least 2 characters long.";
        nameInput.classList.add("error");
        return false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error");
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format regex
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("error");
        return false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error");
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters long and include a number and a special character.";
        passwordInput.classList.add("error");
        return false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("error");
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        phoneInput.classList.add("error");
        return false;
    } else {
        phoneError.textContent = "";
        phoneInput.classList.remove("error");
        return true;
    }
}

// Real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
phoneInput.addEventListener("input", validatePhone);

// Form submission validation
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPhoneValid = validatePhone();

    // Submit if all fields are valid
    if (isNameValid && isEmailValid && isPasswordValid && isPhoneValid) {
        alert("Form submitted successfully!");
        form.reset(); // Clear the form
    } else {
        alert("Please fix the errors in the form.");
    }
});