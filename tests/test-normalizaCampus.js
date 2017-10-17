const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const normalizaCampus = require('../lib/normalizaCampus');

describe('NormalizaCampus', function() {
    it('NormalizaCampus(Ultimas Notícias) deve retornar Reitoria se não possuir nenhum campus', function() {
        const campus = normalizaCampus("Ultimas Notícias");
        expect(campus).to.equal('Reitoria');
    });
    it('NormalizaCampus(Destaque) deve retornar Reitoria se não possuir nenhum campus', function() {
        const campus = normalizaCampus("Destaque");
        expect(campus).to.equal('Reitoria');
    });
    it('NormalizaCampus(Últimas notícias - Morrinhos) deve retornar Reitoria se não possuir nenhum campus', function() {
        const campus = normalizaCampus("Últimas notícias - Morrinhos");
        expect(campus).to.equal('Morrinhos');
    });
    it('NormalizaCampus(Destaque - Morrinhos) deve retornar Reitoria se não possuir nenhum campus', function() {
        const campus = normalizaCampus("Destaque - Morrinhos");
        expect(campus).to.equal('Morrinhos');
    });

});