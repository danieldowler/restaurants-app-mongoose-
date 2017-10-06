const should = require('chai').should();
const isEqual = require('../isEqual');
const mongoose = require ('mongoose');
const mocha = require ('mocha')

describe('isEqual', function () {

    it('should return false if string is empty', function () {
        isEqual(1, 1)
    });
}
)