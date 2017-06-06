const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");
var Model = require("../models/model.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");

module.exports = {
  errorInvalidZip: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_INVALID_ZIP);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.invalidAddress,
      {},
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorNoResults: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.noResults,
      {},
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorTimeOut: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.serverTimeout,
      {},
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorDown: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_DOWN);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.servicesDown,
      {},
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  }
};
