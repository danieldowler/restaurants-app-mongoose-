const should = require('chai').should();
const isEqual = require('../isEqual');

describe('isEqual', function () {

    it('should return false if string is empty', function () {
        isEqual(1, 1)
    });
}
)