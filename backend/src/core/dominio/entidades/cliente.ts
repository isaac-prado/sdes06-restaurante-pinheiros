import Endereco from "../objetosDeValor/endereco";
import Pedido from "./pedido";

export default class Cliente {
    nome: string;
    email: string;
    cpf: string;
    endereco: Endereco;
    telefone: string;
    saldo: number;
    pedidos: Pedido[];
}