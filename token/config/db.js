const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rw5rajatas:node_10am@cluster0.ehqet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users');
    console.log('connect to database');
}

module.exports = connectDB;