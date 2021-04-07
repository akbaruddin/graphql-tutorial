import pkg from 'mongoose';
const { Schema, Types, model } = pkg;

const authorSchema = new Schema({
  id: { type: String, default: Types.ObjectId() },
  name: String,
  age: Number,
  books: [String]
});

export default model("author", authorSchema);