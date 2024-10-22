import express, { Router } from 'express';
const rotaBaseCliente: string = '/cliente';

const clienteRouters: Router = express.Router();

clienteRouters.post(rotaBaseCliente, (req, res) => {
    var { nome, email, senha } = req.body;
    res.send('Hello World');
});



export default clienteRouters;