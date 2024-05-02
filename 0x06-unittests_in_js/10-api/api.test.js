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

  it('GET /cart/:id responds correct with valid id', (done) => {
    request.get(`${APP_URL}/cart/46`, (_err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 46');
      done()
    });
  });

  it('GET /cart/:id responds returns 404 error negative number values in :id', (done) => {
    request.get(`${APP_URL}/cart/-46`, (_err, resp, _body) => {
      expect(resp.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id responds returns 404 for an non numeric value in id', (done) => {
    request.get(`${APP_URL}/cart/abdd6-gg34-99cc`, (_err, resp, _body) => {
      expect(resp.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login responds with valid result', (done) => {
    request.post(`${APP_URL}/login`, {json: {userName: 'Daisy'}}, (_err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Daisy');
      done();
    });
  });

  it('GET /available_payments responds valid result', (done) => {
    request.get(`${APP_URL}/available_payments`, (_err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
