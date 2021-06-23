const jwt = require('jsonwebtoken')


const checkToken = (req, res, next) => {
    let tokenWithBearer = req.headers.authorization
    let token = tokenWithBearer.split(" ")[1]

    if(token==undefined){
        req.send({message : 'Unauthorazied Access'})
    }
    else {
        jwt.verify(token,'xyz',(err,decoded)=>{
            if(err){
                return res.send({message:"Session expired..login to continue..."})
            }
            else{
                next()
            }
        })
    }
}

module.exports = checkToken;