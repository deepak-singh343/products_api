const express=require('express');
const router=express.Router();
const ProductsController=require('../controllers/products_controller');
router.post('/create',ProductsController.addProduct);
router.get('/',ProductsController.getAllProducts);
router.delete('/:id',ProductsController.deleteProduct);
router.post('/:id/update_quantity',ProductsController.updateProduct);
module.exports=router;