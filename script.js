//home searchbar effect
"use strict";

const placeholder = document.getElementById('search-effect');
const words = ["Software Developer", "UX Designer", "Creative", "Artist", "Cook"];
const fonts = ["font1", "font2", "font3", "font4", "font5"];

let wordIndex = 0;
let text = "";
let isTyping = true;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentFont = fonts[wordIndex];
    const fullText = ` ${currentWord}`;

    if (isTyping) {
        text = fullText.substring(0, text.length + 1);
    }

    placeholder.setAttribute('placeholder', text);
    placeholder.className = currentFont;

    if (text === fullText) {
        // Full text is typed
        isTyping = false;
        setTimeout(() => {
            // Move to the next word and font together
            wordIndex = (wordIndex + 1) % words.length;
            isTyping = true;
            text = ""; // Reset text for next word
            typeEffect();
        }, 1000); // Pause before switching to the next word and font
    } else {
        setTimeout(typeEffect, 200); // Continue typing
    }
}

typeEffect();



//project navbar effect
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-list li');

    navItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add 'active' class to the clicked item
            this.classList.add('active');
            
            // Update progress lines
            updateProgress(index);
        });
    });

    function updateProgress(currentIndex) {
        navItems.forEach((item, index) => {
            const line = item.querySelector('::after');
            const beforeLine = item.querySelector('::before');

            if (index < currentIndex) {
                // Previous items - red vertical line
                item.classList.add('completed');
            } else if (index === currentIndex) {
                // Current item - white line below
                item.classList.add('active');
            } else {
                // Next items - reset styles
                item.classList.remove('completed', 'active');
            }
        });
    }
});



//email button effect

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('email-icon');

    // Play the video once when the page first loads
    video.play();

    video.addEventListener('mouseenter', function() {
        // Reset the video to the beginning and play it
        this.currentTime = 0;
        this.play();
    });

    video.addEventListener('ended', function() {
        // Optionally, you can do something when the video ends
        console.log('Video ended');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('email-icon-header');

    // Play the video once when the page first loads
    video.play();

    video.addEventListener('mouseenter', function() {
        // Reset the video to the beginning and play it
        this.currentTime = 0;
        this.play();
    });

    video.addEventListener('ended', function() {
        // Optionally, you can do something when the video ends
        console.log('Video ended');
    });
});



const menuIcon = document.getElementById('menu-icon');
const headernav = document.getElementById('header-nav');
const navLinks = document.querySelectorAll('#header-nav a'); // Select all the links inside the menu

menuIcon.addEventListener('click', () => {
    headernav.classList.toggle('active'); // Toggle the active class to show/hide the menu
    menuIcon.classList.toggle('active');  // Toggle the image change
});

// Add event listeners to all the links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Link clicked!'); // Debugging: to ensure event listener works
        headernav.classList.remove('active'); // Close the menu
        menuIcon.classList.remove('active');  // Reset the icon
    });
});
