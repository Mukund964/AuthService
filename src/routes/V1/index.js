const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserController');

router.post('/users',userController.create);
router.post('/signIn',userController.signIn);
module.exports = router;