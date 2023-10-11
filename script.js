

const form = document.getElementById('sample-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ageRangeInput = document.getElementById('age-range');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const birthdateInput = document.getElementById('birthdate');
const errorMessages = document.getElementById('error-messages');
const validFormValues = document.getElementById('valid-form-values'); 


function displayError(input, message) {
  input.classList.add('error');
  errorMessages.innerHTML = `<p>${message}</p>`;
}


function displaySuccess(values) {
  errorMessages.innerHTML = `<p class="success">Form submitted successfully!</p>`;
  validFormValues.innerHTML = '<h2>Valid Form Values:</h2>';
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      validFormValues.innerHTML += `<p><strong>${key}:</strong> ${values[key]}</p>`;
    }
  }
  validFormValues.style.display = 'block';
}


function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
  return passwordRegex.test(password);
}


function handleSubmit(event) {
  event.preventDefault();
  errorMessages.innerHTML = '';


  const requiredInputs = [nameInput, ageInput, emailInput, passwordInput, confirmPasswordInput, ageRangeInput, birthdateInput];
  for (const input of requiredInputs) {
    if (input.value.trim() === '') {
      displayError(input, `${input.name} is required`);
      return;
    }
    input.classList.remove('error');
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    displayError(emailInput, 'Invalid email format');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    displayError(confirmPasswordInput, 'Passwords do not match');
    return;
  }

  if (!validatePassword(passwordInput.value)) {
    displayError(passwordInput, 'Invalid password format');
    return;
  }


  const age = parseInt(ageRangeInput.value);
  if (age < 18) {
    displayError(ageRangeInput, 'Age must be at least 18');
    return;
  }


  let selectedGender = null;
  for (const genderInput of genderInputs) {
    if (genderInput.checked) {
      selectedGender = genderInput.value;
      break;
    }
  }
  if (!selectedGender) {
    displayError(genderInputs[0], 'Please select a gender');
    return;
  }

  
  const formValues = {
    Name: nameInput.value,
    Age: ageInput.value,
    Email: emailInput.value,
    'Age Range': ageRangeInput.value,
    Gender: selectedGender,
    Birthdate: birthdateInput.value,
  };
  displaySuccess(formValues);
  form.reset();
}


form.addEventListener('submit', handleSubmit);



