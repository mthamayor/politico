import express from 'express';
import dbHelper from '../db/dbHelper';


const router = express.Router();

router.post('/api/v1/parties', dbHelper.createParty);

export default router;
