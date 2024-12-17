
export class Conta {
constructor(
    private _numero: string,
    private _titular: string,
    private _saldo: number) {
        this.numero = _numero;
        this.titular = _titular;
        this.saldo = _saldo;
    }

    // metodo get
public get numero() {
    return this._numero.trim().toLocaleLowerCase();
}
public get titular() {
    return this._titular.trim().toLocaleLowerCase();
}
public get saldo() {
    return this._saldo;
}

    // metodo set
public set numero(numero: string) {
    this._numero.trim().toLocaleLowerCase();
}
public set titular(titular: string) {
    this._titular.trim().toLocaleLowerCase();
}
public set saldo(saldo: number) {
    if(saldo <= 0) {
        throw new Error('Saldo na conta: 0 REAIS. \nImpossível sacar ou realizar transferências.\nRealize um depósito na sua conta. ');
    }
    }
}