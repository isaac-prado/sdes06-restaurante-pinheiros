import express, { Router } from 'express';
import criarCliente from '../../core/aplicacao/casosDeUso/clientes/criarCliente';
import IClienteRepository from '../../core/aplicacao/contratos/iClienteRepository';
const rotaBaseCliente: string = '/cliente';

const clienteRouters: Router = express.Router();

clienteRouters.post(rotaBaseCliente, async (req: Request<IClienteRepository>, res) => {
    const { cpf, nome, endereco, telefone, email, saldo } = req.body;
    
    if(!cpf || !nome || !endereco || !telefone) {
        return res.status(400).json({ message: "Dados obrigatórios não preenchidos"});
    }

    try {
        const newCliente = await criarCliente({ cpf, nome, endereco, telefone, email, saldo })
    }

});



export default clienteRouters;