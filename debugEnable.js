if(window.location.search.indexOf("debug=1") < 0){
	window.console = {log: function () {} };
	window.alert = function(){};
}else if(typeof console == "undefined"){
 	window.console = {log: function () {}};
}
