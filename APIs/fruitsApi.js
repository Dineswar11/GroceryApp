//export mini express
const exp = require('express');
const fruitsApi = exp.Router();
let ErrorHandler = require('express-async-handler')

//middleware to convert to json
fruitsApi.use(exp.json())

//export mongodb
const mc = require('mongodb').MongoClient;

//database Url
const databaseUrl = 'mongodb+srv://testdb1:testdb1@test1.wuccf.mongodb.net/Df?retryWrites=true&w=majority';

let fruitsCollectionObj;

//connect to db
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log('err in connecting db', err.message)
    }
    else {
        //get database object
        let databaseObj = client.db("Df")
        //create usercollection object
        fruitsCollectionObj = databaseObj.collection("fruitsCollection")
        console.log("connected to fruits collection")
    }
})

//GET
//http://localhost:3000/fruits/getfruits
fruitsApi.get('/getfruits', ErrorHandler(async (req, res) => {

    //get the details
    let fruitsObj = await fruitsCollectionObj.find().toArray()
    res.send({ message: fruitsObj })
}))

//GET
//http://localhost:3000/fruits/getfruits/:id
fruitsApi.get('/getfruits/:id', ErrorHandler(async (req, res) => {

    let ID = req.params.id

    let fruitsObj = await fruitsCollectionObj.findOne({ id: ID })
    if (fruitsObj === null) {
        res.send({ message: `Obj with ID : ${ID} doesnot exists` })
    }
    else res.send({ message: fruitsObj })
}))

//POST
//http://localhost:3000/fruits/createfruits
fruitsApi.post('/createfruits', ErrorHandler(async (req, res) => {
    //get body of put req
    let newFruitsObj = req.body;

    let fruitObj = await fruitsCollectionObj.findOne({ id: newFruitsObj.id })
    if (fruitObj === null) {
        await fruitsCollectionObj.insertOne(newFruitsObj)
        res.send({ message: 'New Obj Created' })
    }
    else res.send({ message: `Obj with id ${newFruitsObj.id} already exists` })
}))

//PUT
//http://localhost:3000/fruits/updatefruits/:id
fruitsApi.put('/updatefruits/:id', ErrorHandler(async (req, res) => {

    let modifiedData = req.body;

    await fruitsCollectionObj.updateOne({ id: modifiedData.id }, { $set: { ...modifiedData } })
    res.send({ message: 'updated obj' })
}))

//DELETE
//http://localhost:3000/fruits/deletefruits/:id
fruitsApi.delete('/deletefruits/:id', ErrorHandler(async (req, res) => {

    //get id
    let ID = req.params.id

    await fruitsCollectionObj.deleteOne({ id: ID })
    res.send({ message: `Deleted Object with ID : ${ID}` })
}))

//export module
module.exports = fruitsApi;