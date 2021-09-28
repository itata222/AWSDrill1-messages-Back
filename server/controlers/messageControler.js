const Message=require('../models/messageModel')

exports.addMessage=async(req,res)=>{
    try {
        const message=new Message(req.body);
        await message.save();
        res.send(message);
    } catch (e) {
        res.status(400).send({
            status:400,
            message:"something went wrong"
        })
    }
}

exports.getAllMessages=async(req,res)=>{
    try {
        const messages=await Message.find({});
        res.send(messages)
    } catch (e) {
        res.status(400).send({
            status:400,
            message:"something went wrong"
        })
    }
}