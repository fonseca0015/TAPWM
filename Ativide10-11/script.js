// Animação de bolhas de fundo
const bubbleContainer = document.querySelector(".background-bubbles");

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${15 + Math.random() * 10}s`;
  bubble.style.animationDelay = `${Math.random() * 10}s`;

  bubbleContainer.appendChild(bubble);
}

// Função Construtora Retângulo
function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function criarRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do retângulo:"));

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert("Por favor, informe valores válidos maiores que zero.");
    return;
  }

  const retangulo = new Retangulo(base, altura);
  const area = retangulo.calcularArea();

  document.getElementById("resultadoRetangulo").textContent =
    `Área do retângulo (${base}x${altura}): ${area.toFixed(2)}`;
}

// Classe Conta + Herança
class Conta {
  constructor(nome, banco, numero, saldo) {
    this._nome = nome;
    this._banco = banco;
    this._numero = numero;
    this._saldo = saldo;
  }

  get nome() { return this._nome; }
  set nome(valor) { this._nome = valor; }

  get banco() { return this._banco; }
  set banco(valor) { this._banco = valor; }

  get numero() { return this._numero; }
  set numero(valor) { this._numero = valor; }

  get saldo() { return this._saldo; }
  set saldo(valor) { this._saldo = valor; }

  mostrarDados() {
    return `Cliente: ${this.nome} | Banco: ${this.banco} | Conta: ${this.numero} | Saldo: R$${this.saldo.toFixed(2)}`;
  }
}

class Corrente extends Conta {
  constructor(nome, banco, numero, saldo, saldoEspecial) {
    super(nome, banco, numero, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() { return this._saldoEspecial; }
  set saldoEspecial(valor) { this._saldoEspecial = valor; }

  mostrarDados() {
    return super.mostrarDados() + ` | Saldo Especial: R$${this.saldoEspecial.toFixed(2)}`;
  }
}

class Poupanca extends Conta {
  constructor(nome, banco, numero, saldo, juros, dataVencimento) {
    super(nome, banco, numero, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() { return this._juros; }
  set juros(valor) { this._juros = valor; }

  get dataVencimento() { return this._dataVencimento; }
  set dataVencimento(valor) { this._dataVencimento = valor; }

  mostrarDados() {
    return super.mostrarDados() + ` | Juros: ${this.juros}% | Vencimento: ${this.dataVencimento}`;
  }
}

function criarContas() {
  const nome = prompt("Informe o nome do correntista:");
  const banco = prompt("Informe o nome do banco:");
  const numero = prompt("Informe o número da conta:");
  const saldo = parseFloat(prompt("Informe o saldo da conta:"));

  if (!nome || !banco || !numero || isNaN(saldo)) {
    alert("Preencha todos os dados corretamente.");
    return;
  }

  const saldoEspecial = parseFloat(prompt("Informe o saldo especial:"));
  const juros = parseFloat(prompt("Informe os juros da poupança:"));
  const dataVencimento = prompt("Data de vencimento da poupança:");

  if (isNaN(saldoEspecial) || isNaN(juros) || !dataVencimento) {
    alert("Verifique os dados inseridos.");
    return;
  }

  const contaCorrente = new Corrente(nome, banco, numero, saldo, saldoEspecial);
  const contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, dataVencimento);

  document.getElementById("resultadoContas").textContent =
    `Conta Corrente:\n${contaCorrente.mostrarDados()}\n\nConta Poupança:\n${contaPoupanca.mostrarDados()}`;
}
