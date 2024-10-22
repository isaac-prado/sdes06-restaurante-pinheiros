import { IsNumber, IsPositive, IsString } from "class-validator";

export default class Produto {
    @IsPositive()
    id: string;

    @IsPositive()
    estoque: number;

    @IsString()
    nome: string;

    @IsPositive()
    @IsNumber()
    preco: number;

    constructor(id: string, estoque: number, nome: string, preco: number) {
        this.id = id;
        this.estoque = estoque;
        this.nome = nome;
        this.preco = preco;
    }
}