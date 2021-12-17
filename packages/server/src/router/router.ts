const Router = require('express');
const router = new Router();
const valueController = require('../controllers/valuesController')

router.get('/values', (req, res) => {
    valueController.getValues(req, res)
});


module.exports = router;