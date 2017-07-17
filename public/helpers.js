var FEHelpers = (function(){
  var mapPos = document.getElementById("provider-map");
  var formBottom = document.getElementsByClassName("provider-form")[0];
  var footerTop = document.getElementsByClassName("page-footer")[0];

  var debounce = function(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

  var log = function(text) {
    console.log(text);
  };

  var fixmyshit = function() {
    if(formBottom.getBoundingClientRect().bottom <= 0) {
      // if( footerTop.getBoundingClientRect().top <= mapPos.getBoundingClientRect().bottom) {
      // mapPos.className = "provider-map absolute";
      // } else {
      console.log(footerTop.getBoundingClientRect().top+ " footer top");
      console.log(mapPos.getBoundingClientRect().bottom+ " map bottom");
         mapPos.className = "provider-map fixed";
      // }
    } else {
      mapPos.className = "provider-map";
    }
  };

  return {
    "debounce": debounce,
    "log": log,
    "fixmyshit": fixmyshit
  };
}());

window.addEventListener("scroll", FEHelpers.debounce(FEHelpers.fixmyshit, 10));
