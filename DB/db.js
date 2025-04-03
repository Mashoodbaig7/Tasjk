const mongoose = require('mongoose')

const dbConnection = async () => {
   
    try {
        await mongoose.connect(process.env.URI)
        console.log('DB connect SuccesFully');

    }
    catch (error) {
        console.log('not connected');

    }
}

module.exports = dbConnection