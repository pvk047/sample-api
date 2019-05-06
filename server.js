const http =require('http');
const PORT = parseInt(process.env.PORT) || 3000;
const app=require("./app.js")

const server =http.createServer(app)
server.listen(PORT,function(req,res,next){
    console.log("server is running")
})