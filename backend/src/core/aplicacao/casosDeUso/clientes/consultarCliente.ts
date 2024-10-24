import Cliente from "../../../dominio/entidades/cliente";
import IClienteRepository from "../../contratos/iClienteRepository";
import IConsultarCliente from "../interfaces/iConsultarCliente";

export default class ConsultarCliente implements IConsultarCliente {
    private clienteRepository: IClienteRepository;

    public constructor(clienteRepository: IClienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async executar(cpf: string | null, nome: string | null): Promise<Cliente> {
        return await this.clienteRepository.consultarCliente(cpf, nome);
    }
}