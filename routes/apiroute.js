const express = require('express');
const router = express.Router();
const { notificationCreation} = require('../controllers/sendNotification')


router.post('/api/webhook',  notificationCreation)

module.exports= router;
