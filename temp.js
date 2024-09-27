function convertir(){
    const celsius = document.querySelector("#ingresoTemp");
    const tempCelsius = Number(celsius.value);

    if (Number.isFinite(tempCelsius)){
        const tempFahrenheit = (tempCelsius * 9/5) + 32;
        console.log("Conversion a Fahrenheit: " + tempFahrenheit.toFixed(2) + "°F");
    
        const tempKelvin = tempCelsius + 273.15;
        console.log("Conversion a Kelvin: " + tempKelvin.toFixed(2) + " K");
    } else{
        alert("¡ERROR!\nEl dato ingresado no es válido.\nIntentalo de nuevo.");
        celsius.value = "";
        return;
    }
    
}