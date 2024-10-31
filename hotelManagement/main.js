const images = [
    "wallpaper-2.jpg",
    "wallpaper-4.jpg",
    "wallpaper-5.jpg",
    "wallpaper-6.jpg",
    "wallpaper-7.jpg",
    "wallpaper-8.jpg",
    "wallpaper.jpg",
    "wallpaper-5.jpg"
];

const headMain = document.getElementById('headMain');
let currentIndex = 0;

// Function to change the background image with fade effect
function changeBackgroundImage() {
    // Fade out by removing 'visible' class
    headMain.classList.remove('hidden');

    setTimeout(() => {
        // Update the background image once fade-out is complete (after 2 seconds)
        headMain.style.backgroundImage = `url(${images[currentIndex]})`;

        // Increment the index and wrap around if needed
        currentIndex = (currentIndex + 1) % images.length;

        // Fade back in by adding 'visible' class
        headMain.classList.add('hidden');
    }, 2000);  // Adjust the timing to match your fade-out duration
}

// Change background image every 10 seconds
setInterval(changeBackgroundImage, 10000);

// Initial background image setup
changeBackgroundImage();

// Fade in effect on page load
window.addEventListener('load', () => {
    headMain.classList.add('hidden');
});










document.addEventListener('DOMContentLoaded', () => {
    const floatAway = document.getElementById('floatAway');
    const headMain = document.querySelector('.headMain');

    // Listen for the animation end event
    floatAway.addEventListener('animationend', () => {
        headMain.classList.add('visible'); // Add the visible class to show the section
    });
});


const headerBottom = document.querySelector('.headerBottom');
const menuItems = headerBottom.querySelectorAll('h5');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const { offsetLeft, offsetWidth } = item;
        
        // Update the pseudo-element's position and width
        headerBottom.style.setProperty('--border-left', `${offsetLeft}px`);
        headerBottom.style.setProperty('--border-width', `${offsetWidth}px`);

        // Reduce opacity of other items
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.5'; // Set opacity to 50%
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        // Reset opacity of all items on mouse leave
        menuItems.forEach(otherItem => {
            otherItem.style.opacity = '1'; // Reset opacity to fully visible
        });
    });
});

// Reset on mouse leave for the headerBottom
headerBottom.addEventListener('mouseleave', () => {
    // Reset opacity of all items when leaving the headerBottom
    menuItems.forEach(otherItem => {
        otherItem.style.opacity = '1'; // Reset opacity to fully visible
    });

    // Optionally reset the border width if desired
    headerBottom.style.setProperty('--border-width', `0px`);
});





const contactSection = document.querySelector('.contact');
    
// Select the main container element that holds the grid layout
const container = document.querySelector('.container');

// Add an event listener for when the mouse enters the contact section
contactSection.addEventListener('mouseenter', function() {
    // When the mouse enters, change the grid layout to 60% for hero and 40% for contact section
    container.style.gridTemplateColumns = '60% 40%'; // Adjust grid size on hover
});

// Add an event listener for when the mouse leaves the contact section
contactSection.addEventListener('mouseleave', function() {
    // When the mouse leaves, revert the grid layout back to 65% for hero and 35% for contact section
    container.style.gridTemplateColumns = '65% 35%'; // Revert to original grid size
});
    

// Select the necessary elements
const ekvithSection = document.getElementById('ekvith');
const menuLink = document.querySelector('.menu01'); // This is your "Open Menu" link
const closeMenu = document.getElementById('crossicon'); // Close button in the menu

// Function to show the ekvith section
function showEkvithSection() {
    console.log("Showing ekvith section"); // Debug log
    ekvithSection.classList.remove('hidden'); // Remove the hidden class first
    setTimeout(() => {
        ekvithSection.classList.add('visible'); // Then add the visible class to slide in
    }, 0); // Ensure the visible class is added right away
}

// Function to hide the ekvith section
function hideEkvithSection() {
    console.log("Hiding ekvith section"); // Debug log
    ekvithSection.classList.remove('visible'); // Remove the visible class to slide out
    setTimeout(() => {
        ekvithSection.classList.add('hidden'); // Add the hidden class after the slide-out transition
    }, 1950); // Match this timeout with your CSS transition duration
}

// Add click event listener to the menu link
menuLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    showEkvithSection(); // Call the function to show the section
});

// Add click event listener to the close button
closeMenu.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    hideEkvithSection(); // Call the function to hide the section
});

