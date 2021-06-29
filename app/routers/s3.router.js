let express = require('express');
let router = express.Router();
 
const awsController = require('../controllers/s3.controller.js');
 
router.get('/api/getSongs', awsController.getSongs);
 
module.exports = router;
