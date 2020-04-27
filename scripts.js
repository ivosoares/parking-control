function calcParking(hrEntrada, hrPartida) {
    var taxa = 0; // Inicializando variavel da taxa de pagamento
    entrada = hrEntrada.split(':'); // Separando os valores de hora e minuto da entrada 
    partida = hrPartida.split(':'); // Separando os valores de hora e minuto da saida 
    min = partida[1] - entrada[1]; // Calculando diferença entre minutos de entrada e saida.
     
    hour_rule = 0;
    if(min < 0){ // Validação de minutos negativos e sem horas fechadas.
      min += 60;
      hour_rule += 1;
    }

    hour = partida[0] - entrada[0] - hour_rule; // Calculando diferença entre hora de entrada e hora de saida
    diff = hour + ":" + min; // Diferença entre horario de entrada e saida.

    if (hour > 0 || min > 0) { // Verificacao de erro se existe hora calculada ou não.
        taxa = taxa + 5; // Inicializa a taxa de cobrança da primeira hora somada a taxa de entrada(2 da taxa + 3 da 1 hora)

        if (hour >= 1) {
            if (hour >= 1 && min > 0) {
                var taxaCorrida = 4 * hour;
                taxa = taxa + taxaCorrida;
            } else {
                hour = hour - 1;
                var taxaCorrida = 4 * hour;
                taxa = taxa + taxaCorrida;
            }
        }
        alert('O Carro ficou ' + diff + ' hrs no estacionamento e sua taxa é de R$' + taxa);
    }else {
        alert('Erro: Hora de Entrada menor que hora de saida ou fora do limite permitido para saida 23:59');
    }
}

function calc() {
    var hrEntrada = document.getElementById('segent').value.toString();
    var hrPartida = document.getElementById('segsai').value.toString();
    calcParking(hrEntrada, hrPartida);
}