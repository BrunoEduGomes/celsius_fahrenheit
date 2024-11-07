// Função que faz o calculo da transformacao celsius->fahrenheit
function celsius_fahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Função que faz o calculo da transformacao fahrenheit->celsius
function fahrenheit_celsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('temperatura').value = ''; // Limpa o input ao atualizar a página
    const get_query = document.getElementById('btn');
    const tipo_grau = document.getElementById('select');
    tipo_grau.value = 'C';

    tipo_grau.addEventListener('click', () => {
        document.getElementById('temperatura').value = ''; // Limpa o input ao atualizar a página
        document.getElementById('resultado').style.display = 'none';    //Oculta o resultado na tela ao mudar o tipo de temperatura
        if(tipo_grau.value == 'C'){
            document.getElementById('name').textContent = "CELSIUS:"
            document.getElementById('temperatura').placeholder = "Digite em °C"
        } else{
            document.getElementById('name').textContent = "FAHRENHEIT:"
            document.getElementById('temperatura').placeholder = "Digite em °F"
        }
    })

    get_query.addEventListener('click', () => {
        const graus = document.getElementById('temperatura').value;
        const graus_resultado = document.getElementById('result'); // Recebe os valores adquiridos do html;

        if(tipo_grau.value == 'C'){  //Se o grau escolhido for Celsius...
            const fahrenheit_text = graus_resultado.textContent; 
            let fahrenheit_Num = Number(fahrenheit_text); 
            fahrenheit_Num = celsius_fahrenheit(graus).toFixed(2);
            console.log(graus);

            if(graus == ''){     // Verifica se foi passada alguma entrada.
                graus_resultado.textContent = "PUT NUMBERS!";
                document.getElementById('fieldset').style.marginBottom = 0; 
            }
            else{
                graus_resultado.textContent = fahrenheit_Num + " °F";
                document.getElementById('fieldset').style.marginBottom = 0;
            }
        } else{  //Se o grau escolhido for Fahrenheit...
                const celsius_text = graus_resultado.textContent; 
                let celsius_Num = Number(celsius_text);
                celsius_Num = fahrenheit_celsius(graus).toFixed(2);  //Atribui o valor da conversão para celsius à variável.
        
                if(graus == ''){     // Verifica se foi passada alguma entrada.
                    graus_resultado.textContent = "PUT NUMBERS!";
                    document.getElementById('fieldset').style.marginBottom = 0; 
                }
                else{
                    graus_resultado.textContent = celsius_Num + " °C";
                    document.getElementById('fieldset').style.marginBottom = 0;
                }
        }
        document.getElementById('resultado').style.display = 'flex';    // Mostra o resultado na tela.
    });
});
