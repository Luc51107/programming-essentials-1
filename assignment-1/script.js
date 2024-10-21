// Select the necessary DOM elements
const heading = document.getElementById('mainHeading');
const textInput = document.getElementById('textInput');
const changeTextButton = document.getElementById('changeTextButton');

// Add an event listener to the button
changeTextButton.addEventListener('click', () => {
    changeHeadingText();
});

// Function to change the heading text
function changeHeadingText() {
    const newText = textInput.value; 
    heading.textContent = newText;   
}
