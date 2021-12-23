const Router = require('express');
const router = new Router();
const ratesController = require('../controllers/controller')


router.get('/rates/:CUR_Abbreviation&:CUR_Amount', ratesController.getConverted)
router.get('/rates/names', ratesController.getCurNames)

module.exports = router;