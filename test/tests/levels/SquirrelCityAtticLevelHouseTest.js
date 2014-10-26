QUnit.module("initializing the attic level", {
  setup: function(){
    window.currentGame.levels.squirrel_city_attic_level.addToGame();
  },

  teardown: function(){
    window.currentGame.levels.lonely_island.addToGame();
  }
});

  QUnit.test("should disable the stairs", function(assert){
    var stairs = dom.findId("squirrel-city-goto-first-level-back");

    assert.ok(stairs.classList.contains("disabled"));
  });

  QUnit.test("should disable the inventory button", function(assert){
    assert.ok(dom.findId("open-inventory-button").disabled);
  });

QUnit.module("reward player with a part of the map", {
  setup: function(){
    window.Test.enemy  = new Enemy("evil-portrait");
    window.Test.battle = new Battle(window.Test.enemy);
    window.Test.battle.start();
    window.Test.enemy.looseHealth(100);
    window.currentBattle.eventEngine.invoke();
  },

  teardown: function(){
    window.Test.battle.battlePopup.hide();
    window.currentGame.gameMap.popUp.hide();
    GameData.player.inventory.items = [];
    window.Test.resetStats();
  }
});

  QUnit.test("should set the boss fight to 1", function(assert){

    assert.ok(window.currentGame.checkProgressOn("squirrel_house_boss_fight"));
  });

QUnit.module();
