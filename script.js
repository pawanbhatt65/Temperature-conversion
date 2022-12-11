function celsiusTemprature(tempValue){
    let valueTemperature = parseFloat(tempValue);
    document.querySelector("#resultFahrenhit").innerHTML = (valueTemperature*9/5)+32 + "°F";
}
function celTemperature(tempValue){
    let kalvinValue = parseFloat(tempValue);
    document.getElementById("resutKelvin").innerHTML = kalvinValue+273.15 + "k";
}
function fahrenheitTemperature(tempFah){
    let valueFah = parseFloat(tempFah);
    document.querySelector("#resultCelsius").innerHTML = (valueFah -32)*5/9 + "°C";
}
function fahTemperature(tempFah){
    let valueFah = parseFloat(tempFah);
    document.querySelector("#fahToKelvin").innerHTML = valueFah*5/9 + "k";
}
function kelvinTemperature(tempValue){
    let kalvinValue = parseFloat(tempValue);
    document.querySelector("#kelToCel").innerHTML = kalvinValue-273.15 + "°C";
}
function kelTemperature(tempFah){
    let valueFah = parseFloat(tempFah);
    document.querySelector("#kelToFah").innerHTML = ((valueFah - 273.15)*9/5) + 32 + "°F";
}