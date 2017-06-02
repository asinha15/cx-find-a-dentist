const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");
var Model = require("../models/model.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var logger = require("../utility/logger.js");
//var logger = new Logger();

module.exports = {
  getAbout: function(req, res) {
    logger.log("GET /ABOUT");
    var about = new MainPresenter(
      CONSTANTS.ABOUT_TEMPLATE,
      {},
      {
        "environment": CONSTANTS.ENVIRONMENT,
        "ssl_enabled": CONSTANTS.SSL_ENABLED,
        "ee-port": CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT,
        "ee-port-ssl": CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT_SSL,
        "search-service-host": CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST + ":" + CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(about.render());
  }
};
