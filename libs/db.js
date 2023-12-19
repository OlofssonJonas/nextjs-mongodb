require('dotenv').config()
const mongoose = require ('mongoose')
//console.log(process.env.MONGO_URL)

const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB
