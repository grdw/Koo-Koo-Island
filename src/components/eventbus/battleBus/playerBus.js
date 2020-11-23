export const PlayerBus = (function () {
  function battleRendered (e) {
    e.params.battle.player.turnBar.fill(function () {
      console.log('full enemy');
    });
  }

  function playerDamaged (e) {
    // blink the player a little bit (like FF VI style)
    const player = e.params.battle.player;
    player.hpBar.lower(e.params.damage, function () {
      // if hp lowers below 0 - DIE!
    });
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          battleRendered(e);
          break;
        case 'playerDamaged':
          playerDamaged(e);
          break;
      }
    }
  };
})();
