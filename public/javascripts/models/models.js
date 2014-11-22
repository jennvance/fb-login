//define a generic namespace for the application called app.
var app = app || {};

app.ReaderModel = Backbone.Model.extend({
	defaults: {
		name: '',
		email: '',
		age: ''
	}
});
//ReaderCollection is an array of ReaderModels
app.ReaderCollection = Backbone.Collection.extend({
	model: app.ReaderModel,
	url: '/api'
});

app.readers = new app.ReaderCollection();