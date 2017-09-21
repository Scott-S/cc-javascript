var request = require('supertest')('http://localhost:3000');
var expect  = require('chai').expect;
var server  = require('../server.js');

describe('server', function () {
    //start server before running tests
    before(function () {
        server.listen(3000);
    });

    //kill server after running tests
    after(function () {
        server.close();
    });
});

describe('API Endpoint', function () {

    it('returns 201', function () {
        request.get('/code/challenge')
            .expect(201)
    });

    it('returns Content-Type: application/json; charset=utf-8', function () {
        request.get('/code/challenge')
            .expect('Content-Type', /application\/json; charset=utf-8/);
    });

    it('returns CORS header', function () {
        request.get('/code/challenge')
            .expect('Access-Control-Allow-Origin', /.+/);
    });

    it('should have JSON properties: email, name, website, github_repo_link', function (done) {
        request.get('/code/challenge')
            .end(function (err, res) {
                if(err){
                    return done(err);
                }
                var body = res.body;

                expect(body).to.have.property('email');
                expect(body.email).to.equal('scott.scialabba@gmail.com');

                expect(body).to.have.property('name');

                expect(body.name).to.have.property('first');
                expect(body.name.first).to.equal('Scott');

                expect(body.name).to.have.property('last');
                expect(body.name.last).to.equal('Scialabba');

                expect(body).to.have.property('website');
                expect(body.website).to.equal('http://scott.scialabba.com');

                expect(body).to.have.property('github_repo_link');
                expect(body.github_repo_link).to.equal('https://github.com/Scott-S/cc-javascript.git');
                done();
            });
    });
});
