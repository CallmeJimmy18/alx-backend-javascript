const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const APP_URL = 'http://localhost:7865';
  it('responds with correct output', (done) => {
    request.get(`${APP_URL}/`, (_err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
