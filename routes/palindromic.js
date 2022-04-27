const palindromicController = require('../controllers/palindromicController')
const express = require('express');
const router = express.Router();

router.get('/', palindromicController.index)
router.post('/', palindromicController.showPalin)

module.exports = router;