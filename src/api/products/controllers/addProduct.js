const productsCollection = require("../../../models/products")
const addProduct = async(req,res)=>{
    const product =req.body;
    console.log(product);
    const result = await productsCollection.create(product);
    res.send(result)
}

module.exports= addProduct;