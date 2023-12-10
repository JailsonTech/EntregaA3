//import { openDb } from './configDB.js';
import {insertCliente, updateCliente, deleteCliente, selectCliente } from './Controller/clientes.js';import 
{ createTable, insertProduto, updateProduto, deleteProduto, selectProduto } from './Controller/produtos.js';


import express from 'express';
const app = express();
app.use(express.json());

import router from './routes.js';
app.use(router);


app.listen(3000, () => console.log("Api Rodando."))
