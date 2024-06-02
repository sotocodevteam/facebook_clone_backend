import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostSchema = new Schema({
    profileFName: {
        type: String,
        required: true
      },
      profileSName: {
        type: String,
        required: true
      },
      profilePic: {
        type: String,
        required: false
      },
      profileFrontPic: {
        type: String,
        required: false
      },
      PostPhoto:{
        type: String,
        require: false
      },
      PostText:{
        type: String,
        require: false
      },
      PostDate:{
        type: Date,
        require: true,
        default: []
      },
})

module.exports = model('PostSchema',PostSchema)