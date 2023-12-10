import { openDb } from "../configDB.js";


export async function createTable() {
   openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS Produtos (id INTEGER PRIMARY KEY, produto TEXT)')
   })
}
export async function insertProduto(req, res) {  
   let produto = req.body;  
   openDb().then(db => {
     db.run('INSERT INTO Produtos (produto) VALUES (?)', [produto.produto, produto.id]);
   });
   res.json({
     "statusCode": 200
   })
 }
 //..........................................................
 export async function updateProduto(req, res) {
   let produto = req.body;
   openDb().then(db => {
     db.run('UPDATE Produtos SET produto=? WHERE id=?', [produto.produto, produto.id])
   });
   res.json({
     "statusCode": 200
   });
 }
 //..........................................................
 export async function deleteProduto(req, res) {
   let id = req.body.id;
   openDb().then(db => {
     db.run('DELETE FROM Produtos WHERE id=?', [id])
       .then(res => res)
   });
   res.json({
     "statusCode": 200
   })
 }
 //..........................................................
 export async function selectTodosProdutos(req, res) {
   let todosProdutos = req.body;
   openDb().then(db => {
     db.all('SELECT * FROM Produtos')
       .then(todosProdutos => res.json(todosProdutos))
   });
 }
 //..........................................................
 export async function selectProduto(req, res) {
   let id = req.body.id;
   openDb().then(db => {
     db.get('SELECT * FROM Produtos WHERE id=?', [id])
       .then(produto => res.json(produto));
   })
 }