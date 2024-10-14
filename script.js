function celsius_fahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

async function convertor() {
    const graus_celsius = document.getElementById('celsius').value;
    console.log(graus_celsius);
    console.log(celsius_fahrenheit(graus_celsius));

    
    document.getElementById('resultado').style.display = 'flex';
}