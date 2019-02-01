import parties from '../models/parties';
import helpers from '../helpers/helpers';

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

  static editPoliticalParty(req, res) {
    const id = helpers.toInteger(req.params.id);
    const { name } = req.body;

    for (let i = 0; i < parties.length; i += 1) {
      if (parties[i].id === id) {
        parties[i].name = name;
        break;
      }
    }
    return res.status(200).send({
      status: 200,
      data: [{ id, name }],
    });
  }
}

export default PartyController;
