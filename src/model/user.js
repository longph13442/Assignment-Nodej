import mongoose, { Schema } from "mongoose"
import { createHmac } from "crypto";
const userSChema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

userSChema.methods={
    authenticate(password){ //sign in
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){
        if(!password) return // kiểm tra password có tồn tại hay không 
        try {
          return createHmac("sha256", "long").update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }
    }
}

userSChema.pre("save", function (next) { // chạy 1 middlewake pre, và xử lí 1 hàm
    console.log(this.password);
    this.password = this.encrytPassword(this.password); // mã hóa mật khẩu
    next()
})
export default mongoose.model("User", userSChema);