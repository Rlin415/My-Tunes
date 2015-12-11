// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //this === model
  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('remove', this.dequeue, this);    
  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(chosenSong) {
    if (this.length === 1) {
      this.playFirst();
    }
  }

});
