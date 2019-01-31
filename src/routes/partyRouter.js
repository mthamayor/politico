import express from 'express';
import PartyController from '../controllers/PartyController';
import editPartyMiddleWare from '../middlewares/editPartyMiddleware';

const partyRouter = express.Router();

partyRouter.patch('/:id', editPartyMiddleWare, PartyController.editPoliticalParty);

export default partyRouter;
