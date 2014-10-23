/* exported Asset */
/* global Media, device */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset    = {},
        img      = null,
        imgUrls  = [
          'img/droplets/red.png',
          'img/droplets/yellow.png',
          'img/droplets/blue.png',
          'img/droplets/purple.png',
          'img/droplets/orange.png',
          'img/droplets/green.png',
          'img/droplets/yellow-orange.png',
          'img/droplets/yellow-green.png',
          'img/droplets/red-orange.png',
          'img/droplets/red-purple.png',
          'img/droplets/blue-purple.png',
          'img/droplets/blue-green.png'
        ];

    asset.dropClrs = [
      '#ff0000', // red
      '#ffff00', // yellow
      '#0033ff', // blue
      '#990099', // purple
      '#ff9900', // orange
      '#009900', // green
      '#ffcc00', // yellow-orange
      '#66cc00', // yellow-green
      '#ff6600', // red-orange
      '#cc0099', // red-purple
      '#660099', // blue-purple
      '#006600'  // blue-green
    ];

    asset.drops = [];

    imgUrls.forEach(function(url){
      img = new Image();
      img.src = url;
      asset.drops.push(img);
    });
    var prefix = device.platform === 'Android' ? '/android_asset/www/' : '';
    asset.bloop     = new Media();
    asset.bloop.src = prefix + 'audio/bloop.mp3';
    asset.splat     = new Media();
    asset.splat.src = prefix + 'audio/splat.mp3';
    asset.magic     = new Media();
    asset.magic.src = prefix + 'audio/magic.mp3';

    return asset;
  };

  return Asset;
})();
