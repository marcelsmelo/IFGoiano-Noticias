const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai

describe('GetPageFromSite', function() {
    it('GetPageFromSite(5045) não deve retornar uma página do site', function() {
        const page = require('../lib/getPageFromSite')(5045);
        expect(page).to.be.a('null');
    });

    it('GetPageFromSite(5046) deve retornar uma página do site', function() {
        const page = require('../lib/getPageFromSite')(5046);
        expect(page).to.be.a('string');
    });


});