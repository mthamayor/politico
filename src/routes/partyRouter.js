import express from 'express';
import PartyController from '../controllers/PartyController';
import createPartyMiddleWare from '../middlewares/createPartyMiddleware';
import editPartyMiddleWare from '../middlewares/editPartyMiddleware';

const partyRouter = express.Router();

partyRouter.post('/', createPartyMiddleWare, PartyController.createParty);
partyRouter.patch('/:id', editPartyMiddleWare, PartyController.editPoliticalParty);

export default partyRouter;
