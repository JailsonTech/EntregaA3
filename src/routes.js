import { Router } from "express";
import { insertCliente, selectCliente, updateCliente, deleteCliente, selectTodos} from './Controller/clientes.js'
import { insertProduto, updateProduto, deleteProduto, selectProduto, selectTodosProdutos } from './Controller/produtos.js';

const router = Router();

router.get('/', (req,res)=>{
 res.json({
  "statusCode":200,
  "msg":"API rodando"
 })
})


router.get('/cliente', selectCliente);
router.get('/todos', selectTodos);
router.post('/cliente', insertCliente);
router.put('/cliente', updateCliente);
router.delete('/cliente', deleteCliente);

router.get('/produto', selectProduto);
router.get('/todosProdutos', selectTodosProdutos);
router.post('/produto', insertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', deleteProduto);


export default router;