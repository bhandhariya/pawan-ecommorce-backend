var express = require('express');
var Cat=require('../controllers/Category_controller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category');
});

router.get('/getAllCategory',Cat.findAllCategory);


router.post('/create',Cat.createCategory);


router.post('/deletebyid',Cat.deletbyID);


module.exports = router;
