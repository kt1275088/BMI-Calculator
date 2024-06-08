// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height from meters to centimeters
    height /= 100;
    // Calculate BMI
    const bmi = weight / (height * height);
    // Return calculated BMI
    return bmi;
}

// Function to display BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get form inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    // Calculate BMI
    const bmi = calculateBMI(weight, height);
    // Display BMI
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}.`;
    // Display BMI category
    document.getElementById('category').textContent = `You are ${getBMICategory(bmi)}.`;
}

// Add event listener to form
document.getElementById('bmiForm').addEventListener('submit', handleFormSubmit);
