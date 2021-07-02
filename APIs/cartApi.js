//export mini express
const exp = require('express')
const cartApi = exp.Router();
let ErrorHandler = require('express-async-handler')
const convertToObjectId = require('./Middlewares/ObjectID')

cartApi.use(exp.json())

let cartCollectionObj;

cartApi.use((req, res, next) => {
    cartCollectionObj = req.app.get("cartCollectionObj")
    next()
})

//GET
//http://localhost:3000/cart/getcartitems
cartApi.get('/getcartitems', ErrorHandler(async (req, res) => {
    let cartList = await cartCollectionObj.find().toArray()
    res.send({ message: cartList })
}))

//GET
//http://localhost:3000/cart/getcartitems/:username
cartApi.get('/getcartitems/:username', ErrorHandler(async (req, res) => {
    let userName = req.params.username;

    let cartObj = await cartCollectionObj.findOne({ username: userName })
    if (cartObj === null) {
        res.send({ message: `obj with username ${userName} does not exist` })
    }
    else res.send({ message: cartObj })
}))

//POST
//http://localhost:3000/cart/createcartobj
cartApi.post('/createcartobj', ErrorHandler(async (req, res) => {
    let newcartObj = req.body;

    let cartObj = await cartCollectionObj.findOne({ username: newcartObj.username })

    if (cartObj === null) {
        await cartCollectionObj.insertOne(newcartObj)
        res.send({ message: `obj with username ${newcartObj.username} created` })
    }
    else res.send({ message: `obj with username ${newcartObj.username} already exists` })
}))

//PUT
//http://localhost:3000/cart/updatecartobj/:username
cartApi.put('/updatecartobj/:username', convertToObjectId, ErrorHandler(async (req, res) => {

    let updatedCartObj = req.body;
    await cartCollectionObj.updateOne({ username: updatedCartObj.username }, { $set: { ...updatedCartObj } })
    res.send({message : `updated cart`})
}))


module.exports = cartApi