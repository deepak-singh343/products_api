const Product=require('../models/product');
module.exports.addProduct=async function(req,res)
{
    const product=new Product({
        name:req.body.name,
        quantity:req.body.quantity
    });
    try{
        const newProduct=await product.save();
        res.status(201).json(newProduct);
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}
module.exports.getAllProducts=async function(req,res)
{
    let products =await Product.find()
    return res.status(200).json({
        message:"Products",
        products:products
    })
}   
module.exports.deleteProduct=async function(req,res)
{
    try{
        let product=await Product.findById(req.params.id);
        if(!product)
        {
            return res.status(401).json({
                message:"product cannot be removed"
            });
        }
        else
        { 
            product.remove();
            return res.status(200).json({
                message:"Product removed"
            });
        }
    }
    catch(err)
    {
        return res.status(500).json({
            message:err.message
        });
    }
} 
module.exports.updateProduct=async function(req,res)
{
    try{
        let product=await Product.findById(req.params.id);
        if(!product)
        {
            return res.status(401).json({
                message:"product not found"
            });
        }
        else
        { 
            product.quantity=Number.parseInt(product.quantity)+Number.parseInt(req.query.number);
            product.save();
            return res.status(200).json({
                message:"Product's quantity updated"
            });
        }
    }
    catch(err)
    {
        return res.status(500).json({
            message:err.message
        });
    }
}