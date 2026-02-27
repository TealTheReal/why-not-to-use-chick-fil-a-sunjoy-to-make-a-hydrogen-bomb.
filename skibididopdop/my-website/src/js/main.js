// This file contains the JavaScript code for the website. 
// It includes functionality for interactive elements, such as event listeners or animations, enhancing user experience.

document.addEventListener('DOMContentLoaded', () => {
    const warningMessage = document.getElementById('warning-message');
    
    if (warningMessage) {
        warningMessage.innerText = "Using a Chick-fil-A Sunjoy to create a hydrogen bomb is not only impractical but also illegal and dangerous.";
    }

    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', () => {
            alert("It's important to understand the serious implications and dangers of discussing or attempting to create weapons of mass destruction.");
        });
    }
});