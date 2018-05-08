var VideoListView = Backbone.View.extend({
  el: '.list',
  
  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.children().detach();
    // console.log('collection', this.collection);
    // console.log('collection.models', this.collection.models);
    this.$el.html(this.template());
    this.collection.models.forEach(function(video) {
      var videoEntry = new VideoListEntryView({model: video});
      this.$el.append(videoEntry.render().$el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
