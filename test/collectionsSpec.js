var Collection = require("../collections/collection.js");

describe("Given Locations Collection", function() {
	it("is defined", function() {
		expect(Collection).toBeDefined();
	});

  it("can create an object", function() {
    var collection = new Collection();
		expect(collection).toBeDefined();
	});

	it("has all the properties of the object", function() {
    var collection = new Collection();
		var actualProperties = Object.keys(collection).sort();
		var expectedProperties = [
		  'host',
		  'path',
			'port',
		  'attributes',
			'query',
		  'getURI',
			'fetch',
		  'toString',
			'index',
		  'toJSON',
			'set'
		].sort();
		expect(actualProperties).toEqual(expectedProperties);
	});

	it("functions are defined", function() {
		var collection = new Collection();
		expect(collection.fetch).toBeDefined();
		expect(collection.toString).toBeDefined();
		expect(collection.index).toBeDefined();
		expect(collection.toJSON).toBeDefined();
		expect(collection.set).toBeDefined();
	});

	it("matches typeof the object properties", function() {
		var collection = new Collection();
		expect(typeof collection.host).toEqual('string');
		expect(typeof collection.port).toEqual('number');
		expect(typeof collection.getURI).toEqual('function');
		expect(typeof collection.attributes).toEqual('object');
	});

	it("matches objects with the expect key/value pairs", function() {
		var collection = new Collection();
    expect(collection).toEqual(jasmine.objectContaining({
      attributes: {}
    }));
    expect(collection).toEqual(jasmine.objectContaining({
      query: {}
    }));
  });
});

describe("As a collection", function() {
  var collection = null;

  beforeEach(function() {
    collection = new Collection();
  });

	afterEach(function() {
    collection = null;
  });

	it("can stringify data", function() {
		var result = collection.toString();
    expect(JSON.stringify(collection.attributes)).toEqual(result);
  });

  it("can return JSON data", function() {
		var result = collection.toJSON();
    expect(collection.attributes).toEqual(result);
  });

	it("can retrieve data through index", function() {
		var result = collection.index(1);
    expect(collection.attributes[1]).toEqual(result);
  });

});

describe("As a collection", function() {
  var collection = null;
  var result = ["I am a test", 123];

  beforeEach(function() {
    collection = new Collection();
  });

	afterEach(function() {
    collection = null;
  });

  it("can set data", function() {
		collection.set(["I am a test", 123]);
    expect(collection.attributes).toEqual(result);
  });

});
