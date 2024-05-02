const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    if(!consoleLogSpy) {
      consoleLogSpy = sinon.spy(console, 'log');
    }
  });
  
  afterEach(() => {
    consoleLogSpy.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) is logging the string The total is: 120 to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) is logging the string The total is: 20 to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
