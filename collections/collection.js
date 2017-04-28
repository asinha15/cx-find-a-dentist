// Abstract Collection
var http = require("http");

/**
 * A collection class for use of holding and retrieving models
 * @constructor Collection
 * @example var collection = new Collection();
 */
var Collection = function() {
};

/**
 * @property host {string} host for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.host = "";
/**
 * @property path {string} path for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.path = "";
/**
 * @property port {number} port for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.port = 0;
/**
 * @property attributes {object} The data of the Collection
 * @memberof Collection
 */
Collection.prototype.attributes = {};
/**
 * @property query {object} The query params for use in REST calls
 * @memberof Collection
 */
Collection.prototype.query = {};
/**
 * @method getURI returns the formatted URI from local properties
 * @returns {string} URI of the model for use in REST calls
 * @memberof Collection
 */
Collection.prototype.getURI = function() {
  return this.host + ":" + String(this.port) + this.path;
};
var formatQuery = function(query) {
  var formatQuery = "?", i = 0, keys = Object.keys(query), l = keys.length;
  for (i = 0; i < l; i++) {
    formatQuery = formatQuery + keys[i] + "=" + query[keys[i]] + "&";
  }
  return formatQuery.slice(0, -1);
};
/**
 * @method fetch Fetches data from a remove URI and populates this collection
 * @param options {object} Options to pass to the remove call
 * @param success {function} Success ballback
 * @param error {function} Error callback
 * @memberof Collection
 */
Collection.prototype.fetch = function(options, success, error) {
  if (!options) {
    options = {};
  }
  if (!options.host) {
    options.host = this.host;
  }
  if (!options.port) {
    options.port = this.port;
  }
  if (!options.path) {
    options.path = this.path;
  }
  if (!options.query) {
    options.query = this.query;
  }


console.log("Query " + JSON.stringify(options.query));
  if (!success) {
    success = function(status, data) {
      console.log("Fetched Data! " + status);
    }
  }
  if (!error) {
    error = function(e) {
      console.log("Failed to fetched Data! " + e);
    }
  }

  const uri = options.host + ":" + String(options.port) + options.path + formatQuery(options.query);
  console.log("uri " + uri);
  var req = http.get(uri, function(res) {
    console.log("STATUS: " + res.statusCode);
    // Buffer the body entirely for processing as a whole.
    var buffer = "";
    res.on("data", function(chunk) {
      buffer += chunk;
    }).on("end", function() {
      try {
        var data = JSON.parse(buffer);
        this.attributes = data;

        //console.log("data " + JSON.stringify(data));
        success(res.statusCode, data);
      } catch(e) {
        error(e);
      }
    });
  });

  req.on("error", function(e) {
    error(e);
  });
};

/**
 * @method toString Returns a string representation of the data
 * @returns {string} string representation of the data
 * @memberof Collection
 */
Collection.prototype.toString = function() {
  return JSON.stringify(this.attributes);
};

/**
 * @method index Returns a model at a specified index
 * @param i {number} The index of the model
 * @returns {any} a model at a specified index
 * @memberof Collection
 */
Collection.prototype.index = function(i) {
  return (i) ? this.attributes[i] : null;
};

/**
 * @method toJSON Returns a JSON representation of the data
 * @returns {object} JSON representation of the data
 * @memberof Collection
 */
Collection.prototype.toJSON = function() {
  return this.attributes;
};

/**
 * @method reset resets the collection data
 * @param data {array} The data to set(optional)
 * @memberof Collection
 */
Collection.prototype.reset = function(data) {
  if (data) {
    this.attributes = data;
  } else {
    this.attributes = {};
  }
};

module.exports = Collection;
