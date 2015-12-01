(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;
  var Asteroid = Asteroids.Asteroid;

  var Game = Asteroids.Game = function() {
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function(){
    while (this.asteroids.length < this.NUM_ASTEROIDS){
      var pos = this.randomPosition();
      var asteroid = new Asteroid(pos);
      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.randomPosition = function(){
    var pos = [this.DIM_X * Math.random(), this.DIM_X * Math.random()];
    return pos;
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };
})();
