function getSuggestion(keyword) {
    var endpoint = "/providers/suggestion?freeText="+keyword;

    var jqxhr = $.getJSON(endpoint)
        .done(function(){
          //compile Handlebars with the data
        })
        .fail(function() {

        })
}