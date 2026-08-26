const btn = document.getElementById("btn-el")
const input = document.getElementById("input-el")
const lengthy = document.getElementById("length-p")
const volumey = document.getElementById("volume-p")
const massy = document.getElementById("mass-p")
const tempy = document.getElementById("temp-p")



btn.addEventListener("click", () => {

calculate(input.value)
})

function calculate (num) {
  
 let kmM = num / 1.60934;
 let mKm = num * 1.60934;
 let litreG = num * 0.264172;
 let gallonL = num * 3.78541;
 let kgP = num * 2.20462;
 let pKg = num * 0.453592;
 let celF = (num * 1.8) + 32;
 let fehC = (num - 32)/1.8;

 lengthy.textContent = `${num} Km = ${kmM.toFixed(2)} Miles || ${num} Miles = ${mKm.toFixed(2)} Km`
 volumey.textContent = `${num} Litres = ${litreG.toFixed(2)} Gallons || ${num} Gallons = ${gallonL.toFixed(2)} Litres`
 massy.textContent = `${num} Kg = ${kgP.toFixed(2)} Pounds || ${num} Pounds = ${pKg.toFixed(2)} Kg`
 tempy.textContent = `${num} Celsius = ${celF.toFixed(2)} Fehrenheit || ${num} Fahrenheit = ${fehC.toFixed(2)} Celsius`
}

