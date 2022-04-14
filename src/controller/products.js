import product from "../model/products";

export const list= async (req,res) =>{
    try {
        const productss= await product.find().exec();
        res.json(productss);
    } catch (error) {
        res.status(400).json({
            messeage:" Khong tim duoc san pham roi !"
        })
    }
}
export const read= async (req,res) =>{
    try {
        const productss= await product.findOne({_id: req.params.id}).exec();
        res.json(productss);
    } catch (error) {
        res.status(400).json({
            messeage:" Khong tim duoc san pham roi !"
        })
    }
}
export const create= async (req,res) =>{
    console.log("alo alo");
    try {
        const productss= await new product(req.body).save();
        res.json(productss);
    } catch (error) {
        res.status(400).json({
            messeage:" Khong them duoc san pham!"
        })
    }
}
export const remove= async (req,res) =>{
    console.log("xoa nha");
    try {
        const productss= await product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(productss);
    } catch (error) {
        res.status(400).json({
            messeage:" Khong tim duoc san pham roi !"
        })
    }
}
export const update= async (req,res) =>{
    console.log("update nha");
    try {
        const productss= await product.findOneAndUpdate({_id: req.params.id}, req.body).exec();
        res.json(productss);
    } catch (error) {
        res.status(400).json({
            messeage:" Khong tim duoc san pham roi !"
        })
    }
}
