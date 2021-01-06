const { Router } = require('express')
const itemsRouter = require('./items');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/products', itemsRouter);

module.exports = router