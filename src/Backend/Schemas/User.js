var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
  
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type:String,
    },
    email : {

        type: String,
        required: true,
        unique : true
    },
    password : {
        type: String,
        required: true,
    },
cart : {


    type: Array,
    default: [],
}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);