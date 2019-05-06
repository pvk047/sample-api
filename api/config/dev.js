const mongopassword = "hVza3oSbG2Febbx8"
module.exports={
    name:'dev',
    secret:'$123abASSsdfasdf213123*dsf123DEVadfakdfj',
    mongooseString:`mongodb+srv://root:${encodeURIComponent(mongopassword)}@cluster0-gaxbt.mongodb.net/test?retryWrites=true`
}