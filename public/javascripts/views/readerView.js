var app = app || {};

app.ReaderView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#beta-template').html() ),
	render: function(){
		this.$el.html(this.template(
			//convert model to json object
			this.model.toJSON()
		));
		//attaches model object to DOM
		return this;
	}
})