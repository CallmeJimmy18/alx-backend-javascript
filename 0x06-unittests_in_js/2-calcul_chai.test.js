const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('Must round positive numbers properly', function() {
      const actualRes = calculateNumber('SUM', 3.4, 2.6);
      expect(actualRes).to.equal(6);
    });

    it('Must round negative numbers correctly', () => {
      const a = -3.4;
      const b = -2.6;

      const expected = -6;

      const actualRes = calculateNumber('SUM', a, b);
      expect(actualRes).to.equal(expected);
    });

    it('Must round negative plus positive properly', () => {
      const a = -2.0;
      const b = 2.0;

      const expected = 0;

      const actualRes = calculateNumber('SUM', a, b);
      expect(actualRes).to.equal(expected);
    });

    it('Must round a decimal and non decimal correctly', () => {
      const a = 0.0;
      const b = 0.0;

      const expected = 0;

      const actualRes = calculateNumber('SUM', a, b);
      expect(actualRes).to.equal(expected);
    });

    it('Must round a negative and positve correctly (Alt)', () => {
      const a = 2.0;
      const b = -2.0;

      const expected = 0;
  
      const actualRes = calculateNumber('SUM', a, b);
      expect(actualRes).to.equal(expected);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('Must work with equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 1.0)).to.equal(0);
    });

    it('Must work with equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 2.3)).to.equal(0);
    });

    it('Must work with equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('Must work with equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('Must work with negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('Must work with positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('Must work with positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('Must work with numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('Must work with numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('Must work with negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('Must work with equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('Must work with equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('Must work with equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('Must work with equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('Must work with 0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('Must work with positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('Must work with positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('Must work with positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('Must work with negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('Must work with negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('Must work with negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
