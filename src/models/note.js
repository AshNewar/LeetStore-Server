import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  text: {
    type: String,
    required: true
  },
  userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
