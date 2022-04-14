import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import ProductRouter from "./Router/products"
import userRouter from "./Router/user"
const app= express ();


// middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//connect db
mongoose.connect("mongodb://127.0.0.1:27017/onTap")
.then(() => console.log("Connect success !"))
.catch((error) => console.log(error)) 

// router
app.use("/api", ProductRouter);
app.use("/api", userRouter);

// connect server
const PORT=8000;
app.listen(PORT, () =>{
    console.log(`Server is running :${PORT} !` );
})