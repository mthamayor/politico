import express from 'express';
import dbHelper from '../db/dbHelper';

// Initialize the router
const router = express.Router();

// Create Party API
router.post('/api/v1/parties', dbHelper.createParty);

export default router;
