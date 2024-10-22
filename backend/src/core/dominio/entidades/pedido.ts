import { IsDate, IsNumber } from "class-validator";

export default class Pedido {
    @IsDate()
    data: Date;

    @IsNumber()
    valor: number;

    constructor(data: Date, valor: number) {
        this.data = data;
        this.valor = valor;
    }
}