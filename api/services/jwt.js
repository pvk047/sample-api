const jwt = require('jsonwebtoken');
const {secret} =require("../config/config");
let generate = function createJsonWebToken(payload, expiresIn = '1 days') {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, { expiresIn },(err,token)=>{
            if(err)
                reject(err)
            else
                resolve(token)
        });
      
    })

}
let validate = function validateJsonWebToken(token) {
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,payload)=>{
            if(err)
                reject(err)
            else
                resolve(payload)
        })
    })
}
module.exports={
    generate,
    validate
}