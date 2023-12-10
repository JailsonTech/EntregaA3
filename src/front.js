import { selectTodos } from './Controller/clientes.js';
import express from 'express';
import { createTable, insertCliente, selectCliente} from './Controller/clientes.js';

import app from './app.js';

app();

selectTodos();
function mostrar(){
  fetch ('http://localhost:3000/todos')
   .then( (cliente) => { return cliente.json() })
    .then( (resp) => {
         verCliente = ''
        for (cliente of resp) {
          verCliente += 'id: '+cliente.id+'<br>'+
                        'Nome: '+cliente.nome
        }
        document.getElementById('verCliente').innerHTML=verCliente;
    })
}