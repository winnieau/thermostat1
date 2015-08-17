function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.raise = function() {
  this.temperature++;
};

Thermostat.prototype.lower = function() {
  if(this.temperature > 10) {
    this.temperature--;
  }
};


// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
