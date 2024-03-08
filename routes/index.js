const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log("router loaded");

router.get('/',homeController.home);
router.get('/notice',homeController.notice);
router.get('/program',homeController.program);
router.get('/gallery',homeController.gallery);



module.exports = router;