const mongoose=require('mongoose');
let Schema =mongoose.Schema;
let userSchema=new Schema({
    name:String,
    password:String
},{
    timestamps:true
})

const user=mongoose.model('user',userSchema);
let u=new user({
    name:'name',
    password:'password'
})
u.save(function(err,result){
    console.log(err,result)
})
user.find({
    createdAt:{
        '$lt':new Date()
    }
},function(err,result){
    console.log(err,result)
})