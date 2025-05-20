import { Vegetable } from "./vegetables.model";

export class CartProduct extends Vegetable{
    quantita: number

    constructor(nome: string, descrizione: string, prezzo: string, quantita: number){
        super(nome, descrizione, prezzo)
        this.quantita = quantita
    }
}