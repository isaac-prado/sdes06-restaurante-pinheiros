import Cliente from "../../dominio/entidades/cliente";

export default interface IClienteRepository {
    consultarCliente(cpf: string | null, nome: string | null): Promise<Cliente>;
    criarCliente(cliente: Cliente): Promise<void>;
}