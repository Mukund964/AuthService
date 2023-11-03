const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserController');
const {AuthServiceMiddleware} = require('../../middlewares/index');

router.post(
    '/signup',
    AuthServiceMiddleware.ValidateAuthService,
    userController.create);
router.post(
    '/signIn',
    AuthServiceMiddleware.ValidateAuthService,
    userController.signIn);

router.get('/isAuthenticated',userController.isAuthenticated);
module.exports = router;