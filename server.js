//export express
const exp = require('express');
const app = exp();
const path = require('path')
require('dotenv').config()

app.use(exp.static(path.join(__dirname,'./dist/GroceryApp/')))

//exporting the Api's
const snacksApi = require('./APIs/snacksApi')
const fruitsApi = require('./APIs/fruitsApi')
const userApi = require('./APIs/userApi')
const cartApi = require('./APIs/cartApi')

//execute specific api based on path
app.use("/snacks", snacksApi)
app.use("/fruits", fruitsApi)
app.use('/user',userApi)
app.use('/cart',cartApi)

//export mongodb
const mc = require('mongodb').MongoClient;

//database Url
const databaseUrl = process.env.DATABASE_URL;

let fruitsCollectionObj;

//connect to db
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log('err in connecting db', err.message)
    }
    else {
        //get database object
        let databaseObj = client.db("Df")
        //create collection objects
        fruitsCollectionObj = databaseObj.collection("fruitsCollection")
        snacksCollectionObj = databaseObj.collection('snacksCollection')
        userCollectionObj = databaseObj.collection("usercollection")
        cartCollectionObj = databaseObj.collection("cartCollection")
        app.set("fruitsCollectionObj",fruitsCollectionObj)
        app.set("snacksCollectionObj",snacksCollectionObj)
        app.set("userCollectionObj",userCollectionObj)
        app.set("cartCollectionObj",cartCollectionObj)
        console.log("connected to database")
    }
})

//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port
const port = process.env.PORT;
app.listen(port, () => console.log(`server on ${port}...`))