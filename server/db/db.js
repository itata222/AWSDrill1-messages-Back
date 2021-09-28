const mongoose = require('mongoose')

mongoose.connect(process.env.MESSAGES_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});