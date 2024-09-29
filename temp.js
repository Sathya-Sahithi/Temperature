document.getElementById('convertButton').addEventListener('click', function() {
    // Get the input temperature and unit
    let temperature = parseFloat(document.getElementById('temperatureInput').value);
    let unit = document.getElementById('unitSelect').value;
    
    // Check if the input is a valid number
    if (isNaN(temperature)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }
    
    let convertedTemp;
    let convertedUnit;

    // Convert temperature based on the selected unit
    switch (unit) {
        case "Celsius":
            convertedTemp = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            convertedUnit = `Fahrenheit: ${convertedTemp.fahrenheit.toFixed(2)} °F, Kelvin: ${convertedTemp.kelvin.toFixed(2)} K`;
            break;
        case "Fahrenheit":
            convertedTemp = {
                celsius: (temperature - 32) * 5/9,
                kelvin: ((temperature - 32) * 5/9) + 273.15
            };
            convertedUnit = `Celsius: ${convertedTemp.celsius.toFixed(2)} °C, Kelvin: ${convertedTemp.kelvin.toFixed(2)} K`;
            break;
        case "Kelvin":
            convertedTemp = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            convertedUnit = `Celsius: ${convertedTemp.celsius.toFixed(2)} °C, Fahrenheit: ${convertedTemp.fahrenheit.toFixed(2)} °F`;
            break;
        default:
            convertedUnit = "Invalid unit selected.";
            break;
    }

    // Display the result
    document.getElementById('resultOutput').textContent = convertedUnit;
});
