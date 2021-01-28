import mongoose from "mongoose";

const tiktokSchema=mongoose.Schema({
          url:String,
          channel:String,
          song:String,
          likes:Number,
          messages:Number,
          description:String,
          shares:Number,
})


// Collection inside the database
// ES6 export
export default mongoose.model("tiktokVideos",tiktokSchema);


// Before ES6
// module.exports=mongoose.model('tiktokvideos',tiktokSchema);
