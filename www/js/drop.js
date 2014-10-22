/* exported Drop */

var Drop = (function(){
  'use strict';

  function Drop(game){
    var index = _.random(0, game.levels[game.currentLevel].range),
        size  = Math.floor(game.canvas.width * 0.05);

    this.img    = game.assets.drops[index];
    this.width  = size;
    this.height = size;
    this.x      = _.random(0, game.canvas.width - this.width);
    this.y      = -1 * this.height;

  }

  Drop.prototype.draw = function(game){
    game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.y += game.levels[game.currentLevel].gravity;
  };

  Drop.prototype.hitBar = function(game){
    return (this.y + this.height - 3) >= game.bar.y;
  };

  return Drop;
})();
