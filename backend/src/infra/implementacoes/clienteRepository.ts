import IClienteRepository from "../../core/aplicacao/contratos/iClienteRepository";
import Cliente from "../../core/dominio/entidades/cliente";

export default class ClienteRepository implements IClienteRepository {
    consultarCliente(cpf: string | null, nome: string | null): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }

    async criarCliente(nome: string, cpf: string, telefone: string, saldo: number, email: string): Promise<void> {
        console.log('Criando cliente...');
    }
}