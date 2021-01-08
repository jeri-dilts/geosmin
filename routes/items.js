const { Router } = require('express')
const controller = require('../controller/items')
const router = Router()

router.get('/', controller.getItems)
router.get('/:id', controller.getItem)
router.post('/', controller.createItem)
router.put('/:id', controller.updateItem)
router.delete('/:id', controller.deleteItem)

module.exports = router
