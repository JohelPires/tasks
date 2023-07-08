const Router = require('express')
const TarefaController = require('../controllers/TarefaController')
const { authMiddleware } = require('../middleware/auth-middleware')

const router = Router()

//  ROTAS
router.post('/', authMiddleware, TarefaController.addTarefa)
// router.get('/', (req, res) => {
//     res.json('teste2')
// })

router.get('/', authMiddleware, TarefaController.listAll)
// router.get('/usuario', (req, res) => {
//     res.json('teste')
// })

router.get('/:id', TarefaController.findId)

router.put('/:id', TarefaController.update)

router.delete('/:id', TarefaController.deleta)

module.exports = router
