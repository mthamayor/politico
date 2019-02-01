import parties from '../models/parties';

class PartyController {
  static createParty(req, res) {
    const newParty = {};
    if (parties.length === 0) {
      newParty.id = 0;
    } else {
      newParty.id = parties[parties.length - 1].id + 1;
    }
    newParty.name = req.body.name;
    newParty.hqAddress = req.body.hqAddress;
    newParty.logoUrl = req.body.logoUrl;

    parties.push(newParty);


    return res.status(201).send({
      status: 201,
      parties,
    });
  }

  // This returns all the parties
  static getParties() {
    return parties;
  }
}

export default PartyController;
