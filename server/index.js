const express=require('express');
const cors=require('cors')
const app=express();
const port=process.env.PORT||4000;
const messageRouter=require('./routes/messasgeRoute')

app.use(express.json())
app.use(cors())
app.use(messageRouter)

require('./db/db')

app.listen(port,()=>{
    console.log('server runs on port',port)
})