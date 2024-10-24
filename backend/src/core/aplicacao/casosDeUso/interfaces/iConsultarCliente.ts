import Cliente from "../../../dominio/entidades/cliente";

export default interface IConsultarCliente {
    executar(cpf: string | null, nome: string | null): Promise<Cliente>;
}