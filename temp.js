// //  document.getElementById('Convert').onclick = computeTemp;
// //  document.getElementById('Reset').onclick = clearForm;



const CelciusE1 = document.getElementById("Celcius");
const FehrenheitE1 = document.getElementById("Fehrenheit");
const KelvinE1 = document.getElementById("Kelvin");

function computeTemp() {
    const currentValue = + event.target.value;


switch (event.target.name) {
    case "Celcius":
        KelvinE1.value = currentValue + 273.15;
        FehrenheitE1.value = currentValue * 1.8 + 32;
        break;
    case "Fehrenheit":
        CelciusE1.value = (currentValue - 32);
        KelvinE1.value = (currentValue - 32) / 1.8 + 32;
        break;
    case "Kelvin":
        CelciusE1.value = currentValue - 273.15;
        FehrenheitE1.value = (currentValue - 273.15) * 1.8 + 32;
        break;
     default:
 }
 }