var restAPI = require("../index.js");
var request = require("request");
var base_url = "http://localhost:80/"
describe("API Testing", function() {
  describe("GET /", function() {

    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

  //   it("returns rearch page", function(done) {
  //    request.get(base_url + "location-search.html", function(error, response, body) {
  //      expect(body).toBe("location-search");
  //      done();
  //    });
  //  });

  });
});
