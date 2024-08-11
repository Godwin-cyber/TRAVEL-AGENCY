// Navbar toggle
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Accordion toggle
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionBody = accordionItem.querySelector('.accordion-body');

        accordionBody.classList.toggle('show');
    });
});

// Contact form submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form submitted!');
});
