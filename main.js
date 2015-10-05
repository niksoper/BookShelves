(function() {
    
    'use strict';

    var authorize = getQueryParam('authorize');
    
    setInnerHtml('auth_token');
    setInnerHtml('authorize');
    
    function setInnerHtml(id) {
        document.getElementById(id).innerHTML = getQueryParam(id);
    }
    
    function getQueryParam(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
})();