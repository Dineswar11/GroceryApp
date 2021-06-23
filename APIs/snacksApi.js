//export mini express
const exp = require('express')
const snacksApi = exp.Router();
let ErrorHandler = require('express-async-handler')

snacksApi.use(exp.json())

let snacksCollectionObj

snacksApi.use((req,res,next)=>{
    snacksCollectionObj = req.app.get("snacksCollectionObj")
    next()
})
//GET
//http://localhost:3000/snacks/getsnacks
snacksApi.get('/getsnacks',ErrorHandler( async (req, res) => {

    let snacksList = await snacksCollectionObj.find().toArray()
    res.send({ message: snacksList })
}))

//GET
//http://localhost:3000/snacks/getsnacks/:id
snacksApi.get('/getsnacks/:id',ErrorHandler( async (req, res) => {

    //get id
    let ID = req.params.id

    let snackObj = await snacksCollectionObj.findOne({ id: ID })
    if(snackObj === null){
        res.send({message:`obj with ID ${ID} does not exist`})
    }
    else res.send({ message: snackObj })
}))


//POST
//http://localhost:3000/snacks/createsnacks
snacksApi.post('/createsnacks',ErrorHandler( async (req, res) => {

    let newSnacksData = req.body;

    let snacksObj = await snacksCollectionObj.findOne({ id: newSnacksData.id })

    if (snacksObj === null) {
        await snacksCollectionObj.insertOne(newSnacksData)
        res.send({ message: `obj with id ${newSnacksData.id} created` })
    }
    else res.send({ message: `obj with ID ${newSnacksData.id} already exists` })
}))

//PUT
//http://localhost:3000/snacks/updateSnacks/:id
snacksApi.put('/updateSnacks/:id',ErrorHandler( async (req, res) => {

    let updatedSnacksData = req.body;

    await snacksCollectionObj.updateOne({ id: updatedSnacksData.id }, { $set: { ...updatedSnacksData } })
    res.send({ message: 'updated obj' })
}))

//DELETE
//http://localhost:3000/snacks/deletesnacks/:id
snacksApi.delete('/deletesnacks/:id',ErrorHandler( async (req, res) => {

    let ID = req.params.id;

    await snacksCollectionObj.deleteOne({ id: ID })
    res.send({message:`obj with ID: ${ID} deleted`})
}))

//export snacksApi
module.exports = snacksApi;