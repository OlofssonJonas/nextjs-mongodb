import mongoose, {Schema} from 'mongoose'

const topitSchema = new Schema({
    title: String, 
    description: String,
},
{
    timestamp: true
})

const Topic = mongoose.models.Topic || mongoose.model('Topic', topitSchema)

export default Topic