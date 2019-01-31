import PartyController from '../controllers/PartyController';
import helpers from '../helpers/helpers';

const editPartyMiddleWare = (req, res, next) => {
  const { id } = req.params;
  if (!req.body.name) {
    return res.status(400).send({
      status: 400,
      error: 'new name is not specified',
    });
  }
  if (helpers.isNaN(helpers.toInteger(id))) {
    return res.status(400).send({
      status: 400,
      error: 'The ID provided is not a number',
    });
  }

  // Initialize the parties and check if the requested party already exists
  const parties = PartyController.getParties();
  let found = false;
  const num = helpers.toInteger(id);
  for (let i = 0; i < parties.length; i += 1) {
    if (parties[i].id === num) {
      found = true;
      break;
    }
  }
  if (found === false) {
    return res.status(404).send({
      status: 404,
      error: `party with the id: ${id} was not found`,
    });
  }

  return next();
};
export default editPartyMiddleWare;
