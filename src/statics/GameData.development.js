var ENV = "development";
var GameData = {
  settings: {},
  player: {
    hp:               [20, 20],
    mp:               [0, 0],
    experience:       0,
    attack_damage:    10,
    battle_timeout:   5000,
    seashells:        199,
    oysters:          0,
    woods:            100,
    armor:            "clown",
    weapon:           "spear",
    inventory:        {
      weapons:          ["spear"],
      armors:           ["clown"],
      skills:           [],
      magic:            [],
      items:            ["map", "potion"]
    },
    experience_rewards: []
  },

  progress: {
    show_fish: 1,
    show_bottle: 1,
    show_shark: 1,
    show_build_bridge_button: 1,
    enable_build_bridge_button: 1,
    hide_seashell: 1,
    beaten_shark: 0
  }
}
