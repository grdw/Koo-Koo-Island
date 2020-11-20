import { Player } from '../player.js';
import { Progress } from '../progress.js';
import { Levels } from '../levelRenderer.js';

export const ProgressCallbacks = (function () {
  const shellIntervalCycle = 500;

  return {
    inventory: function () {
      Progress.setStat(null, function (stat) {
        stat.progress.hasInventory = true;
      });

      Player.inventory.enable();
    },

    oysters: function () {
      Progress.setInterfaceStat('oysters');
      ProgressCallbacks.seashells();
    },

    wood: function () {
      Progress.setInterfaceStat('wood');
      ProgressCallbacks.seashells();
    },

    seashells: function () {
      Progress.setInterfaceStat('seashells');
      const stat = Progress.getStat('player', 'seashells');
      const foundFish = Progress.getStat('progress', 'hasFoundFish');
      const foundMessageInBottle = Progress.getStat('progress', 'hasFoundMessageInBottle');

      if (!foundFish && stat === 10) {
        Progress.setStat('hasFoundFish', function (stat) {
          stat.progress.hasFoundFish = true;
        });
      }

      if (!foundMessageInBottle && stat === 20) {
        Progress.setStat('hasFoundMessageInBottle', function (stat) {
          stat.progress.hasFoundMessageInBottle = true;
        });
      }
    },

    hasFoundFish: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasFoundFish();
    },

    hasInventory: function () {
      Player.inventory.enable();
    },

    hasFoundMessageInBottle: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasFoundMessageInBottle();
    },

    hasClickedMessageInBottle: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasClickedMessageInBottle();
    },

    hasClickedShell: function () {
      Progress.setInterfaceStat('seashells');
      setInterval(function () {
        Progress.setStat('seashells', function (stat) {
          stat.player.seashells += 1;
        });
      }, shellIntervalCycle);
    }
  };
})();
