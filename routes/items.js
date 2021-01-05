const { Router } = require('express')
const controller = require('../db/items')
const router = Router()

router.get('/items', controller.getItems)
router.get('/items/:id', controller.getItem)
router.post('/items', controller.createItem)
router.put('/items/:id', controller.updateItem)
router.delete('/items/:id', controller.deleteItem)

module.exports = router
