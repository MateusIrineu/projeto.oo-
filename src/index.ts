import { Carro } from './classes/carro.js';
import { Conta } from './conta/conta.js';

// Instaciando a classe Carro
const pajero = new Carro('Pajero', 'Mitsubishi', 2019, 'Prata', 200000);

const hilux = new Carro('Hilux', 'Toyota', 2019, 'Branca', 150000);

console.log(pajero.fabricante);

// Instaciando a classe Conta

const contaBancaria = new Conta('549329', 'Fulano da Silva', 0);

console.log(contaBancaria.saldo);