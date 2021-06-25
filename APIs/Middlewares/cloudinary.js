const cloudinary = require('cloudinary').v2;
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: 'dfkhzf4sw',
    api_key: '761945137384723',
    api_secret: 'a9OI3LWk50T0PJNsMpXroMWW2Uw'
})

const clStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: 'GroceryApp',
            public_id: file.filename + '-' + Date.now()
        }
    }
})

const multerObj = multer({ storage: clStorage })

module.exports = multerObj;