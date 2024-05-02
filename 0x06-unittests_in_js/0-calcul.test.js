const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it(`testing if numbers round`, function() {
      const expected = calculateNumber(1, 2);
      assert.strictEqual(expected, 3);
    });
    it(`testing if numbers round`, function() {
      const expected = calculateNumber(1.4, 2.2);
      assert.strictEqual(expected, 3);
    });
    it(`testing if numbers round`, function() {
      const expected = calculateNumber(1.6, 2.7);
      assert.strictEqual(expected, 5);
    });
    it(`testing if numbers round`, function() {
      const expected = calculateNumber(0, 0);
      assert.strictEqual(expected, 0);
    });
    it(`testing if numbers round`, function() {
      const expected = calculateNumber(-1.6, -1.7);
      assert.strictEqual(expected, -4);
    });
    it(`testing if numbers round`, function() {
      const expected = calculateNumber(-1.4, -1.3);
	assert.strictEqual(expected, -2);
    });
});
