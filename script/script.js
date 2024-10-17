// Função que faz o calculo da transformacao celsius->fahrenheit
function celsius_fahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

document.getElementById('celsius').value = ''; // Limpa o input de celsius

// Função chamada pelo html para fazer a conversão do valor fornecido.
function convertor() {
    const graus_celsius = document.getElementById('celsius').value;
    const graus_fahrenheit = document.getElementById('fahrenheit');  //Salva os valores da página html.

    const fahrenheit_text = graus_fahrenheit.textContent; 
    let fahrenheit_Num = Number(fahrenheit_text);       //Converte o valor da tag span para numérico.
    fahrenheit_Num = celsius_fahrenheit(graus_celsius).toFixed(2); //Atribui o valor da conversão para fahrenheit à variável.

    if(graus_celsius == ''){     // Verifica se foi passada alguma entrada em graus celsius.
        graus_fahrenheit.textContent = "TU É BURRO?";
        document.getElementById('fieldset').style.marginBottom = 0; // Retira a margem do fieldset para aparecer o resultado.
    }
    else{
        graus_fahrenheit.textContent = fahrenheit_Num + " °F";
        document.getElementById('fieldset').style.marginBottom = 0;
    }
    
    document.getElementById('resultado').style.display = 'flex';    // Mostra o resultado na tela.
}
