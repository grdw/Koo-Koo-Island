Player.prototype = {
  setName: function(name){
    this.name = name;
  },

  buy: function(item){
    var sellPrice = sellPrices[item];
    if(GameData.player[sellPrice.type] >= sellPrice.value){
      window.Stats.increaseStat(item, 1, Callbacks[item].performCallback);
      var sellType = sellPrice.type.substring(0, sellPrice.type.length - 1);
      window.Stats.increaseStat(sellType, (sellPrice.value * -1));
    }
  },

  canBuyItem: function(item){
    var playerInventoryItemCount = GameData.player[sellPrices[item].type];
    return playerInventoryItemCount >= sellPrices[item].value;
  },

  attack: function(enemy){
    window.currentBattle.battleEngine.disable();
    var self = this;

    move(this.battleGraphic)
      .x(enemy.enemyInformation.position.x)
      .y(enemy.enemyInformation.position.y)
      .duration('0.4s')
      .ease('in')
      .end();

    clearTimeout(this.clearMove);

    this.clearMove = setTimeout(function(){
      move(self.battleGraphic)
        .x(0)
        .duration('0.3s')
        .ease('out')
        .end(function(){
          enemy.looseHealth(GameData.player.attack_damage);
        });

      clearTimeout(self.clearMove);
    }, 500);
  },

  looseHealth: function(amount){
    GameData.player.hp -= amount;
    if(GameData.player.hp <= 0){
      GameData.player.hp = 0;
      window.currentBattle.pause();
      setTimeout(function(){
        window.currentBattle.battlePopup.hide();
        GameData.player.hp = 1;
      }, 2000);
    }
    this.updateHealthBar();
  },

  updateHealthBar: function(){
    this.healthBar.style.width = this.currentHealth() + "%";
  },

  currentHealth: function(){
    return (GameData.player.hp / this.startHealth) * 100;
  }
}

function Player(){
  this.inventory = new Inventory();
  this.graphic = document.getElementById("game-character");
  this.battleGraphic = document.querySelector("#battle-sequence-popup .player #graphic");
  this.healthBar = document.querySelector(".field .player .healthbar .health-left");
  this.startHealth = GameData.player.hp;
}
