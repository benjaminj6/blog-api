import mongoose, { Schema } from 'mongoose'
mongoose.Promise = global.Promise

const PostSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  html: {
    required: true,
    type: String
  },
  md: {
    required: true,
    type: String
  },
  tags: [{ type: Schema.types.ObjectId, ref: 'tags' }],
  date: {
    type: Date,
    default: Date.now()
  }
})

const Post = mongoose.model('Post', PostSchema)
export default Post
