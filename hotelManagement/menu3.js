// Wait until the entire HTML content is loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the contact section element using the class 'contact'
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
});



    
