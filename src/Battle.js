Battle.prototype = {
  startBattle: function(){
    this.battlePopup.show();
  }
}

function Battle(enemy){
  this.player = window.Game.player;
  this.enemy = enemy;
  this.battlePopup = new Popup("battle-sequence-popup", undefined);
}


BattleInitializer.prototype = {
  start: function(enemy){
    console.log(enemy);
  }
}

function BattleInitializer(){
}

$.domReady(function(){
  window.BattleInitializer = new BattleInitializer();
});