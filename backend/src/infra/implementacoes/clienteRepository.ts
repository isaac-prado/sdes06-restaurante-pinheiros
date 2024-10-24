import IClienteRepository from "../../core/aplicacao/contratos/iClienteRepository";
import Cliente from "../../core/dominio/entidades/cliente";

export default class ClienteRepository implements IClienteRepository {
    // simulacao banco
    private clientes: Cliente[] = []

    consultarCliente(cpf: string | null, nome: string | null): Promise<Cliente> {
        const clienteEncontrado = this.clientes.find(cliente => {
            (cpf && cliente.cpf === cpf) || (nome && cliente.nome === nome)
        });

        if(!clienteEncontrado) {
            throw new Error("Cliente não encontrado");
        }

        return Promise.resolve(clienteEncontrado);        
    }

    async criarCliente(cliente: Cliente): Promise<void> {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.nome} criado com sucesso.`)
    }
}