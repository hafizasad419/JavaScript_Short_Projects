// Selecting the form element by its ID
let form = document.querySelector("#form");

// Selecting input elements by their IDs
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone-no");
let emailInput = document.getElementById("email");
let textArea = document.getElementById("message");

// Selecting error message elements by their class names
let nameError = document.querySelector(".name-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");
let textAreaError = document.querySelector(".message-error");

// Selecting submit button and overall form error message
let submitBtn = document.getElementById("submitBtn");
let submitError = document.querySelector(".submit-error");





window.addEventListener('DOMContentLoaded', function () {
    // Retrieve individual input values from local storage
    const storedName = localStorage.getItem("name");
    const storedPhone = localStorage.getItem("phone");
    const storedEmail = localStorage.getItem("email");
    const storedMessage = localStorage.getItem("message");

    // Set the retrieved values as input values
    nameInput.value = storedName || '';
    phoneInput.value = storedPhone || '';
    emailInput.value = storedEmail || '';
    textArea.value = storedMessage || '';
});






// Event listener for the 'name' input
nameInput.addEventListener('input', function () {
    // This event will be triggered whenever the user types in the name input
    if (nameInput.value.length > 4) {
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        nameError.innerHTML = '';
    }
});

// Event listener for the 'phone' input
phoneInput.addEventListener('input', function () {
    if (phoneInput.value.length > 10) {
        phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        phoneError.innerHTML = '';
    }
});

// Event listener for the 'email' input
emailInput.addEventListener('input', function () {
    // Checking if the email contains "@" and ends with ".com"
    if (emailInput.value.includes("@") && emailInput.value.endsWith(".com")) {
        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        emailError.innerHTML = '';
    }
});

// Event listener for the 'textArea' input
textArea.addEventListener('input', function () {
    if (textArea.value.length > 30) {
        textAreaError.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        textAreaError.innerHTML = '';
    }
});

// Event listener for the form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let formIsValid = true;

    // Validation checks for individual input fields
    if (nameInput.value.length < 4) {
        formIsValid = false;
        nameInput.value = '';
        nameInput.setAttribute("placeholder", "Please Write Valid Name");
        // Additional actions if needed when the name is invalid
    } else if (phoneInput.value.length < 10) {
        formIsValid = false;
        phoneInput.value = '';
        phoneInput.setAttribute("placeholder", "Must be a minimum of 10 digits long.");
    } else if (!emailInput.value.includes("@") || !emailInput.value.endsWith(".com")) {
        formIsValid = false;
        emailInput.value = '';
        emailInput.setAttribute("placeholder", "Please Write Valid Email.");
    } else if (textArea.value.length < 30) {
        formIsValid = false;
        textArea.value = '';
        textArea.setAttribute("placeholder", "Should Contain a minimum of 30 characters.");
    } else {
        formIsValid = true;
        submitError.innerHTML = '<i class="fas fa-check-circle"></i>'; // Clear any previous form submission error messages
    }

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("phone", phoneInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("message", textArea.value);


    // Additional actions can be added based on the validity of the form
});

