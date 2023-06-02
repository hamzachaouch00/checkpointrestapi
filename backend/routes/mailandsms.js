const router = require('express').Router()
const mailcontrol= require('../controlles/email')
const smscontrol= require('../controlles/smsalert')
router.post('/api/sendmail',mailcontrol.nodemail)
router.post('/api/sendsms',smscontrol.alertsms)
module.exports={mailrouter:router}