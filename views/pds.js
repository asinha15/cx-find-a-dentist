!function(){var e=Handlebars.template,r=Handlebars.templates=Handlebars.templates||{};r.about=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,t){var l,s=null!=r?r:{},i=n.helperMissing,o=e.escapeExpression;return"<h1>Welcome</h1>\n<h2>This is the Provider Directory Search <em>Experience EndPoint</em></h2>\n<h3>Runtime Details</h3>\n<p>Port: "+o((l=null!=(l=n["ee-port"]||(null!=r?r["ee-port"]:r))?l:i,"function"==typeof l?l.call(s,{name:"ee-port",hash:{},data:t}):l))+"</p>\n<p>Search Service: "+o((l=null!=(l=n["search-service-host"]||(null!=r?r["search-service-host"]:r))?l:i,"function"==typeof l?l.call(s,{name:"search-service-host",hash:{},data:t}):l))+"</p>\n"},useData:!0}),r.directorySearch=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,t){var l;return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+e.escapeExpression((l=null!=(l=n.title||(null!=r?r.title:r))?l:n.helperMissing,"function"==typeof l?l.call(null!=r?r:{},{name:"title",hash:{},data:t}):l))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-home" class="home-icon">\r\n      <i class="icon  icon-home" aria-label="home icon"></i>\r\n    </a>\r\n\r\n    <nav class="page-nav">\r\n      <ul>\r\n        <li>\r\n          <a href="#go-somewhere" class="inverted">Log in</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class="logo-container">\r\n      <a href="#go-home" class="logo">\r\n        <img src="../../images/logo-unbounded-alternate-reversed.png" srcset="../../images/logo-unbounded-alternate-reversed.svg" alt="Delta Dental Logo" width="205px">\r\n      </a>\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <section>\r\n\r\n      <header class="section-heading">\r\n        <h1>Find a Dentist</h1>\r\n        <p><a>Log in</a> to find dentists in your plan.</p>\r\n      </header>\r\n\r\n      <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off">\r\n        <div class="form-element">\r\n          <label for="location">Near</label>\r\n          <input id="location" type="text" name="location" placeholder="Zip code, city, or address">\r\n        </div>\r\n\r\n        <div class="form-element form-element--spacing-large">\r\n          <button class="btn--primary" type="submit">View Dentists</button>\r\n        </div>\r\n      </form>\r\n\r\n    </section>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n    </footer>\r\n\r\n\r\n    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n    <script src="./jquery.min.js" defer="defer"><\/script>\r\n    <script src="./main.js" defer="defer"><\/script>\r\n\r\n  </body>\r\n  </html>\r\n'},useData:!0}),r.directorySearchResults=e({1:function(e,r,n,a,t){var l;return'      <ul class="provider-list">\r\n'+(null!=(l=n.each.call(null!=r?r:{},null!=r?r.provider:r,{name:"each",hash:{},fn:e.program(2,t,0),inverse:e.noop,data:t}))?l:"")+"      </ul>\r\n"},2:function(e,r,n,a,t){var l,s,i=null!=r?r:{},o=n.helperMissing,c="function",d=e.escapeExpression,p=e.lambda;return'        <li class="provider-listing">\r\n          <article>\r\n            <aside>\r\n\r\n              <div class="provider__distance">\r\n                <i class="icon  icon-map-marker" aria-label=""></i>\r\n                <span>'+d((s=null!=(s=n.distance||(null!=r?r.distance:r))?s:o,typeof s===c?s.call(i,{name:"distance",hash:{},data:t}):s))+'</span>\r\n              </div>\r\n\r\n              <div class="provider__link">\r\n                <a href="'+d((s=null!=(s=n.link||(null!=r?r.link:r))?s:o,typeof s===c?s.call(i,{name:"link",hash:{},data:t}):s))+'">View <i class="icon icon-right-arrow" aria-label="right arrow"></i></a>\r\n              </div>\r\n\r\n            </aside>\r\n\r\n            <section>\r\n\r\n              <header class="provider__name">\r\n                <h5>'+d((s=null!=(s=n.firstName||(null!=r?r.firstName:r))?s:o,typeof s===c?s.call(i,{name:"firstName",hash:{},data:t}):s))+" "+d((s=null!=(s=n.lastName||(null!=r?r.lastName:r))?s:o,typeof s===c?s.call(i,{name:"lastName",hash:{},data:t}):s))+'</h5>\r\n                <p class="provider__specialty">'+d((s=null!=(s=n.specialty||(null!=r?r.specialty:r))?s:o,typeof s===c?s.call(i,{name:"specialty",hash:{},data:t}):s))+'</p>\r\n              </header>\r\n\r\n              <div class="provider__network">\r\n                <p><i class="icon icon-info" aria-label=""></i> '+d((s=null!=(s=n.providerNetworks||(null!=r?r.providerNetworks:r))?s:o,typeof s===c?s.call(i,{name:"providerNetworks",hash:{},data:t}):s))+'</p>\r\n\r\n                <p><i class="icon icon-check-circle" aria-label=""></i> Accepting new patients</p>\r\n              </div>\r\n\r\n              <div class="provider__address-name">'+d((s=null!=(s=n.officeName||(null!=r?r.officeName:r))?s:o,typeof s===c?s.call(i,{name:"officeName",hash:{},data:t}):s))+'</div>\r\n\r\n              <div class="provider__address">'+d(p(null!=(l=null!=r?r.address:r)?l.addressLine:l,r))+", "+d(p(null!=(l=null!=r?r.address:r)?l.city:l,r))+", "+d(p(null!=(l=null!=r?r.address:r)?l.state:l,r))+" "+d(p(null!=(l=null!=r?r.address:r)?l.zipcode:l,r))+"</div>\r\n\r\n\r\n            </section>\r\n          </article>\r\n        </li>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,r,n,a,t){var l,s,i=null!=r?r:{};return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+e.escapeExpression((s=null!=(s=n.title||(null!=r?r.title:r))?s:n.helperMissing,"function"==typeof s?s.call(i,{name:"title",hash:{},data:t}):s))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n  <link href="./styles/directory.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-home" class="home-icon">\r\n      <i class="icon  icon-home" aria-label="home icon"></i>\r\n    </a>\r\n\r\n  </header>\r\n\r\n  <main>\r\n    <section>\r\n\r\n      <header class="section-heading">\r\n        <h1>Find a Dentist</h1>\r\n        <p><a>Log in</a> to find dentists in your plan.</p>\r\n      </header>\r\n\r\n      <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off" >\r\n        <div class="form-element form-element--location">\r\n          <label for="location">Near</label>\r\n          <input id="location" type="text" name="location" placeholder="Zip code, city, or address">\r\n        </div>\r\n\r\n        <div class="dropdown">\r\n          <button class="dropdown__toggle btn--secondary inverted">Refine Search</button>\r\n\r\n          <div class="dropdown__menu">\r\n            <div class="form-element">\r\n              <label for="distance">Distance</label>\r\n              <select id="distance" name="distance">\r\n                <option value="5">Within 5 Miles</option>\r\n                <option value="10">Within 10 Miles</option>\r\n                <option value="15">Within 15 Miles</option>\r\n                <option value="25">Within 25 Miles</option>\r\n                <option value="35">Within 35 Miles</option>\r\n                <option value="60" selected="selected">Within 60 Miles</option>\r\n              </select>\r\n            </div>\r\n\r\n            <fieldset class="form-element">\r\n              <legend>Specialty</legend>\r\n              <label for="specialty_General-Dentist" class="form-element__checkbox">\r\n                <input id="specialty_General-Dentist" type="checkbox" name="specialty" value="general">General Dentist\r\n              </label>\r\n\r\n              <label for="specialty_Endodontist" class="form-element__checkbox">\r\n                <input id="specialty_Endodontist" type="checkbox" name="specialty" value="endodontist">Endodontist\r\n              </label>\r\n\r\n              <label for="specialty_Oral-Surgeon" class="form-element__checkbox">\r\n                <input id="specialty_Oral-Surgeon" type="checkbox" name="specialty" value="surgen">Oral Surgeon\r\n              </label>\r\n\r\n              <label for="specialty_Orthodontist" class="form-element__checkbox">\r\n                <input id="specialty_Orthodontist" type="checkbox" name="specialty" value="orthodontist">Orthodontist\r\n              </label>\r\n\r\n              <label for="specialty_Pediatric-Dentist" class="form-element__checkbox">\r\n                <input id="specialty_Pediatric-Dentist" type="checkbox" name="specialty" value="pediatric">Pediatric Dentist\r\n              </label>\r\n\r\n              <label for="specialty_Periodontist" class="form-element__checkbox">\r\n                <input id="specialty_Periodontist" type="checkbox" name="specialty" value="periodontist">Periodontist\r\n              </label>\r\n\r\n              <label for="specialty_Prosthodontist" class="form-element__checkbox">\r\n                <input id="specialty_Prosthodontist" type="checkbox" name="specialty" value="prosthodontist">Prosthodontist\r\n              </label>\r\n\r\n              <label for="specialty_Public-Health-Dentist" class="form-element__checkbox">\r\n                <input id="specialty_Public-Health-Dentist" type="checkbox" name="specialty" value="public">Public Health Dentist\r\n              </label>\r\n\r\n              <label for="specialty_Full-Time-Faculty" class="form-element__checkbox">\r\n                <input id="specialty_Full-Time-Faculty" type="checkbox" name="specialty" value="full-time">Full-time Faculty\r\n              </label>\r\n\r\n              <label for="specialty_Hygienist" class="form-element__checkbox">\r\n                <input id="specialty_Hygienist" type="checkbox" name="specialty" value="hygienist">Hygienist\r\n              </label>\r\n\r\n              <label for="specialty_XR-Laboratory" class="form-element__checkbox">\r\n                <input id="specialty_XR-Laboratory" type="checkbox" name="specialty" value="xr">X-RAY Laboratory\r\n              </label>\r\n\r\n              <label for="specialty_Oral-Pathology" class="form-element__checkbox">\r\n                <input id="specialty_Oral-Pathology" type="checkbox" name="specialty" value="pathology">Oral Pathology\r\n              </label>\r\n            </fieldset>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-element form-element--submit">\r\n          <button class="btn--secondary btn--icon" type="submit">\r\n            <i class="icon icon-before icon-search-black" aria-label="search icon" ></i>\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n'+(null!=(l=n.if.call(i,null!=r?r.provider:r,{name:"if",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?l:"")+'\r\n    </section>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n    </footer>\r\n\r\n\r\n    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n    <script src="./jquery.min.js" defer="defer"><\/script>\r\n    <script src="./main.js" defer="defer"><\/script>\r\n\r\n  </body>\r\n  </html>\r\n'},useData:!0}),r.providerDetails=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,t){var l;return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+e.escapeExpression((l=null!=(l=n.title||(null!=r?r.title:r))?l:n.helperMissing,"function"==typeof l?l.call(null!=r?r:{},{name:"title",hash:{},data:t}):l))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n  <link href="./styles/directory.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-back" class="inverted back-link">\r\n      <span class="chevron chevron--left chevron--white"></span>\r\n      <span>Back to search results</span>\r\n    </a>\r\n\r\n  </header>\r\n\r\n  <main>\r\n    <article class="provider">\r\n      <aside class="provider__aside">\r\n        <div class="provider__distance">\r\n          <i class="icon  icon-map-marker" aria-label=""></i>\r\n\r\n          <span>0.4 mi</span>\r\n        </div>\r\n      </aside>\r\n      <section>\r\n        <header class="provider__header">\r\n          <div class="provider__name">Mrs Pain In The Mouth</div>\r\n          <div class="provider__specialty">Cavity filling</div>\r\n        </header>\r\n\r\n\r\n        <div class="provider__indicators">\r\n          <div class="provider__network"><i class="icon icon-info icon-default" aria-label=""></i> Premier\r\n          </div>\r\n          <div class="provider__availability"><i class="icon icon-check-circle icon-default" aria-label=""></i> Accepting new patients</div>\r\n        </div>\r\n\r\n        <div class="provider__map">\r\n          <div id="map" style="width: 100%; height: 100%;"></div>\r\n\r\n        </div>\r\n\r\n        <div class="provider__place" itemscope="" itemprop="place" itemtype="http://schema.org/Place">\r\n          <div class="provider__place-name" itemprop="name">Enamel Place</div>\r\n          <div class="provider__address" itemscope="" itemprop="address" itemtype="http://schema.org/PostalAddress">\r\n            <div class="provider__address-street" itemprop="streetAddress">32 Root Canal</div>\r\n            <span class="provider__address-city" itemprop="addressLocality">San Francisco</span>,\r\n            <abbr class="provider__address-state" itemprop="addressRegion">CA</abbr>\r\n            <span class="provider__address-zip" itemprop="postalCode">94105</span>\r\n            <div class="provider__phone" itemprop="telephone">(415) 641-8900</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="provider__hours">\r\n          <dl>\r\n            <dt>Hours</dt>\r\n            <dd>Open today 7:30am-4:30pm</dd>\r\n          </dl>\r\n\r\n        </div>\r\n\r\n        <div class="provider__access">\r\n          <dl>\r\n            <dt>Office Access</dt>\r\n            <dd>Public Transit, Wheelchair Accessible</dd>\r\n          </dl>\r\n\r\n        </div>\r\n\r\n        <div class="provider__languages">\r\n          <dl>\r\n            <dt>Languages at this office</dt>\r\n            <dd>English, Chinese, Spanish</dd>\r\n          </dl>\r\n\r\n        </div>\r\n\r\n        <div class="provider__data">\r\n          <table class="data__table">\r\n            <tbody><tr class="data__row">\r\n              <th class="data__row--heading">Provider NPI</th>\r\n              <td class="data__row--cell">##############</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">License #</th>\r\n              <td class="data__row--cell">######</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">License State</th>\r\n              <td class="data__row--cell">California</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">Education</th>\r\n              <td class="data__row--cell">UoP 1999</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">Gender</th>\r\n              <td class="data__row--cell">Male</td>\r\n            </tr>\r\n          </tbody></table>\r\n        </div>\r\n\r\n      </section>\r\n    </article>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n  </footer>\r\n\r\n\r\n  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n  <script src="./jquery.min.js" defer="defer"><\/script>\r\n  <script src="./template3.js" defer="defer"><\/script>\r\n\r\n</body>\r\n</html>\r\n'},useData:!0}),r["layouts/main"]=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,t){var l,s;return'<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <title>Main HTML</title>\r\n    <link href="./styles/style.css" rel="stylesheet"/>\r\n  </head>\r\n  <body>\r\n  '+(null!=(s=null!=(s=n.body||(null!=r?r.body:r))?s:n.helperMissing,l="function"==typeof s?s.call(null!=r?r:{},{name:"body",hash:{},data:t}):s)?l:"")+"\r\n  </body>\r\n</html>\r\n"},useData:!0})}();