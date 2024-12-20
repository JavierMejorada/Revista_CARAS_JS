document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscriptionForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const nameError = document.createElement("span");
    const emailError = document.createElement("span");
    const successMessage = document.createElement("p");

    nameError.className = "error-message";
    emailError.className = "error-message";
    successMessage.className = "success-message";

    nameInput.after(nameError);
    emailInput.after(emailError);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "El nombre no puede estar vacío.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (isValid) {
            successMessage.textContent = "¡Suscripción exitosa! Gracias por unirte a nuestro Newsletter.";
            form.appendChild(successMessage);
            form.reset(); 
        } else {
            successMessage.textContent = "";
        }
    });
});
