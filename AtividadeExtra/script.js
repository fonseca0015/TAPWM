// Função do Exercício 1: Calcular soma e quadrados usando um array
function calcularSomaEQuadrados() {
    // Criando o array com os números informados
    const numeros = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value)
    ];

    // Calcular a soma dos números
    const soma = numeros.reduce((acc, num) => acc + num, 0);

    // Calcular o quadrado de cada número
    const quadrados = numeros.map(num => num * num);

    // Gerando o resultado a ser exibido
    const resultado = `A soma dos três números é: ${soma}, os quadrados são: ${quadrados.join(', ')}`;
    
    // Exibindo o resultado
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
