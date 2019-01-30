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
        data.parties = parsedResponse.Parties;
        done();
      });
    });
    // Test the inputs

    it('status should be 201', () => {
      expect(data.statusCode).toBe(201);
    });

    it('the number of political parties available should be 1', () => {
      expect(data.parties.length).toBe(1);
    });
  });

  // When name is not set
  describe(' testing when the name is not set', () => {
    // Container for the returned data
    const data = {};
    beforeAll((done) => {
      // Create a mock request
      const createRequest = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://localhost:5000/api/v1/parties',
        form: {
          name: '',
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
        data.error = parsedResponse.error;
        done();
      });
    });
    // Test the inputs

    it('statusCode should be 400', () => {
      expect(data.statusCode).toBe(400);
    });
    it('error message should be "name not specified"', () => {
      expect(data.error).toBe('name not specified');
    });
  });
  // When party Headquarters is not set
  describe(' testing when hqAddress is not set', () => {
    // Container for the returned data
    const data = {};
    beforeAll((done) => {
      // Create a mock request
      const createRequest = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://localhost:5000/api/v1/parties',
        form: {
          name: 'Tolu',
          hqAddress: '',
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
        data.error = parsedResponse.error;
        done();
      });
    });
    // Test the request

    it('statusCode should be 400', () => {
      expect(data.statusCode).toBe(400);
    });
    it('error message should be "headquarters not specified"', () => {
      expect(data.error).toBe('headquarters not specified');
    });
  });
  // When name is not set
  describe(' testing the endpoint POST/api/v1/parties', () => {
    // Container for the returned data
    const data = {};
    beforeAll((done) => {
      // Create a mock request
      const createRequest = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://localhost:5000/api/v1/parties',
        form: {
          name: 'Tolu',
          hqAddress: 'Ganmo',
          logoUrl: '',
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
        data.error = parsedResponse.error;
        done();
      });
    });
    // Test the inputs

    it('statusCode should be 400', () => {
      expect(data.statusCode).toBe(400);
    });
    it('error message should be "logo not specified"', () => {
      expect(data.error).toBe('logo not specified');
    });
  });
});
