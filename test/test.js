var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
	it('give me a successful build!', function(done) {
		request(app).get('/').expect('hello jenkins again', done);
	});
});
