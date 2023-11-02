const express = require('express');
const router = express.Router();

const v1apiRoutes = require('./V1/index');
router.use('/v1',v1apiRoutes);

module.exports = router;