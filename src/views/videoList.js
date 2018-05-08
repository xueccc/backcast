var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.children().detach();
    // console.log('collection', this.collection);
    // console.log('collection.models', this.collection.models);
    this.$el.append(this.collection.models.map(function(video) {
      var videoEntry = new VideoListEntryView({model: video});
      videoEntry.render();
      return videoEntry;
    }));
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
