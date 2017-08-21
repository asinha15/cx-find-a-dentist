const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");
var Model = require("../models/model.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");
var NetworkPersistLogic = require("../utility/networkPersistLogic.js");
var SpecialtyPersistLogic = require("../utility/specialtyPersistLogic.js");
var LanguagePersistLogic = require("../utility/languagePersistLogic.js");
var LocationPersistLogic = require("../utility/locationPersistLogic.js");
var LatlongPersistLogic = require("../utility/latlongPersistLogic.js");
var DistancePersistLogic = require("../utility/distancePersistLogic.js");
var FreeTextInputPersistLogic = require("../utility/freeTextInputPersistLogic.js");

var PaginationControl = require("../components/paginationControl.js");
var NodeGeocoder = require('node-geocoder');

module.exports = {
  getDirectorySearch: function(req, res) {
    Logger.log("GET " + CONSTANTS.DIRECTORY_SEARCH_PAGE);
    if (req.query && req.query.lat && req.query.long) {
      Logger.log("query " + JSON.stringify(req.query));

      if (String(Number(req.query.lat)) !== "NaN" && String(Number(req.query.long)) !== "NaN") {
        getListsResults(req.query, req, res);
      } else {
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      }

    } else {
      Logger.log("Here is empty search page");
      const query = req.query;

      var googleAPI = "";
      if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      }

      var directorySearchPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.SEARCH,
        ViewModel.pages_directorySearch,
        {
          "title": "Provider Directory Search",
          "stylesheets": [
            { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
            { "stylesheet": "//cloud.typography.com/6549574/670548/css/fonts.css" }
          ],
          "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
          "scripts": [
            {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "ga-analytics.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"}
          ],
          "banner": {
            text: "Return to the old dentist search?",
            button: {
              anchorLink: {
                href: CONSTANTS[CONSTANTS.ENVIRONMENT].OLD_DIRECTORY_HOST + "/find-a-dentist?" + ((query.location) ? "d_loc=" + query.location : "") + ((query.network) ? "&d_net=" + Utils.transformNetworkLegacy(query.network) : "") + ((query.free_text) ? "&d_kw=" + query.free_text : "") + "&d_d=" + ((query.distance) ? query.distance : "15") + "&d_prg=delta&d_co=delta",
                text: "Go back",
                class:"button btn--primary inverted banner__button"
              }
            },
            close: {
              icon: {
                class: "icon-exit-inverted",
                ariaLabel: "close"
              }
            }
          }
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );
      res.status(200).send(directorySearchPresenter.render());
    }
  },
  postDirectorySearch: function(req, res) {
    Logger.log("POST " + CONSTANTS.DIRECTORY_SEARCH_PAGE);

    var geocoder = null;
    if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API_KEY) {
      var options = {
        provider: "google",
        httpAdapter: "https",
        apiKey: CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.SERVER.APIKEY,
        clientId: CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.SERVER.CLIENTID,
        formatter: null
      };
      geocoder = NodeGeocoder(options);
    } else {
      geocoder = NodeGeocoder();
    }

    var query = {};
    if (req.body) {
      query = req.body;
    }
    if (!req.body.location && !req.body.lat && !req.body.long) {
      res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      return;
    }

    if (req.body.keyword) {
      query.free_text = req.body.keyword;
      query.keyword = null;
    }
    if (req.body.location) {
	    Logger.log("We will server-side geolocate");
      try {
        geocoder.geocode(req.body.location, function(err, response) {
          if (err) {
		        Logger.log("We got an error from geolocation " + err );
            res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
            return;
          } else if (!response || (Array.isArray(response) && response.length === 0)) {
		        Logger.log("no response from geolocator");
            res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
            return;
          } else {
            query.location = response[0].formattedAddress;
            query.lat = Number(response[0].latitude);
            query.long = Number(response[0].longitude);
            if (query && query.lat && query.long) {
		          Logger.log("Redirectory to search page - " + Utils.formatQuery(query));
              res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
              return;
            }
          }
        });
      } catch (e) {
        Logger.log("geo error", e);
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      }
    } else {
      query.location = req.body.location;
      query.lat = Number(req.body.lat);
      query.long = Number(req.body.long);
      if (query && query.lat && query.long) {
	      Logger.log("redirectory to search - " + Utils.formatQuery(query));
        res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
      }
    }
  },
};

var getListsResults = function(query, req, res) {
  var providers = new SolrCollection("providers");
  providers.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
  providers.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
  providers.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH;
  providers.query = query;

  var googleAPI = "";
  if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
    googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
  } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
    googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
  } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
    googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
  }

  var providersPresenter = new MainPresenter(
    CONSTANTS.TEMPLATES.SEARCH_RESULTS,
    ViewModel.pages_directorySearchResults,
    {
      "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY,
      "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
      "facilityDetailsPage": CONSTANTS.FACILITY_DETAILS_PAGE,
      "officeDetailsPage": CONSTANTS.OFFICE_DETAILS_PAGE,
      "facilityId": query.facilityId,
      "searchQueryLocation": query.location,
      "searchQueryLat": query.lat,
      "searchQueryLong": query.long,
      "searchQueryDistance": query.distance,
      "searchQuerySpecialty": Utils.formatQueryParam(query.specialty),
      "searchQueryLanguage": query.language,
      "searchQueryFreeText": query.free_text,
      "searchQueryNetwork": Utils.formatQueryParam(query.network),
      "title": "Provider Directory Search Results",
      "stylesheets": [
        { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
        { "stylesheet": "//cloud.typography.com/6549574/670548/css/fonts.css" }
      ],
      "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
      "scripts": [
        {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "ga-analytics.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "helpers.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "spiderfy.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "map-cluster.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "results-map.js"}
      ],
      "banner": {
        text: "Return to the old dentist search?",
        button: {
          anchorLink: {
            href: CONSTANTS[CONSTANTS.ENVIRONMENT].OLD_DIRECTORY_HOST + "/find-a-dentist?" + ((query.location) ? "d_loc=" + query.location : "") + ((query.network) ? "&d_net=" + Utils.transformNetworkLegacy(query.network) : "") + ((query.free_text) ? "&d_kw=" + query.free_text : "") + "&d_d=" + ((query.distance) ? query.distance : "15") + "&d_prg=delta&d_co=delta",
            text: "Go back",
            class:"button btn--primary inverted banner__button"
          }
        },
        close: {
          icon: {
            class: "icon-exit-inverted",
            ariaLabel: "close"
          }
        }
      }
    },
    CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
  );
  if (query.page) {
    providers.currentPage = query.page;
  }
  providers.fetch({},
    function(code, data) {
      // success
      if (providers.isEmpty()) {
        res.redirect(CONSTANTS.ERROR_NO_RESULTS);
        return;
      } else {

        var baseURI = CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(providers.query);
        // network, specialty, language persistence
        providersPresenter.propertyMap.filter = ViewModel.pages_directorySearchResults.filter;
        providersPresenter.propertyMap.filter.network = NetworkPersistLogic.returnNetworkFormFields(query.network);
        providersPresenter.propertyMap.filter.specialty = SpecialtyPersistLogic.returnSpecialtyFormFields(query.specialty);
        providersPresenter.propertyMap.filter.language = LanguagePersistLogic.returnLanguageFormFields(query.language);
        // location persistence
        providersPresenter.propertyMap.searchInput = ViewModel.pages_directorySearchResults.searchInput;
        providersPresenter.propertyMap.searchInput = LocationPersistLogic.returnLocationFormFields(query.location);
        // lat long persistence
        providersPresenter.propertyMap.hiddenFields = ViewModel.pages_directorySearchResults.hiddenFields;
        providersPresenter.propertyMap.hiddenFields = LatlongPersistLogic.returnLatlongFormFields(query.lat, query.long);
        // distance persistence
        providersPresenter.propertyMap.distanceSelect = ViewModel.pages_directorySearchResults.distanceSelect;
        providersPresenter.propertyMap.distanceSelect = DistancePersistLogic.returnDistanceFormFields(query.distance);
        // freeTextInput persistence
        providersPresenter.propertyMap.freeTextInput = ViewModel.pages_directorySearchResults.freeTextInput;
        providersPresenter.propertyMap.freeTextInput = FreeTextInputPersistLogic.returnFreeTextInputFormFields(query.free_text);
        // pagination support
        providersPresenter.propertyMap.total = providers.total;
        providersPresenter.propertyMap.totalPages = providers.totalPages;
        providersPresenter.propertyMap.pageSize = providers.pageSize;
        providersPresenter.propertyMap.currentPage = providers.currentPage;
        providersPresenter.propertyMap.paginationList = PaginationControl.render(baseURI, providers.currentPage, providers.totalPages, "Prev", "Next", providers.paginationConfiguration.currentPageParam);

        var formattedData = Utils.formatData(providers.toJSON());
        providersPresenter.propertyMap.currentProviders = JSON.stringify(formattedData);
        res.status(code).send(providersPresenter.render(formattedData));
      }
    },
    function(code, data)  {
      // error
      Logger.log("ERROR: Failed to request providers: " + code);
      if (code === 504) {
        res.status(code).redirect(CONSTANTS.ERROR_TIMEOUT);
      } else if (code === 400) {
        res.status(code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
      } else if (code === 500) {
        res.status(code).redirect(CONSTANTS.ERROR_DOWN);
      } else {
        res.status(code).redirect(CONSTANTS.ERROR_NO_RESULTS);
      }
    }
  );
}