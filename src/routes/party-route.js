import express from 'express';
import Party from '../controllers/party-controller';
import createPartyMiddleWare from '../middlewares/create-party-middleware';

const partyRouter = express.Router();

partyRouter.post('/', createPartyMiddleWare, Party.createParty);

export default partyRouter;
