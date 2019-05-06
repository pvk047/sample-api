const {validate:validateToken}=require('../services/jwt');
const shouldLoggedIn=(req,res,next)=>{
    const token=req.headers['x-access-token'];
    if(token){
        validateToken(token.trim()).then(data=>{
            req.userData=data;
            next()
        }).catch(err=>{
            console.log(err);
            res.status(401).json({
                status:401,
                message:'Invalid or Expired Token is used'
            })
        })
    }else{
            res.status(403).json({
                status:403,
                message:'Missing x-access-token headers'
            })
    }
}
module.exports={
    shouldLoggedIn
}