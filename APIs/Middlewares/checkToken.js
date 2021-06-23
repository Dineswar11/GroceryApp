const jwt = require('jsonwebtoken')


const checkToken = (req, res, next) => {
    let tokenWithBearer = req.headers.authorization
    let token;

    if(token==undefined){
        req.send({message : 'Unauthorazied Access'})
    }
    else {
        token = tokenWithBearer.split(" ")[1];
        jwt.verify(token,'xyz',(err,decoded)=>{
            if(err){
                return res.send({message:"Invalid/Expired Request.. Login Again to continue"})
            }
            else{
                next()
            }
        })
    }
}

module.exports = checkToken;