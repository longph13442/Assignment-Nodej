import mongoose, {Schema} from "mongoose";

const productSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
    
})
export default mongoose.model("Products", productSchema)