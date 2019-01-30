import express from 'express';
import Party from '../controllers/PartyController';
import createPartyMiddleWare from '../middlewares/createPartyMiddleware';

const partyRouter = express.Router();

partyRouter.post('/', createPartyMiddleWare, Party.createParty);

export default partyRouter;
