const ShowMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    if (toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
ShowMenu('nav__toggle','nav__menu')

// Active and remouve menu
const navLink = document.querySelectorAll(".nav__link")
function linkAction() {
    navLink.forEach(link => link.classList.remove('active')); // Utiliser "link" au lieu de "n"
    this.classList.add('active');

    // remove menu mobile
    const navMenu = document.getElementById("nav__menu")
    navMenu.classList.remove('show')
}

navLink.forEach(link => link.addEventListener('click', linkAction));

// scroll reveal Animation
const btn = document.getElementById('btn');

// Function to show the custom alert
function showCustomAlert(message, type) {
    const alertDiv = document.getElementById('custom-alert');
    alertDiv.textContent = message;
    alertDiv.classList.add(type, 'show');

    // Hide the alert after 5 seconds (adjust the timeout value as needed)
    setTimeout(() => {
        hideCustomAlert();
    }, 5000);
}

// Function to hide the custom alert
function hideCustomAlert() {
    const alertDiv = document.getElementById('custom-alert');
    alertDiv.classList.remove('show');
}
// clear input
function clearInputFields() {
    document.getElementById('full_name').value = '';
    document.getElementById('email_id').value = '';
    document.getElementById('message').value = '';
}

btn.addEventListener('click', function(e) {
    e.preventDefault();

    let params = {
        from_name: document.getElementById('full_name').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_ktxqqja", "template_odkf96n", params)
        .then(function(res) {
            // Success message
            const successMessage = "L'e-mail a été envoyé avec succès ! ✉️🎉";
            showCustomAlert(successMessage, 'success');
            // Clear input fields
            clearInputFields();
        })
        .catch(function(error) {
            // Error message
            const errorMessage = "Échec de l'envoi de l'e-mail. Veuillez réessayer plus tard. 😔";
            showCustomAlert(errorMessage, 'error');
        });
});

