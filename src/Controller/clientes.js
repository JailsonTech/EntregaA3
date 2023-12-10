import { openDb } from "../configDB.js";

export async function insertCliente(req, res) {  
  let cliente = req.body;  
   openDb().then(db => {
     db.run('INSERT INTO Clientes (nome) VALUES (?)', [cliente.nome, cliente.id]);
   });
   res.json({
     "statusCode": 200
   })
 }
 //..........................................................
 export async function updateCliente(req, res) {
   let cliente = req.body;
   openDb().then(db => {
     db.run('UPDATE Clientes SET nome=? WHERE id=?', [cliente.nome, cliente.id])
   });
   res.json({
     "statusCode": 200
   });
 }
 //..........................................................
 export async function deleteCliente(req, res) {
   let id = req.body.id;
   openDb().then(db => {
     db.get('DELETE FROM Clientes WHERE id=?', [id])
       .then(res => res)
   });
   res.json({
     "statusCode": 200
   })
 }
 //..........................................................
 export async function selectTodos(req, res) {
   let todos = req.body;
   openDb().then(db => {
     db.all('SELECT * FROM Clientes')
       .then(todos => res.json(todos))
   });
 }
 //..........................................................
 export async function selectCliente(req, res) {
   let id = req.body.id;
   openDb().then(db => {
     db.get('SELECT * FROM Clientes WHERE id=?', [id])
       .then(cliente => res.json(cliente));
   })
 }