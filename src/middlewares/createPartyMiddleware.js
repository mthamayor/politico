import Party from '../controllers/PartyController';

const createPartyMiddleware = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send({
      status: 400,
      error: 'name not specified',
    });
  }
  if (!req.body.hqAddress) {
    return res.status(400).send({
      status: 400,
      error: 'headquarters not specified',
    });
  }
  if (!req.body.logoUrl) {
    return res.status(400).send({
      status: 400,
      error: 'logo not specified',
    });
  }

  // Initialize the parties and check if the requested party already exists
  const parties = Party.getParties();
  for (let i = 0; i < parties.length; i += 1) {
    if (parties[i].name === req.body.name) {
      return res.status(409).send({
        status: 409,
        error: 'party already exists',
      });
    }
  }

  return next();
};
export default createPartyMiddleware;
