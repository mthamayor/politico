/* eslint-disable class-methods-use-this */

import { Parties } from './db';

class DBhelper {
  createParty(req, res) {
    if (!req.body.name) {
      return res.status(401).send({
        status: 401,
        error: 'name not specified',
      });
    }
    if (!req.body.hqAddress) {
      return res.status(404).send({
        status: 401,
        error: 'headquarters not specified',
      });
    }
    if (!req.body.logoUrl) {
      return res.status(401).send({
        status: 401,
        error: 'logo not specified',
      });
    }

    // Initialize the mock parties
    const parties = Parties;
    for (let i = 0; i < parties.length; i += 1) {
      if (parties[i].name === req.body.name) {
        return res.status(401).send({
          status: 401,
          error: 'party already exists',
        });
      }
    }

    const requestParty = {};
    if (parties.length === 0) {
      requestParty.id = 0;
    } else {
      requestParty.id = parties[parties.length - 1].id + 1;
    }
    requestParty.name = req.body.name;
    requestParty.hqAddress = req.body.hqAddress;
    requestParty.logoUrl = req.body.logoUrl;

    parties.push(requestParty);


    return res.status(201).send({
      status: 201,
      Parties,
    });
  }
}

const dbHelper = new DBhelper();
export default dbHelper;
