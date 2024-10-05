const emailInput = document.querySelector("#email");

document.getElementById("email-form").addEventListener("submit", (e)=> {
  e.preventDefault();

  const email = emailInput.value;
  
  if (email === "") {
    document.querySelector("#error-msg").classList.remove("hidden");
    return;
  } else if (validateEmail(email) === false) {
    document.querySelector("#error-msg").classList.remove("hidden");
    return;
  } else {
    document.querySelector("#error-msg").classList.add("hidden");
    alert("Form submitted successfully!");
  }
});

emailInput.addEventListener("input", (e) => {
  if (validateEmail(emailInput.value) === false) {
    document.querySelector("#error-msg").classList.remove("hidden");
  } else {
    document.querySelector("#error-msg").classList.add("hidden");
  }
});



function validateEmail(email)  {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/
  return regex.test(email)
}