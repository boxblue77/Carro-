class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.modelo} está ligado.`);
    } else {
      console.log(`${this.modelo} já está ligado.`);
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.modelo} foi desligado.`);
    } else {
      console.log(`${this.modelo} já está desligado.`);
    }
  }

  status() {
    console.log(`Carro: ${this.marca} ${this.modelo} (${this.ano})`);
    console.log(`Status: ${this.ligado ? "Ligado" : "Desligado"}`);
  }
}

// Exemplo de uso
const meuCarro = new Carro("Chevrolet", "Onix", 2020);

meuCarro.status();   // Mostra info
meuCarro.ligar();    // Liga o carro
meuCarro.status();   // Verifica se está ligado
meuCarro.desligar(); // Desliga
