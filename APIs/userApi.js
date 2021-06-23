//create mini express app
const exp = require('express')
const userApi = exp.Router();
const expressErrorHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const checkToken = require("./Middlewares/checkToken")
//add body parsing middleware
userApi.use(exp.json())

let userCollectionObj;

userApi.use((req,res,next)=>{
    userCollectionObj = req.app.get("userCollectionObj")
    next()
})
//http://localhost:3000/user/getusers
//get users
userApi.get("/getusers", expressErrorHandler(async (req, res) => {

    let userList = await userCollectionObj.find().toArray()
    res.send({ message: userList })

}))

//http://localhost:3000/user/getuser/:username
//get user by username
userApi.get("/getuser/:username", expressErrorHandler(async (req, res, next) => {

    //get username from url
    let un = req.params.username;
    //search
    let userObj = await userCollectionObj.findOne({ username: un })

    if (userObj === null) {
        res.send({ message: "User not existed" })
    }
    else {
        res.send({ message: userObj })
    }
}))


//http://localhost:3000/user/createuser
//create user
userApi.post("/createuser", expressErrorHandler(async (req, res) => {
    //get user obj
    let newUser = req.body;
    //search for existing user
    let user = await userCollectionObj.findOne({ username: newUser.username })
    //if user existed
    if (user !== null) {
        res.send({ message: "User already existed" })
    }
    else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUser.password, 7)
        //replace password
        newUser.password = hashedPassword;
        //insert
        await userCollectionObj.insertOne(newUser)
        res.send({ message: "User created" })
    }
}))

//http://localhost:3000/user/updateuser/<username>
//PUT
userApi.put("/updateuser/:username", expressErrorHandler(async (req, res) => {

    //get modified user
    let modifiedUser = req.body;
    //update
    //hash password
    let hashedPassword = await bcryptjs.hash(modifiedUser.password, 7)
    //replace password
    modifiedUser.password = hashedPassword;
    await userCollectionObj.updateOne({ username: modifiedUser.username }, { $set: { ...modifiedUser } })
    //send res
    res.send({ message: "User modified" })

}))

//http://localhost:3000/user/deleteuser/:username
//delete user
userApi.delete("/deleteuser/:username", expressErrorHandler(async (req, res) => {

    //get username from url
    let un = req.params.username;
    //find the user
    let user = await userCollectionObj.findOne({ username: un })

    if (user === null) {
        res.send({ message: "User not existed" })
    }
    else {
        await userCollectionObj.deleteOne({ username: un })
        res.send({ message: "user removed" })
    }
}))

//http://localhost:3000/user/loginDetails
//user login
userApi.post('/loginDetails', expressErrorHandler(async (req, res) => {

    //get user credetials
    let credentials = req.body;
    //search user by username
    let user = await userCollectionObj.findOne({ username: credentials.username })
    //if user not found
    if (user === null) {
        res.send({ message: "invalid username" })
    }
    else {
        //compare the password
        let result = await bcryptjs.compare(credentials.password, user.password)
        //if not matched
        if (result === false) {
            res.send({ message: "Invalid password" })
        }
        else {
            //create a token
            let signedToken = jwt.sign({ username: credentials.username }, 'xyz', { expiresIn: 10 })
            //send token to client
            res.send({ message: "login success", token: signedToken, username: credentials.username, userObj: user })
        }

    }

//GET
//http://localhost:3000/user/primesub
userApi.get('/primesub',checkToken,(req,res)=>{
    res.send({message:'Prime Sub Authentication'})
})   

}))

//export
module.exports = userApi;