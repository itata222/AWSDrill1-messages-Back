const express=require('express');
const { addMessage, getAllMessages } = require('../controlers/messageControler');

const router=new express.Router();

router.post('/messages/addMessage',addMessage)

router.get('/messages/getAllMessage',getAllMessages)

module.exports=router;