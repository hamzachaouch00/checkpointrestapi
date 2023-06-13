const router = require('express').Router()
const paymentcontroler=require('../controlles/paiment')
const mailcontrol= require('../controlles/email')
const smscontrol= require('../controlles/smsalert')
router.post('/api/sendmail',mailcontrol.nodemail)
router.post('/api/sendsms',smscontrol.alertsms)
router.post('/api/checkoutpeyment',paymentcontroler.paiment)

module.exports={mailrouter:router}