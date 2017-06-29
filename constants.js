module.exports = {
  "ENVIRONMENT": "dev",
  "SSL_ENABLED": true,
  "EE_ABOUT": "This is the Directory Experience EndPoint.",

  "SERVER_LOG_PATH": "/var/log/provider-directory.log",

  "VIEW_MODEL_COLLECTION_KEY":  "{{collection}}",
  "PUBLIC_DIRECTORY": "public",
  "ABOUT_TEMPLATE": "about",
  "DIRECTORY_SEARCH_PAGE": "/directory-search.html",
  "PROVIDER_DETAILS_PAGE": "/provider-details.html",

  "TEMPLATES": {
    "MAIN_PRESENTER_TEMPLATE": "main",
    "SEARCH_RESULTS": "pages-directorySearchResults",
    "DETAILS": "pages-providerDetails",
    "SEARCH": "pages-directorySearch"

  },
  "ERROR_INVALID_ZIP": "/errorInvalidZip.html",
  "ERROR_NO_RESULTS": "/errorNoResults.html",
  "ERROR_TIMEOUT": "/errorTimeOut.html",
  "ERROR_DOWN": "/errorDown.html",

  "dev": {
    "EE_PORT": process.env.PORT || 81,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19001,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095",
    "SEARCH_SERVICE_PATH": "/providers"
  },
  "dit": {
    "EE_PORT": process.env.PORT|| 8081,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8280,
    "SEARCH_SERVICE_HOST": "http://aw-lx0193",
    "SEARCH_SERVICE_PATH": "/provider/v1/providers"
  },
  "mot": {
    "EE_PORT": process.env.PORT || 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8443,
    "SEARCH_SERVICE_HOST": "https://mot-heroku.deltadentalins.com",
    "SEARCH_SERVICE_PATH": "/api/cx/providerSearch/v1/providers"
  },
  "pit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 0,
    "SEARCH_SERVICE_HOST": "please fill out",
    "SEARCH_SERVICE_PATH": "----"
  },
  "prod": {
    "EE_PORT": process.env.PORT|| 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8243,
    "SEARCH_SERVICE_HOST": "https://wso2vip.deltads.ent",
    "SEARCH_SERVICE_PATH": "/api/cx/providerSearch/v1/providers"
  }
};
