// abstract model
var http = require("http");

/**
 *  A model class for use of holding and retrieving data
 * @constructor Model
 * @param name {string} Name of the Model
 * @param id {string} ID of the model
 * @example var model = new Model("Bubba", "myModel");
 */
module.exports = Model = function(name, id) {
    return {
      /**
       * @property id {string} ID of the model
       * @memberof Model
       */
      "id": id,
      /**
       * @property name {string} Name of the model
       * @memberof Model
       */
      "name": name,
      /**
       * @property host {string} host for use in the model's fetch method
       * @memberof Model
       */
      "host": "",
      /**
       * @property path {string} path for use in the model's fetch method
       * @memberof Model
       */
      "path": "",
      /**
       * @property port {number} port for use in the model's fetch method
       * @memberof Model
       */
      "port": 0,
      /**
       * @property attributes {object} The data of the model
       * @memberof Model
       */
      "attributes": {},
      /**
       * @method getURI returns the formatted URI from local properties
       * @returns {string} URI of the model for use in REST calls
       * @memberof Model
       */
      "getURI": function() {
        return this.host + ":" + String(this.port) + this.path;
      },
      /**
       * @method fetch Fetches data from a remove URI and populates this model
       * @param options {object} Options to pass to the remove call
       * @param success {function} Success ballback
       * @param error {function} Error callback
       * @memberof Model
       */
      "fetch": function(options, success, error) {
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

        var uri = options.host + ":" + String(options.port) + options.path;
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

              console.log("data " + JSON.stringify(data));
              success(res.statusCode, data);
            } catch(e) {
              error(e);
            }
          });
        });

        req.on("error", function(e) {
          error(e);
        });
      },
      /**
       * @method toString Returns a string representation of the data
       * @returns {string} string representation of the data
       * @memberof Model
       */
      "toString": function() {
        return JSON.stringify(this.attributes);
      },
      /**
       * @method toJSON Returns a JSON representation of the data
       * @returns {object} JSON representation of the data
       * @memberof Model
       */
       "toJSON": function() {
         return this.attributes;
       },
       /**
        * @method get Returns a value for a key in the object
        * @param key {any} The key to return a property for
        * @returns {any} a value for a key in the object
        * @memberof Model
        */
      "get": function(key) {
        return (key) ? this.attributes[key] : null;
      },
      /**
       * @method set Sets a value for a key in the object
       * @param key {any} The key to return a property for
       * @param value {any} a value for a key in the object
       * @memberof Model
       */
      "set": function(key, value) {
        if (key && value) {
          this.attributes[key] = value;
        }
      }
  }
}