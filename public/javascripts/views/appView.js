var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#betas',
	initialize: function(){
		this.listenTo(app.readers, 'add', this.addOne);
	},
	addOne: function(reader){
		var view = new app.ReaderView({
			model: reader
		});
		this.$('#beta').append(
			view.render().el
		);
	}

});