import express from 'express';
import PartyController from '../controllers/PartyController';
import createPartyMiddleware from '../middlewares/createPartyMiddleware';

const partyRouter = express.Router();

partyRouter.post('/', createPartyMiddleware, PartyController.createParty);

export default partyRouter;
