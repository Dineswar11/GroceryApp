//export express
const exp = require('express');
const app = exp();
const path = require('path')

app.use(exp.static(path.join(__dirname,'./dist/GroceryApp/')))

//exporting the Api's
const snacksApi = require('./APIs/snacksApi')
const fruitsApi = require('./APIs/fruitsApi')
const userApi = require('./APIs/userApi')

//execute specific api based on path
app.use("/snacks", snacksApi)
app.use("/fruits", fruitsApi)
app.use('/user',userApi)

//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port
const port = 3000;
app.listen(port, () => console.log(`server on ${port}...`))