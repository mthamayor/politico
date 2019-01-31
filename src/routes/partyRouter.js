import express from 'express';
import PartyController from '../controllers/PartyController';
import createPartyMiddleWare from '../middlewares/createPartyMiddleware';

const partyRouter = express.Router();

partyRouter.post('/', createPartyMiddleWare, PartyController.createParty);

export default partyRouter;
