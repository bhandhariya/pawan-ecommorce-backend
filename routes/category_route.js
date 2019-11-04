var express = require('express');
var Cat=require('../controllers/Category_controller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category');
});


router.post('/create',Cat.createCategory);


module.exports = router;