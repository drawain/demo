var expect = require("chai").expect;
var lengthOf = require("./lengthOf");

describe('#lengthOf', function() {

    it('should returns the length if the given string', function() {
        var result = lengthOf('asd');
        expect(result).to.eql(3);
    });

});