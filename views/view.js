/* Abstract View */

const VIEW_MODEL_COLLECTION_KEY = "{{collection}}";

/**
 *  A view class for managing presentation and managing view data
 * @constructor View
 * @param n {string} Name of the view/template
 * @param vm {Object} A property-based ViewModel
 * @param map {object} Property Map used to map data to the ViewModel
 * @example var model = new Model("Bubba", "myModel");
 */
module.exports = View = function(n, vm, map) {
  var name = n;

  this.collection = null;
  this.model = null;
  /**
   * @property viewModel {Object} A property-based ViewModel
   * @memberof View
   */
  this.viewModel = vm;
  /**
   * @property propertyMap {Object} Property Map used to map data to the ViewModel
   * @memberof View
   */
  this.propertyMap = map;
  /**
   * @method getName returns the name of the view/template
   * @returns {string} name of the view/template
   * @memberof View
   */
  this.getName = function() {
    return name;
  };
  /**
   * @method enrichData Enriches the ViewModel with data passed in
   * @param data {array} Collection data to enrich the ViewModel
   * @returns {Object} The enriched ViewModel for the view/template
   * @memberof View
   */
  this.enrichData = function(data) {
    if (data && this.viewModel) {
      // TODO: merge the view model here
      var fullData = this.viewModel, i = 0, k = Object.keys(this.propertyMap), l = k.length, keyName = "";

      for (i = 0; i < l; i++) {
        keyName = k[i];

        if (this.propertyMap[keyName] === VIEW_MODEL_COLLECTION_KEY) {
          fullData[keyName] = data;
        } else {
          fullData[keyName] = this.propertyMap[keyName];
        }
      }

      return fullData;
    }
    return data;
  };
};