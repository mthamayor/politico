/* eslint-disable no-console */
const Request = require('request');

describe('Test for all endponts', () => {
  // Run tests for the POST/api/v1/parties endpoint

  // When all parameters are set
  describe(' testing the endpoint POST/api/v1/parties', () => {
    // Container for the returned data
    const data = {};
    beforeAll((done) => {
      // Create a mock request
      const createRequest = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://localhost:5000/api/v1/parties',
        form: {
          name: 'PDP',
          hqAddress: 'Ganmo',
          logoUrl: 'the logo url',
        },
      };
      Request.post(createRequest, (error, response, body) => {
        if (error) {
          console.log(error);
        }
        data.statusCode = response.statusCode;
        // Parse the response body from string to JSON
        const parsedResponse = JSON.parse(body);
        // Extract the response body properties into data
        data.status = parsedResponse.status;
        data.parties = parsedResponse.parties;
        done();
      });
    });
    // Test the inputs

    it('status should be 201', () => {
      expect(data.statusCode).toBe(201);
      expect(data.parties[0].name).toBe('PDP');
      expect(data.parties[0].id).toBe(0);
    });
  });
});
