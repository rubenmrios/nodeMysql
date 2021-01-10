var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

//localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//localhost:3000/users/listUsers
router.get('/listUsers', userController.listUsers);

//localhost:3000/users/1 || //localhost:3000/users/2 ||  ....
router.get('/:user_id', userController.getOneUser);

module.exports = router;
