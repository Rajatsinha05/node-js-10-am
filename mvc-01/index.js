const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute');
const cors = require("cors")
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// image
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/user", userRouter)




app.listen(8090, () => {
    console.log('listening on port 8090');
    connectDB();
})