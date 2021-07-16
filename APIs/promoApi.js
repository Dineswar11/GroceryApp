//export mini express
const exp = require('express')
const promoApi = exp.Router();
let ErrorHandler = require('express-async-handler');
const { ModuleResolutionKind } = require('typescript');
const convertToObjectId = require('./Middlewares/ObjectID')

promoApi.use(exp.json())

let promoCollectionObj

promoApi.use((req, res, next) => {
    promoCollectionObj = req.app.get("promoCollectionObj")
    next()
})

promoApi.get('/getpromocode/:promo', ErrorHandler(async (req, res) => {
    let promoCode = req.params.promo;

    let promoObj = await promoCollectionObj.findOne({ promoName: promoCode.toUpperCase() })
    if (promoObj === null) {
        res.send({ message: `obj with promo ${promoCode} does not exist` })
    }
    else res.send({ message: promoObj })
}))

promoApi.post('/createpromocode', ErrorHandler(async (req, res) => {
    let newpromoObj = req.body;

    let promoObj = await promoCollectionObj.findOne({ promoName : newpromoObj.promoName.toUpperCase() })

    if (promoObj === null){
        await promoCollectionObj.insertOne(newpromoObj)
        res.send({ message: `obj with username ${newpromoObj.promoName} created` })
    }
    else res.send({ message: `obj with username ${newpromoObj.promoName} already exists`})
}))

promoApi.put('/updatecartObj/:promocode',convertToObjectId, ErrorHandler(async (req,res) =>{
    let updatedpromoObj = req.body;
    await promoCollectionObj.updateOne({ promoName : updatedpromoObj.promoName } , {$set : { ...updatedpromoObj}})
    res.send({message : `update promo`})
}))

promoApi.delete('/deletepromoCode/:promocode',ErrorHandler(async (req,res)=>{
    let promocode = req.params.promocode;
    console.log(typeof(promocode))
    await promoCollectionObj.deleteOne({ promoName : promocode })
    res.send({ message : `promo removed`})
}))

module.exports = promoApi