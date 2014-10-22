/* exported Bar */

var Bar = (function(){
  'use strict';

  function Bar(game){
    this.x        = 0;
    this.y        = Math.ceil(game.canvas.height * 0.8);
    this.width    = game.canvas.width;
    this.height   = Math.floor(game.canvas.height * 0.1);
    this.palette  = game.palette;
    this.colorNum = 0;
    this.color    = this.palette[this.colorNum];
  }

  Bar.prototype.draw = function(game){
    game.ctx.fillStyle = this.color;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Bar.prototype.changeColor = function(num){
    this.colorNum += num;
    if(Object.keys(this.palette).indexOf(this.colorNum.toString()) !== -1){
      this.color = this.palette[this.colorNum];
    }else{
      this.color = this.palette['0'];
    }
  };

  return Bar;
})();
