var VideoListEntryView = Backbone.View.extend({
  
  // initialize: function() {
  //   var self = this;
  //   this.$el.on('click', '.video-list-entry-title', function (e) {
  //     self.model.select();
  //   });
  // },
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    console.log('hi');
    this.model.select();
  },

  render: function(model) {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
