const mongoose=require('mongoose');
const {mongooseString}=require("../config/config");
mongoose.connect(mongooseString, {useNewUrlParser: true})
let db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports=db;