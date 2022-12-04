const Product = require('../models/Product');



// For Creating a new product
exports.createProduct = async (req,res)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success : true,
        message : "Product created successfully.",
        product : product
    });
}

// For updating a  product
exports.updateProduct = async (req,res)=>{
    let product = await Product.findById(req.params.id);

    // If Product not found
    if(!product)
        res.status(404).json({message : "Product Not Found"})
    console.log(req.body);
    product = await Product.findByIdAndUpdate(req.params.id,req.body);
    res.status(201).json({
        success : true,
        message : "Product updated successfully.",
        product : product
    });
}

// For deleting a product
exports.deleteProduct = async (req,res)=>{
    let product = await Product.findById(req.params.id);
    
    // If Product not found
    if(!product)
        res.status(404).json({message : "Product Not Found"})
        
    await product.remove();
    res.status(201).json({
        success : true,
        message : "Product deleted successfully.",
    });
}

// For fetching all products
exports.getAllProducts = async (req,res)=>{
    const products = await Product.find();
    res.status(201).json({message : "Products Found",products : products});
}

// For fetching single products
exports.getProductByID = async (req,res)=>{
   const product = await Product.findById(req.params.id);
     // If Product not found
    if(!product)
     res.status(404).json({message : "Product Not Found"})

    res.status(201).json({message : "Product Found.",products : product});
}

