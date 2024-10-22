import Endereco from "../objetosDeValor/endereco";
import Pedido from "./pedido";
import { IsString, IsNotEmpty, IsEmail, Length, IsArray, IsNumber, IsPositive, Matches, ValidateNested } from "class-validator"
export default class Cliente {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @Matches(/^\d{11}$/)
    cpf: string;

    @IsNotEmpty()
    endereco: Endereco;

    @Length(11)
    telefone: string;

    @IsNumber()
    @IsPositive()
    saldo: number;

    @IsArray()
    @ValidateNested({ each: true })
    pedidos: Pedido[];

    @IsEmail()
    email?: string;

    constructor(nome: string, cpf: string, endereco: Endereco, telefone: string, saldo: number, pedidos: Pedido[], email?: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.saldo = saldo;
        this.pedidos = pedidos;
        this.email = email;
    }
}