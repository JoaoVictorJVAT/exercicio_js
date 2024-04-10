document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculadoraForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const valorA = parseFloat(document.getElementById('campoA').value);
        const valorB = parseFloat(document.getElementById('campoB').value);

        if (!isNaN(valorA) && !isNaN(valorB)) {
            if (valorB > valorA) {
                exibirMensagem(true);
            } else {
                exibirMensagem(false);
            }
        } else {
            exibirMensagem(false); // Caso haja valores inválidos nos campos
        }
    });

    function exibirMensagem(valido) {
        const resultadoDiv = document.getElementById('resultado');
        if (valido) {
            resultadoDiv.textContent = 'Formulário válido: número B é maior que número A.';
            resultadoDiv.style.color = 'green';
        } else {
            resultadoDiv.textContent = 'Formulário inválido: número B precisa ser maior que número A.';
            resultadoDiv.style.color = 'red';
        }
    }
});