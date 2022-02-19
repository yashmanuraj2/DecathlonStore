const UserRouter = require("express").Router();
const User = require("../Schemas/User");
const bcrypt = require("bcrypt");
const Book = require("../Schemas/Books");

UserRouter.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });
  UserRouter.post("/register", async (req, res) => {
    try {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      //create new user
      const newUser = new User({
       
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        gender: req.body.gender,
        phone : req.body.phone,

              });
  
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  UserRouter.patch("/cart/:email", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      await user.updateOne({$push:{cart:req.body}});  
   
    } catch (err) {
      res.status(500).json(err)
    }
  });
  UserRouter.get("/cart/items/:email", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      res.status(200).json(user.cart);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  UserRouter.post("/books" , async(req,res)=>{
    try {
       
  
      //create new user
      const newBook = new Book({
       
        id: req.body.id,
        name: req.body.name,
        price:req.body.price,
        

              });
       //save user and respond
      const book = await newBook.save();
        res.status(200).json(book)
     
     
            }
    catch (err) {
      res.status(500).json(err)
    }
  });
    
   
  UserRouter.get("/books/:name", async (req, res) => {
    try {
      const book = await Book.findOne({ book: req.params.name });
      res.status(200).json(book.name);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  UserRouter.patch("/cart/remove/:email", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      await user.updateOne({$pull:{cart:req.body}});  
   
    } catch (err) {
      res.status(500).json(err)
    }
  });

  module.exports = UserRouter;