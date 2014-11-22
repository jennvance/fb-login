var app = app || {};

$(document).on('ready', function(){
	app.appView = new app.AppView();
	//fetch tells Backbone to go to the server at the specified url
	//and download any objects found there. Also calls add method for each item found
	app.readers.fetch();
});