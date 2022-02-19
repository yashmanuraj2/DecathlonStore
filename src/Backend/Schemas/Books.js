var mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
  
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type:String,
    },
    price : {

        type: String,
        
    },
  

  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", BookSchema);