/* eslint-disable class-methods-use-this */

import { Parties } from './db';

class DBhelper {
  mainPage(req, res) {
    return res.status(200).send({
      status: 200,
    });
  }

  createParty(req, res) {
    if (!req.body.name) {
      return res.status(404).send({
        status: 404,
        error: 'name not specified',
      });
    }
    if (!req.body.hqAddress) {
      return res.status(404).send({
        status: 404,
        error: 'headquarters not specified',
      });
    }
    if (!req.body.logoUrl) {
      return res.status(404).send({
        status: 404,
        error: 'logo not specified',
      });
    }
    return res.status(201).send({
      status: 200,
      Parties,
    });
  }
}

const dbHelper = new DBhelper();
export default dbHelper;
