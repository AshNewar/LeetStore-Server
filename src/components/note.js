import Note from '../models/note.js'; // Assuming your Note model is defined in a separate file

export const createNote = async (req,res) => {
  const {title,text} = req.body;
  const {userId} = req.params;
  try {
    const newNote = new Note({
      title:title,
      text: text,
      userId:userId,
    });
    await newNote.save();
    res.status(201).json({message:'Note Created'});
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(400).json({message:'Something Went Wrong'});
  }
};

export const getUserNotes=async(req,res)=>{
    const {userId} = req.params;
    try {
        const notes = await Note.find({userId});
        return res.status(200).json({ notes });
    } catch (error) {
        console.error("Error fetching user notes:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const makeFav=async(req,res)=>{
    try{ 
        const { noteId } = req.params;
        const note = await Note.findById(noteId);
        note.isFavorite =true;
        await note.save();
        res.status(200).json({message:'Note Updated'});
    } catch (error)
    {
        console.error("Error creating note:", error);
        res.status(400).json({message:'Something Went Wrong'});
    }
}

export const updateTextNote=async (req, res) => {
    const { noteId } = req.params;
    const newTextArray = req.body.text; 
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(noteId, { text: newTextArray }, { new: true });
  
      if (!updatedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      return res.status(200).json({ message: 'Note Updated successfully', updatedNote });
    } 
    catch (error) {
      console.error("Error updating text array:", error);
      return res.status(500).json({ error: 'Something Went Wrong' });
    }
}

export const deleteNote = async (req, res) => {
    const noteId = req.params.noteId;
  
    try {
      const deletedNote = await Note.findByIdAndDelete(noteId);
  
      if (!deletedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      return res.status(200).json({ message: 'Note deleted successfully', deletedNote });
    } catch (error) {
      console.error("Error deleting note:", error);
      return res.status(500).json({ error: 'Something Went Wrong' });
    }
}

