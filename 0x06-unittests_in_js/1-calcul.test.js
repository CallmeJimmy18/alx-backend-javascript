const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('Must round positive numbers properly', function() {
      const actualRes = calculateNumber('SUM', 3.4, 2.6);
      assert.strictEqual(actualRes, 6);
    });

    it('Must round negative numbers correctly', () => {
      const a = -3.4;
      const b = -2.6;

      const expected = -6;

      const actualRes = calculateNumber('SUM', a, b);
      assert.strictEqual(actualRes, expected);
    });

    it('Must round negative plus positive properly', () => {
      const a = -2.0;
      const b = 2.0;

      const expected = 0;

      const actualRes = calculateNumber('SUM', a, b);
      assert.strictEqual(actualRes, expected);
    });

    it('Must round a decimal and non decimal correctly', () => {
      const a = 0.0;
      const b = 0.0;

      const expected = 0;

      const actualRes = calculateNumber('SUM', a, b);
      assert.strictEqual(actualRes, expected);
    });

    it('Must round a negative and positve correctly (Alt)', () => {
      const a = 2.0;
      const b = -2.0;

      const expected = 0;
  
      const actualRes = calculateNumber('SUM', a, b);
      assert.strictEqual(actualRes, expected);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('Must work with equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 1.0), 0);
    });

    it('Must work with equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 2.3), 0);
    });

    it('Must work with equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('Must work with equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('Must work with negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('Must work with positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('Must work with positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('Must work with numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('Must work with numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('Must work with negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('Must work with equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('Must work with equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('Must work with equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('Must work with equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('Must work with 0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('Must work with positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('Must work with positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('Must work with positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('Must work with negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('Must work with negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('Must work with negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
