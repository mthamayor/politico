import { Parties } from '../models/parties';

class Party {
  static createParty(req, res) {
    const newParty = {};
    if (Parties.length === 0) {
      newParty.id = 0;
    } else {
      newParty.id = Parties[Parties.length - 1].id + 1;
    }
    newParty.name = req.body.name;
    newParty.hqAddress = req.body.hqAddress;
    newParty.logoUrl = req.body.logoUrl;

    Parties.push(newParty);


    return res.status(201).send({
      status: 201,
      Parties,
    });
  }

  static getParties() {
    return Parties;
  }
}

export default Party;
