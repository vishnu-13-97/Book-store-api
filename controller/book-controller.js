const Book = require('../model/bookmodel');
const Image = require("../model/imagemodel");
const { cloudinary } = require('../config/cloudinary');


const getAllBooks = async (req,res)=>{

    try {
        const books = await Book.find();
        res.status(200).json({
            status:true,
            message:"Users fetched Succesfully",
             data: books  
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"Server Error"
        })
    }
}



const getSinglebookById = async (req,res)=>{
  const id = req.params.id;
  try {
    const singlebook = await Book.findById(id);
    if(!singlebook){
        return res.status(404).json({
            status:false,
            message:"No book with this id"
        })
}

res.status(200).json({
    status:true,
    message:`user Details of ${id}`,
    data:singlebook
})

  } catch (error) {
      res.status(500).json({
            status:false,
            message:"Server Error"
        })
  }
}

const addNewBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
      return res.status(400).json({
        status: false,
        message: "All fields (title, author, year) and image file are required",
      });
    }

 
    const imageUpload = await Image.create({
      url: req.file.path,
      public_id: req.file.filename,
    });

    const newBook = await Book.create({
      title,
      author,
      year,
      imageId: imageUpload._id,
      createdBy: req.user.id,
    });

    res.status(201).json({
      status: true,
      message: "Book added successfully",
      data: newBook,
    });

  } catch (error) {
    console.error("Add Book Error:", error.message);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};





const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Invalid Book ID",
      });
    }

    if (req.file) {

      if (book.imageId) {
        const oldImage = await Image.findById(book.imageId);
        if (oldImage) {
          await cloudinary.uploader.destroy(oldImage.public_id); 
          await Image.findByIdAndDelete(oldImage._id); 
        }
      }

     
      const newImage = await Image.create({
        url: req.file.path,
        public_id: req.file.filename,
      });

      updateData.imageId = newImage._id;
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json({
      status: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.error("Update Book Error:", error.message);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Book not found",
      });
    }

    
    if (book.imageId) {
      const image = await Image.findById(book.imageId);
      if (image) {
      
        await cloudinary.uploader.destroy(image.public_id);
     
        await Image.findByIdAndDelete(image._id);
      }
    }


    await Book.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "Book and associated image deleted successfully",
    });

  } catch (error) {
    console.error("Delete Book Error:", error.message);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports={
    getAllBooks,
    getSinglebookById,
    addNewBook,
    updateBook,
    deleteBook
}