const { Router } = require('express')
const controller = require('../controller/items')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controller.getItems)
router.get('/:id', controller.getItem)
router.post('/', restrict, controller.createItem)
router.put('/:id', restrict, controller.updateItem)
router.delete('/:id', restrict, controller.deleteItem)

module.exports = router
