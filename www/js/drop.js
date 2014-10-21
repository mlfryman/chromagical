/* exported Drop */

var Drop = (function(){
  'use strict';

  function Drop(game){
    var index = _.random(0, game.levels[game.currentLevel].range);

    this.img    = game.assets.drops[index];
    this.width  = 40;
    this.height = 40;
    this.x      = _.random(0, game.canvas.width - this.width);
    this.y      = -1 * this.height;

  }

  Drop.prototype.draw = function(game){
    game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  Drop.prototype.hitBar = function(game){
    return this.y >= game.bar.y;
  };

  return Drop;
})();
