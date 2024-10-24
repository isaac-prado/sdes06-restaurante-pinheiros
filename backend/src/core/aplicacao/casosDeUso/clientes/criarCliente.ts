import Cliente from "../../../dominio/entidades/cliente";
import Endereco from "../../../dominio/objetosDeValor/endereco";
import IClienteRepository from "../../contratos/iClienteRepository";
import ICriarCliente from "../interfaces/iCriarCliente";

export default class CriarCliente implements ICriarCliente {
    private clienteRepository: IClienteRepository;

    public constructor(clienteRepository: IClienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async executar(nome: string, cpf: string, endereco: Endereco, telefone: string, saldo: number, email?: string): Promise<void> {
        const clienteExistente = await this.clienteRepository.consultarCliente(cpf, nome);
        if(clienteExistente) {
            throw new Error("Cliente já cadastrado.")
        }

        const novoCliente = new Cliente(nome, cpf, endereco, telefone, saldo, [], email)
        
        await this.clienteRepository.criarCliente(novoCliente);
    }
}
