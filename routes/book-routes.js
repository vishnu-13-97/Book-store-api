const express = require('express');
const router = express.Router();
const bookController = require('../controller/book-controller')
const {authMiddleware,isAdmin} = require('../middleware/jwt')
const {upload}=require('../config/cloudinary.js')

router.get('/get',authMiddleware,bookController.getAllBooks);
router.get('/get/:id',authMiddleware,bookController.getSinglebookById);
router.get('/search',authMiddleware,bookController.searchBook);
router.post('/add',authMiddleware,isAdmin,upload.single("image"),bookController.addNewBook);
router.put('/update/:id',authMiddleware,isAdmin,upload.single('image'),bookController.updateBook);
router.delete('/delete/:id',authMiddleware,isAdmin,bookController.deleteBook);


module.exports=router;