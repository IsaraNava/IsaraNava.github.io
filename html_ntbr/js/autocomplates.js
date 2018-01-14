
var Autocomplate = function () {
	var siteId2;

    var siteId = function(sss){
    	siteId2 = sss;
        
    },
    
    var getSiteId = function(){
    	console.log(siteId2);
    }
    return {
        init: function(siteId) {
           siteId(siteId);
           getSiteId();
        }
    };

}();


$(function(){
	Autocomplate.init();
});