class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log(`${this.modelo} está ligado.`);
  }
}

const meuCarro = new Carro("Fusca");
meuCarro.ligar();
