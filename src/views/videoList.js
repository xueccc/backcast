var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    this.collection.models.forEach(function(video) {
      var videoEntry = new VideoListEntryView({model: video});
      var html = videoEntry.render(video);
      this.$el.find('.video-list').append(html.el);
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
