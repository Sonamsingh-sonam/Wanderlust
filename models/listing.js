const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string } = require("joi");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  
   

//   image: {
//   filename: {
//     type: String,
//     default: "default-filename"
//   },
//   url: {
//     type: String,
//     default: "https://tse2.mm.bing.net/th?id=OIP.Ekodt74sE9k22Kcb1D_9XwHaFj&pid=Api&P=0&h=180",
//     set: (v) =>
//       v === "" ? "https://tse2.mm.bing.net/th?id=OIP.Ekodt74sE9k22Kcb1D_9XwHaFj&pid=Api&P=0&h=180" : v
//   }
// },


image:{
  url:String,
  filename:String,

},



  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    },
  ],

owner:{
  type:Schema.Types.ObjectId,
  ref:"User",

},
});





listingSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({ _id: { $in: doc.reviews } });
    console.log("Deleted associated reviews");
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
