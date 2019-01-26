/* eslint-disable no-unused-expressions */


const Request = require('request');

describe('Server test', () => {
  describe('GET /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:5000/api/v1/parties', (error, response, body) => {
        data.status = response.statusCode;
        done();
      });
    });

    it('status should be 200', () => {
      expect(data.status).toBe(200);
    });
  });
});
