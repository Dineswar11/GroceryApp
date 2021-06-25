const objectId = require('mongodb').ObjectId

const convertToObjectId = (req, res, next) => {
    let updateDetails = req.body

    updateDetails._id = new objectId(updateDetails._id)

    next()
}

module.exports = convertToObjectId;