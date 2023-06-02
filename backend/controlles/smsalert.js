const client = require('twilio')(process.env.accountSid, process.env.authToken);
const alertsms= (req,res)=>{

client.messages
.create({body: 'Hi there', from: '+15022895399', to: '+21695598401'})
.then(message => message?res.status(200).send('seuccess'):res.status(500).send('error'));
}
module.exports ={alertsms}