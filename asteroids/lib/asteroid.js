(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;
  var Util = Asteroids.Util;
  var MovingObject = Asteroids.MovingObject;

  var Asteroid = Asteroids.Asteroid = function(pos) {
    this.COLOR = "#ff0000";
    this.RADIUS = 25;
    var vector = Util.randomVec(1); //revisit 'length'

    return new MovingObject(pos, vector, this.RADIUS, this.COLOR);
  };

  Util.inherits(Asteroid, MovingObject);

})();
