const router = require('express').Router();
const { route } = require('./admin.routes.js');
const adminRouter = require('./admin.routes.js');
const citiesRouter = require('./cardRoutes/cities.routes')
const farmersRouter = require('./cardRoutes/farmers.routes')
const transactionsRouter = require('./cardRoutes/transactions.routes')
const productsRouter = require('./cardRoutes/products.routes')
const buyersRouter = require('./cardRoutes/buyers.routes')


router.use('/admins', adminRouter);
router.use('/cities', citiesRouter);
router.use('/farmers', farmersRouter);
router.use('/transactions', transactionsRouter);
router.use('/products', productsRouter);
router.use('/buyers', buyersRouter)


module.exports = router;