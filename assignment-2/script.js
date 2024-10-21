// Select the necessary DOM elements
const number1 = document.getElementById('number1'); 
const number2 = document.getElementById('number2'); 
const calculateButton = document.getElementById('calculateButton'); 
const answer = document.getElementById('answer'); 

// Add event listener to the calculate button
calculateButton.addEventListener('click', calculate);

function calculate() {
    
    const value1 = parseFloat(number1.value);
    const value2 = parseFloat(number2.value);
    
   
    const result = value1 + value2;

  
    answer.textContent = result;
}
