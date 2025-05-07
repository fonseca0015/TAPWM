// Função do Exercício 1: Calcular soma e quadrados
function calcularSomaEQuadrados() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    const soma = num1 + num2 + num3;
    const quadrado1 = num1 * num1;
    const quadrado2 = num2 * num2;

    const resultado = `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadrado1} e o quadrado do segundo é: ${quadrado2}`;
    
    document.getElementById('resultadoSoma').textContent = resultado;
}

// Função do Exercício 2: Criar palavras de 5 letras
function criarPalavras() {
    const letras = document.getElementById('palavras').value.toUpperCase();
    if (letras.length !== 5) {
        alert("Por favor, insira exatamente 5 letras.");
        return;
    }

    const letrasArray = letras.split('');
    const palavras = [];

    // Gerar combinações de palavras com letras fornecidas
    for (let i = 0; i < 10; i++) {
        const palavra = letrasArray.join('') + String.fromCharCode(65 + Math.floor(Math.random() * 26));
        palavras.push(palavra);
    }

    document.getElementById('resultadoPalavras').textContent = "Palavras geradas: " + palavras.join(", ");
}
