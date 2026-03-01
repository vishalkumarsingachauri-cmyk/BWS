'use strict';

// Smooth Scrolling
const scrollToSection = (trigger, target) => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.querySelector(target);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
};

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('navMenu');
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
};

// Form Validation
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach((input) => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    scrollToSection(document.querySelector('.scroll-to'), '#targetSection');
    mobileMenuToggle();
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        if (!validateForm(form)) {
            e.preventDefault();
        }
    });
});
