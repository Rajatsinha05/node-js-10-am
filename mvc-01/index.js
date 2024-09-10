const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter)




app.listen(8090, () => {
    console.log('listening on port 8090');
    connectDB();
})