import express from 'express';
import { createNote, deleteNote, getUserNotes, makeFav, updateTextNote } from '../components/note.js';
import { createUser, getUser } from '../components/user.js';

const router = express.Router();

router.get('/note/:userId',getUserNotes);
router.get('/user/:userId',getUser);

router.post('/user/create',createUser)
router.post('/note/:userId/create',createNote);

router.put('/note/:noteId/fav',makeFav);
router.put('/note/:noteId/text',updateTextNote);

router.delete('/note/:noteId',deleteNote);

export default router;