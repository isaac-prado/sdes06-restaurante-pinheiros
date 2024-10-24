import Endereco from "../../../dominio/objetosDeValor/endereco";

export default interface ICriarCliente {
    executar(nome: string, cpf: string, endereco: Endereco, telefone: string, saldo: number, email: string): Promise<void>;
}