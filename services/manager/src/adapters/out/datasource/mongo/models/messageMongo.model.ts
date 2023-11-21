import {Schema, model} from "mongoose";

const MessageMongoModel =  model("messages", new Schema({
    content: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    }, 
    expecter: {
        type: String, 
        required: false
    },
    sent_date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})) 


export default MessageMongoModel