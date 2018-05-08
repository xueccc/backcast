var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    // this.render();
    // $('.video-list-entry-title').on('click', function (e) {
    //   console.log('hi');
    //   this.model.select();
    // });
    var self = this;
    this.$el.on('click', function (e) {
      self.model.select();
    });
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
