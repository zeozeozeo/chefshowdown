// data/game-settings.json
var game_settings_default = {
  $created: "2025-07-04T16:44:51.208Z",
  recipeSteps: {},
  transformations: {
    patty_to_cooked_patty: {
      input: "patty",
      output: "cooked_patty",
      overput: "burnt_patty"
    },
    cooked_patty_to_burger: {
      input: "cooked_patty",
      output: "basic_burger"
    },
    waffle_to_waffle_with_syrup: {
      input: "waffle",
      output: "waffle_with_syrup"
    },
    waffle_to_waffle_with_cream: {
      input: "waffle",
      output: "waffle_with_cream"
    },
    green_to_green_with_eyeball: {
      input: "green_punch",
      output: "green_punch_with_eyeball"
    },
    purple_to_purple_with_eyeball: {
      input: "purple_punch",
      output: "purple_punch_with_eyeball"
    },
    sausage_to_grilled_susage: {
      input: "sausage",
      output: "grilled_sausage",
      overput: "burnt_sausage"
    },
    grilled_sausage_to_hot_dog: {
      input: "grilled_sausage",
      output: "hot_dog"
    },
    hot_dog_to_chilli_dog: {
      input: "hot_dog",
      output: "chilli_dog"
    },
    rice_to_salmon_sushi: {
      input: "rice",
      output: "salmon_sushi"
    },
    rice_to_omlette_sushi: {
      input: "rice",
      output: "omlette_sushi"
    },
    omlette_sushi_to_omlette_seaweed: {
      input: "omlette_sushi",
      output: "omlette_sushi_seaweed"
    },
    hot_choc_add_marshmallows: {
      input: "hot_choc",
      output: "hot_choc_marshmallows"
    },
    hot_choc_add_sprinkles: {
      input: "hot_choc",
      output: "hot_choc_sprinkles"
    },
    fish_to_steamed_fish: {
      input: "fish",
      output: "steamed_fish"
    },
    dumpling_to_steamed_dumpling: {
      input: "dumpling",
      output: "steamed_dumpling"
    },
    choc_to_choc_cream: {
      input: "choc_ice_cream",
      output: "cream_choc_ice_cream"
    },
    berry_to_berry_cream: {
      input: "berry_ice_cream",
      output: "cream_berry_ice_cream"
    },
    banana_to_banana_cream: {
      input: "banana_ice_cream",
      output: "cream_banana_ice_cream"
    },
    choc_to_choc_cream_cherry: {
      input: "cream_choc_ice_cream",
      output: "cherry_cream_choc_ice_cream"
    },
    berry_to_berry_cream_cherry: {
      input: "cream_berry_ice_cream",
      output: "cherry_cream_berry_ice_cream"
    },
    banana_to_banana_cream_cherry: {
      input: "cream_banana_ice_cream",
      output: "cherry_cream_banana_ice_cream"
    },
    dosa_to_dosa_coconut: {
      input: "dosa",
      output: "dosa_coconut"
    },
    dosa_to_dosa_tomato: {
      input: "dosa",
      output: "dosa_tomato"
    },
    dosa_to_dosa_masala: {
      input: "dosa",
      output: "dosa_masala"
    },
    dosa_masala_to_masala_coconut: {
      input: "dosa_masala",
      output: "dosa_masala_coconut"
    },
    dosa_masala_to_masala_tomato: {
      input: "dosa_masala",
      output: "dosa_masala_tomato"
    },
    medu_vada_to_medu_tomato: {
      input: "medu_vada",
      output: "medu_vada_tomato"
    },
    medu_vada_to_medu_coco: {
      input: "medu_vada",
      output: "medu_vada_coconut"
    },
    cone_to_cone_soft_serve: {
      input: "cone",
      output: "cone_soft_serve"
    },
    cone_to_cone_scoop_berry: {
      input: "cone",
      output: "cone_scoop_berry"
    },
    cone_to_cone_scoop_mango: {
      input: "cone",
      output: "cone_scoop_mango"
    },
    cone_to_cone_scoop_mint: {
      input: "cone",
      output: "cone_scoop_mint"
    },
    cone_berry_to_cone_berry_mango: {
      input: "cone_scoop_berry",
      output: "cone_scoop_berry_mango"
    },
    cone_mango_to_cone_berry_mango: {
      input: "cone_scoop_mango",
      output: "cone_scoop_berry_mango"
    },
    cone_berry_to_cone_berry_mint: {
      input: "cone_scoop_berry",
      output: "cone_scoop_berry_mint"
    },
    cone_mint_to_cone_berry_mint: {
      input: "cone_scoop_mint",
      output: "cone_scoop_berry_mint"
    },
    cone_mango_to_cone_mango_mint: {
      input: "cone_scoop_mango",
      output: "cone_scoop_mango_mint"
    },
    cone_mint_to_cone_mango_mint: {
      input: "cone_scoop_mint",
      output: "cone_scoop_mango_mint"
    },
    cone_berry_mango_to_cone_BMM: {
      input: "cone_scoop_berry_mango",
      output: "cone_scoop_berry_mango_mint"
    },
    cone_berry_mint_to_cone_BMM: {
      input: "cone_scoop_berry_mint",
      output: "cone_scoop_berry_mango_mint"
    },
    cone_mango_mint_to_cone_BMM: {
      input: "cone_scoop_mango_mint",
      output: "cone_scoop_berry_mango_mint"
    },
    coco_to_coco_scoop_berry: {
      input: "coconut",
      output: "coconut_scoop_berry"
    },
    coco_to_coco_scoop_mango: {
      input: "coconut",
      output: "coconut_scoop_mango"
    },
    coco_to_coco_scoop_mint: {
      input: "coconut",
      output: "coconut_scoop_mint"
    },
    coco_berry_to_coco_berry_mango: {
      input: "coconut_scoop_berry",
      output: "coconut_scoop_berry_mango"
    },
    coco_mango_to_coco_berry_mango: {
      input: "coconut_scoop_mango",
      output: "coconut_scoop_berry_mango"
    },
    coco_berry_to_coco_berry_mint: {
      input: "coconut_scoop_berry",
      output: "coconut_scoop_berry_mint"
    },
    coco_mint_to_coco_berry_mint: {
      input: "coconut_scoop_mint",
      output: "coconut_scoop_berry_mint"
    },
    coco_mango_to_coco_mango_mint: {
      input: "coconut_scoop_mango",
      output: "coconut_scoop_mango_mint"
    },
    coco_mint_to_coco_mango_mint: {
      input: "coconut_scoop_mint",
      output: "coconut_scoop_mango_mint"
    },
    coco_berry_mango_to_coco_BMM: {
      input: "coconut_scoop_berry_mango",
      output: "coconut_scoop_berry_mango_mint"
    },
    coco_berry_mint_to_coco_BMM: {
      input: "coconut_scoop_berry_mint",
      output: "coconut_scoop_berry_mango_mint"
    },
    coco_mango_mint_to_coco_BMM: {
      input: "coconut_scoop_mango_mint",
      output: "coconut_scoop_berry_mango_mint"
    },
    salad_to_burger_salad: {
      input: "salad",
      output: "burger_salad"
    },
    salad_to_hot_dog_salad: {
      input: "salad",
      output: "hot_dog_salad"
    },
    burger_to_burger_salad: {
      input: "basic_burger",
      output: "burger_salad"
    },
    hot_dog_to_hot_dog_salad: {
      input: "hot_dog",
      output: "hot_dog_salad"
    },
    torilla_to_taco_meat: {
      input: "tortilla",
      output: "taco_meat"
    },
    torilla_to_taco_shrimp: {
      input: "tortilla",
      output: "taco_shrimp"
    },
    torilla_to_taco_red: {
      input: "tortilla",
      output: "taco_red"
    },
    torilla_to_taco_green: {
      input: "tortilla",
      output: "taco_green"
    },
    taco_meat_to_taco_meat_green: {
      input: "taco_meat",
      output: "taco_meat_green"
    },
    taco_meat_to_taco_meat_red: {
      input: "taco_meat",
      output: "taco_meat_red"
    },
    taco_shrimp_to_taco_shrimp_green: {
      input: "taco_shrimp",
      output: "taco_shrimp_green"
    },
    taco_shrimp_to_taco_shrimp_red: {
      input: "taco_shrimp",
      output: "taco_shrimp_red"
    },
    taco_red_to_taco_meat_red: {
      input: "taco_red",
      output: "taco_meat_red"
    },
    taco_green_to_taco_meat_green: {
      input: "taco_green",
      output: "taco_meat_green"
    },
    taco_green_to_taco_shrimp_green: {
      input: "taco_green",
      output: "taco_shrimp_green"
    },
    taco_red_to_taco_shrimp_red: {
      input: "taco_red",
      output: "taco_shrimp_red"
    }
  },
  inventoryItems: {
    burgerTime_drinkMachine: {
      usedInGameMode: "burgerTime",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    burgerTime_fryer: {
      usedInGameMode: "burgerTime",
      rarity: "rare",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    burgerTime_grill: {
      usedInGameMode: "burgerTime",
      rarity: "epic",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    breakfastClub_waffleIron: {
      usedInGameMode: "breakfastClub",
      rarity: "rare",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    breakfastClub_coffeeMaker: {
      usedInGameMode: "breakfastClub",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    happyHour_sodaMachine: {
      usedInGameMode: "happyHour",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    happyHour_rootBeer: {
      usedInGameMode: "happyHour",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    happyHour_milkshake: {
      usedInGameMode: "happyHour",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    potionParty_greenCauldron: {
      usedInGameMode: "potionParty",
      rarity: "rare",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    potionParty_purpleCauldron: {
      usedInGameMode: "potionParty",
      rarity: "rare",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    sushiMode_riceCooker: {
      usedInGameMode: "sushiMode",
      rarity: "legendary",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    sushiMode_teapot: {
      usedInGameMode: "sushiMode",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    wurstNightmare_grill: {
      usedInGameMode: "wurstNightmare",
      rarity: "epic",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    wurstNightmare_hotChocolate: {
      usedInGameMode: "wurstNightmare",
      rarity: "epic",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    winterMode_hotChocolate: {
      usedInGameMode: "winterMode",
      rarity: "epic",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    dosaDash_coffeeUrn: {
      usedInGameMode: "dosaDash",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    dosaDash_sambarPot: {
      usedInGameMode: "dosaDash",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    dosaDash_dosaPlate: {
      usedInGameMode: "dosaDash",
      rarity: "epic",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    kingOfTheGrill_grill: {
      usedInGameMode: "kingOfTheGrill",
      rarity: "epic",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    kingOfTheGrill_drinkMachine: {
      usedInGameMode: "kingOfTheGrill",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    tacoTime_aguaFresca: {
      usedInGameMode: "tacoTime",
      rarity: "common",
      cardsForNextLevel: [
        1,
        1,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0
      ],
      cashForNextLevel: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  },
  lootBoxes: {
    cardboard: {
      info: {
        displayName: "Cardboard box"
      },
      data: [
        {
          type: "item",
          baseChance: 1,
          min: 1,
          max: 1,
          rarityBias: {
            common: 1
          }
        }
      ]
    },
    leather: {
      info: {
        displayName: "Leather box"
      },
      data: [
        {
          type: "item",
          baseChance: 1,
          min: 2,
          max: 2,
          rarityBias: {
            common: 1
          }
        },
        {
          type: "item",
          baseChance: 1,
          min: 1,
          max: 1,
          rarityBias: {
            rare: 1
          }
        }
      ]
    },
    silver: {
      info: {
        displayName: "Silver box"
      },
      data: [
        {
          type: "item",
          baseChance: 1,
          min: 3,
          max: 3,
          rarityBias: {
            common: 1
          }
        },
        {
          type: "item",
          baseChance: 1,
          min: 2,
          max: 2,
          rarityBias: {
            rare: 1
          }
        },
        {
          type: "item",
          baseChance: 1,
          min: 1,
          max: 1,
          rarityBias: {
            epic: 1
          }
        }
      ]
    },
    gold: {
      info: {
        displayName: "Gold box"
      },
      data: [
        {
          type: "item",
          baseChance: 1,
          min: 3,
          max: 3,
          rarityBias: {
            rare: 1
          }
        },
        {
          type: "item",
          baseChance: 1,
          min: 2,
          max: 2,
          rarityBias: {
            epic: 1
          }
        },
        {
          type: "item",
          baseChance: 1,
          min: 1,
          max: 1,
          rarityBias: {
            legendary: 1
          }
        }
      ]
    }
  },
  playerBuffs: {
    tipJar: {},
    adsSpeedUp: {},
    wildcardCustomer: {},
    patientCustomer: {},
    speedUpSpell: {
      spell: {
        cooldown: 30,
        duration: 10
      },
      buffBalance: {
        speed: 2.3
      }
    }
  },
  stages: {
    happyHour: {
      stations: {
        PrepStation_soda: {
          $UpgradableStation: {
            inventoryKey: "happyHour_sodaMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_root_beer: {
          $UpgradableStation: {
            inventoryKey: "happyHour_rootBeer"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_aguaFresca: {
          $UpgradableStation: {
            inventoryKey: "tacoTime_aguaFresca"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_coffee: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_coffeeMaker"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_milkshake: {
          $UpgradableStation: {
            inventoryKey: "happyHour_milkshake"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        }
      }
    },
    burgerTime: {
      stations: {
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 10,
              cookingTime: 6
            },
            $levels: []
          }
        },
        PrepStation_fryer: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_fryer"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 8,
              overcookDuration: 10,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        }
      }
    },
    sushiMode: {
      stations: {
        PrepStation_green_tea: {
          $UpgradableStation: {
            inventoryKey: "sushiMode_teapot"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 5
            },
            $levels: []
          }
        },
        PrepStation_rice: {
          $UpgradableStation: {
            inventoryKey: "sushiMode_riceCooker"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 10,
              overcookDuration: 2,
              stockCreated: 3,
              canOvercook: false,
              startsFull: true,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        }
      }
    },
    winterMode: {
      stations: {
        PrepStation_waffles: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_waffleIron"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 6,
              overcookDuration: 15,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        },
        PrepStation_heater: {
          $UpgradableStation: {
            inventoryKey: "winterMode_hotChocolate"
          },
          $station: {
            $component: "DecayGeneratorStation",
            $default: {
              activationDuration: 6,
              generationDuration: 5,
              decayDuration: 120
            },
            $levels: []
          }
        }
      }
    },
    happyHourScoreAttack: {
      stations: {
        PrepStation_soda: {
          $UpgradableStation: {
            inventoryKey: "happyHour_sodaMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_root_beer: {
          $UpgradableStation: {
            inventoryKey: "happyHour_rootBeer"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_aguaFresca: {
          $UpgradableStation: {
            inventoryKey: "tacoTime_aguaFresca"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_coffee: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_coffeeMaker"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_milkshake: {
          $UpgradableStation: {
            inventoryKey: "happyHour_milkshake"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        }
      }
    },
    burgerTimeScoreAttack: {
      stations: {
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 10,
              cookingTime: 6
            },
            $levels: []
          }
        },
        PrepStation_fryer: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_fryer"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 8,
              overcookDuration: 10,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        }
      }
    },
    sushiModeScoreAttack: {
      stations: {
        PrepStation_green_tea: {
          $UpgradableStation: {
            inventoryKey: "sushiMode_teapot"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 5
            },
            $levels: []
          }
        },
        PrepStation_rice: {
          $UpgradableStation: {
            inventoryKey: "sushiMode_riceCooker"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 10,
              overcookDuration: 2,
              stockCreated: 3,
              canOvercook: false,
              startsFull: true,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        }
      }
    },
    winterModeScoreAttack: {
      stations: {
        PrepStation_waffles: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_waffleIron"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 6,
              overcookDuration: 15,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        },
        PrepStation_heater: {
          $UpgradableStation: {
            inventoryKey: "winterMode_hotChocolate"
          },
          $station: {
            $component: "DecayGeneratorStation",
            $default: {
              activationDuration: 6,
              generationDuration: 5,
              decayDuration: 120
            },
            $levels: []
          }
        }
      }
    },
    burgerTimeScoreAttackExtreme: {
      stations: {
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 5
            },
            $levels: []
          }
        },
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 8,
              cookingTime: 6
            },
            $levels: []
          }
        },
        PrepStation_fryer: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_fryer"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 7,
              overcookDuration: 7,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        }
      }
    },
    winterModeScoreAttackExtreme: {
      stations: {
        PrepStation_waffles: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_waffleIron"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 6,
              overcookDuration: 15,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        },
        PrepStation_heater: {
          $UpgradableStation: {
            inventoryKey: "winterMode_hotChocolate"
          },
          $station: {
            $component: "DecayGeneratorStation",
            $default: {
              activationDuration: 6,
              generationDuration: 5,
              decayDuration: 120
            },
            $levels: []
          }
        }
      }
    },
    tutorial: {
      stations: {
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: [
              {}
            ]
          }
        },
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 2e3,
              cookingTime: 6
            },
            $levels: [
              {}
            ]
          }
        }
      }
    },
    breakfastClub: {
      stations: {
        PrepStation_waffles: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_waffleIron"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 6,
              overcookDuration: 10,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: [
              {},
              {
                creationDuration: 6,
                overcookDuration: 10
              },
              {
                creationDuration: 5,
                overcookDuration: 11
              },
              {
                creationDuration: 4.4,
                overcookDuration: 11.6
              },
              {
                creationDuration: 3.9,
                overcookDuration: 12.1
              },
              {
                creationDuration: 3.5,
                overcookDuration: 13.5
              },
              {
                creationDuration: 3.1,
                overcookDuration: 13.9
              },
              {
                creationDuration: 2.8,
                overcookDuration: 14.3
              },
              {
                creationDuration: 2.6,
                overcookDuration: 14.5
              },
              {
                creationDuration: 2.4,
                overcookDuration: 14.7
              },
              {
                creationDuration: 2,
                overcookDuration: 14.9
              },
              {
                creationDuration: 1.9,
                overcookDuration: 15
              },
              {
                creationDuration: 1.8,
                overcookDuration: 15.1
              },
              {
                creationDuration: 1.7,
                overcookDuration: 15.2
              },
              {
                creationDuration: 1.6,
                overcookDuration: 15.3
              },
              {
                creationDuration: 1.5,
                overcookDuration: 15.4
              },
              {
                creationDuration: 1.4,
                overcookDuration: 15.5
              },
              {
                creationDuration: 1.3,
                overcookDuration: 15.6
              },
              {
                creationDuration: 1.2,
                overcookDuration: 15.7
              },
              {
                creationDuration: 1.1,
                overcookDuration: 15.8
              },
              {
                creationDuration: 1.05,
                overcookDuration: 15.9
              },
              {
                creationDuration: 1,
                overcookDuration: 16
              }
            ]
          }
        },
        PrepStation_coffee: {
          $UpgradableStation: {
            inventoryKey: "breakfastClub_coffeeMaker"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.25
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.15
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1
              }
            ]
          }
        }
      }
    },
    potionParty: {
      stations: {
        PrepStation_green_punch: {
          $UpgradableStation: {
            inventoryKey: "potionParty_greenCauldron"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1.05
              },
              {
                creationDuration: 1
              }
            ]
          }
        },
        PrepStation_purple_punch: {
          $UpgradableStation: {
            inventoryKey: "potionParty_purpleCauldron"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1.05
              },
              {
                creationDuration: 1
              }
            ]
          }
        }
      }
    },
    wurstNightmare: {
      stations: {
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "wurstNightmare_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 10,
              cookingTime: 6
            },
            $levels: [
              {},
              {
                cookingTime: 6,
                overcookingTime: 10
              },
              {
                cookingTime: 5,
                overcookingTime: 11
              },
              {
                cookingTime: 4.4,
                overcookingTime: 11.6
              },
              {
                cookingTime: 3.9,
                overcookingTime: 12.1
              },
              {
                cookingTime: 3.5,
                overcookingTime: 13.5
              },
              {
                cookingTime: 3.1,
                overcookingTime: 13.9
              },
              {
                cookingTime: 2.8,
                overcookingTime: 14.3
              },
              {
                cookingTime: 2.6,
                overcookingTime: 14.5
              },
              {
                cookingTime: 2.4,
                overcookingTime: 14.7
              },
              {
                cookingTime: 2,
                overcookingTime: 14.9
              },
              {
                cookingTime: 1.8,
                overcookingTime: 15.1
              },
              {
                cookingTime: 1.7,
                overcookingTime: 15.3
              },
              {
                cookingTime: 1.6,
                overcookingTime: 15.4
              },
              {
                cookingTime: 1.5,
                overcookingTime: 15.5
              },
              {
                cookingTime: 1.4,
                overcookingTime: 15.6
              },
              {
                cookingTime: 1.3,
                overcookingTime: 15.7
              },
              {
                cookingTime: 1.2,
                overcookingTime: 15.8
              },
              {
                cookingTime: 1.1,
                overcookingTime: 15.9
              },
              {
                cookingTime: 1,
                overcookingTime: 16
              }
            ]
          }
        },
        PrepStation_heater: {
          $UpgradableStation: {
            inventoryKey: "wurstNightmare_hotChocolate"
          },
          $station: {
            $component: "DecayGeneratorStation",
            $default: {
              activationDuration: 6,
              generationDuration: 2,
              decayDuration: 20
            },
            $levels: [
              {},
              {
                decayDuration: 20,
                activationDuration: 6
              },
              {
                decayDuration: 21,
                activationDuration: 5
              },
              {
                decayDuration: 21.6,
                activationDuration: 4.4
              },
              {
                decayDuration: 22.1,
                activationDuration: 3.9
              },
              {
                decayDuration: 22.5,
                activationDuration: 3.5
              },
              {
                decayDuration: 22.9,
                activationDuration: 3.1
              },
              {
                decayDuration: 23.2,
                activationDuration: 2.8
              },
              {
                decayDuration: 23.4,
                activationDuration: 2.6
              },
              {
                decayDuration: 23.6,
                activationDuration: 2.4
              },
              {
                decayDuration: 23.8,
                activationDuration: 2.2
              },
              {
                decayDuration: 24,
                activationDuration: 2
              },
              {
                decayDuration: 24.2,
                activationDuration: 1.8
              },
              {
                decayDuration: 24.3,
                activationDuration: 1.7
              },
              {
                decayDuration: 24.4,
                activationDuration: 1.6
              },
              {
                decayDuration: 24.5,
                activationDuration: 1.5
              },
              {
                decayDuration: 24.6,
                activationDuration: 1.4
              },
              {
                decayDuration: 24.7,
                activationDuration: 1.3
              },
              {
                decayDuration: 24.8,
                activationDuration: 1.2
              },
              {
                decayDuration: 24.9,
                activationDuration: 1.1
              },
              {
                decayDuration: 25,
                activationDuration: 1
              }
            ]
          }
        }
      }
    },
    lunarNewYear: {
      stations: {}
    },
    iceCreamParlour: {
      stations: {}
    },
    dosaDash: {
      stations: {
        PrepStation_coffeeIndia: {
          $UpgradableStation: {
            inventoryKey: "dosaDash_coffeeUrn"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.25
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.15
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1
              }
            ]
          }
        },
        PrepStation_sambar: {
          $UpgradableStation: {
            inventoryKey: "dosaDash_sambarPot"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.25
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.15
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1
              }
            ]
          }
        },
        PrepStation_dosaPlate: {
          $UpgradableStation: {
            inventoryKey: "dosaDash_dosaPlate"
          },
          $station: {
            $component: "AddWhileCookingStation",
            $default: {
              overcookDuration: 15,
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6,
                overcookDuration: 15
              },
              {
                creationDuration: 5,
                overcookDuration: 16
              },
              {
                creationDuration: 4.4,
                overcookDuration: 16.6
              },
              {
                creationDuration: 3.9,
                overcookDuration: 17.1
              },
              {
                creationDuration: 3.5,
                overcookDuration: 18.5
              },
              {
                creationDuration: 3.1,
                overcookDuration: 18.9
              },
              {
                creationDuration: 2.8,
                overcookDuration: 19.3
              },
              {
                creationDuration: 2.6,
                overcookDuration: 19.5
              },
              {
                creationDuration: 2.4,
                overcookDuration: 19.7
              },
              {
                creationDuration: 2,
                overcookDuration: 19.9
              },
              {
                creationDuration: 1.8,
                overcookDuration: 20.1
              },
              {
                creationDuration: 1.7,
                overcookDuration: 20.3
              },
              {
                creationDuration: 1.6,
                overcookDuration: 20.4
              },
              {
                creationDuration: 1.5,
                overcookDuration: 20.5
              },
              {
                creationDuration: 1.4,
                overcookDuration: 20.6
              },
              {
                creationDuration: 1.3,
                overcookDuration: 20.7
              },
              {
                creationDuration: 1.2,
                overcookDuration: 20.8
              },
              {
                creationDuration: 1.1,
                overcookDuration: 20.9
              },
              {
                creationDuration: 1,
                overcookDuration: 22
              }
            ]
          }
        }
      }
    },
    doubleDiner: {
      stations: {
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 4
            },
            $levels: []
          }
        },
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 10,
              cookingTime: 6
            },
            $levels: []
          }
        },
        PrepStation_fryer: {
          $UpgradableStation: {
            inventoryKey: "burgerTime_fryer"
          },
          $station: {
            $component: "ActivatedGeneratorStation",
            $default: {
              creationDuration: 8,
              overcookDuration: 10,
              stockCreated: 1,
              canOvercook: true,
              startsFull: false,
              autoActivate: false,
              autoActivateDelay: 0
            },
            $levels: []
          }
        }
      }
    },
    kingOfTheGrill: {
      stations: {
        PrepStation_drink: {
          $UpgradableStation: {
            inventoryKey: "kingOfTheGrill_drinkMachine"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.25
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.15
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1
              }
            ]
          }
        },
        PrepStation_stove: {
          $UpgradableStation: {
            inventoryKey: "kingOfTheGrill_grill"
          },
          $station: {
            $component: "TimedTransformStation",
            $default: {
              canOvercook: true,
              overcookingTime: 10,
              cookingTime: 6
            },
            $levels: [
              {},
              {
                cookingTime: 6,
                overcookingTime: 10
              },
              {
                cookingTime: 5,
                overcookingTime: 11
              },
              {
                cookingTime: 4.4,
                overcookingTime: 11.6
              },
              {
                cookingTime: 3.9,
                overcookingTime: 12.1
              },
              {
                cookingTime: 3.5,
                overcookingTime: 13.5
              },
              {
                cookingTime: 3.1,
                overcookingTime: 13.9
              },
              {
                cookingTime: 2.8,
                overcookingTime: 14.3
              },
              {
                cookingTime: 2.6,
                overcookingTime: 14.5
              },
              {
                cookingTime: 2.4,
                overcookingTime: 14.7
              },
              {
                cookingTime: 2,
                overcookingTime: 14.9
              },
              {
                cookingTime: 1.8,
                overcookingTime: 15.1
              },
              {
                cookingTime: 1.7,
                overcookingTime: 15.3
              },
              {
                cookingTime: 1.6,
                overcookingTime: 15.4
              },
              {
                cookingTime: 1.5,
                overcookingTime: 15.5
              },
              {
                cookingTime: 1.4,
                overcookingTime: 15.6
              },
              {
                cookingTime: 1.3,
                overcookingTime: 15.7
              },
              {
                cookingTime: 1.2,
                overcookingTime: 15.8
              },
              {
                cookingTime: 1.1,
                overcookingTime: 15.9
              },
              {
                cookingTime: 1,
                overcookingTime: 16
              }
            ]
          }
        }
      }
    },
    tacoTime: {
      stations: {
        PrepStation_aguaFresca: {
          $UpgradableStation: {
            inventoryKey: "tacoTime_aguaFresca"
          },
          $station: {
            $component: "IngredientGeneratorStation",
            $default: {
              creationDuration: 6
            },
            $levels: [
              {},
              {
                creationDuration: 6
              },
              {
                creationDuration: 5
              },
              {
                creationDuration: 4.4
              },
              {
                creationDuration: 3.9
              },
              {
                creationDuration: 3.5
              },
              {
                creationDuration: 3.1
              },
              {
                creationDuration: 2.8
              },
              {
                creationDuration: 2.6
              },
              {
                creationDuration: 2.4
              },
              {
                creationDuration: 2.2
              },
              {
                creationDuration: 2.1
              },
              {
                creationDuration: 2
              },
              {
                creationDuration: 1.9
              },
              {
                creationDuration: 1.8
              },
              {
                creationDuration: 1.7
              },
              {
                creationDuration: 1.6
              },
              {
                creationDuration: 1.5
              },
              {
                creationDuration: 1.4
              },
              {
                creationDuration: 1.3
              },
              {
                creationDuration: 1.25
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.2
              },
              {
                creationDuration: 1.15
              },
              {
                creationDuration: 1.1
              },
              {
                creationDuration: 1
              }
            ]
          }
        }
      }
    }
  },
  soloModeUnlocks: [
    "dosaDash_classic"
  ],
  sceneLoadingTimeout: 3e4,
  sceneLoadingStepSize: 0.25,
  defaultRetryBackoffMS: [
    1e3
  ],
  rarity: {
    common: {
      colour: "#FFFFFF",
      order: 0
    },
    uncommon: {
      colour: "#94FF15",
      order: 1
    },
    rare: {
      colour: "#15E2FF",
      order: 2
    },
    epic: {
      colour: "#9809FF",
      order: 3
    },
    legendary: {
      colour: "#ff9700",
      order: 4
    }
  },
  lobbyFlow: {
    spectatorIntroTime: 15
  },
  schedule: {
    displayMode: "todayonly",
    daysShown: 0,
    weekly: {
      monday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ],
      tuesday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ],
      wednesday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ],
      thursday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ],
      friday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ],
      saturday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ],
      sunday: [
        {
          gameMode: "burgerTime",
          hideCountdown: true
        },
        {
          gameMode: "sushiMode",
          hideCountdown: true
        },
        {
          gameMode: "wurstNightmare",
          hideCountdown: true
        },
        {
          gameMode: "dosaDash",
          hideCountdown: true
        }
      ]
    },
    calendar: {},
    events: []
  },
  serverSettings: {
    configKey: "4.1",
    experimentsConfigKey: "",
    configName: "4.1-initial",
    configPollRate: 2,
    featureFlags: {
      autoShowSummer2021Started: false,
      autoShowSummer2021Calendar: false,
      fixedModeOrder: true,
      deactivateModeButtons: true,
      newsButton: true,
      matchType_classic: true,
      matchType_duel: false,
      followUsSnapcode: false,
      useTokensToUpgradeStations: false,
      interstitialAd_playButton: false,
      interstitialAd_startButton: false,
      interstitialAd_preAward: false,
      interstitialAd_postAward: false,
      interstitialAd_onPlayAgain: false,
      interstitialAd_ftueMatchComplete: false,
      rewardedAd_upgradeItem: false,
      watchAdForLootbox: false,
      boostCTA1: false,
      boostCTA2: false,
      boostCTA3: false,
      boostCTA4: true,
      boostCTA5: false,
      boostCTA6: false,
      hideHomeScreenAdButton: true,
      hideCountdownAdButton: true,
      asymmetricalKitchenMatching: true,
      eventLayer_valentine: false,
      characterCosmetics: true,
      tugOfWarWidget: false,
      beaconSupportButton: false,
      enableTutorialMatch: false,
      autostartFTUE_burgerTime: false,
      autostartFTUE_iceCreamParlour: false,
      autostartFTUE_breakfastClub: false,
      autostartFTUE_happyHour: false,
      autostartFTUE_dosaDash: false,
      autostartFTUE_potionParty: false,
      shorterTutorialStep: false,
      skipPostTutorScreen: false,
      debugTutorialButton: false,
      showHighScorePopup: true,
      matchVsHumans: true,
      limitBotTeamSizeTo1: false,
      playerSpeedNormal: true,
      playerSpeedFast: false,
      ftueIntroAnimation: false,
      debugTutorial: false,
      checkpointTutorial: true,
      tapToOpenLootbox: false,
      rewardedLootBox: false,
      rewardedLootBoxNotification: false,
      lootboxNotificationCopy1: true,
      lootboxNotificationCopy2: false,
      lootboxNotificationCopy3: false,
      happeningNowUseThumbnail: true,
      inventoryAfterLootbox: false,
      sortInventoryByNew: false,
      upgradeAdCooldown: false,
      showLeagueLeaderboard: false,
      leagueLeaderboardWarningNotification: false,
      leagueLeaderboardResetNotification: false,
      bombPassingGameplay: false,
      showHalloweenMood: false,
      showDefaultMood: true,
      dayOfTheDead: false,
      promptBoostOnHomeScreen: false,
      promptBoostOnPlayAgain: false,
      showLootboxVictoryRoad: false,
      autoPopupLootboxVictoryRoad: false,
      showWinterMood: false,
      newMojiAd: false,
      newMojiAdPopup: false,
      usernameMojiworks: false,
      displayStolenBubbles: true,
      showInviteFriendsButton: true,
      hidePVPButton: false,
      versusMode: true,
      scoreAttackMode: true,
      enableMobileLogo: false,
      globalLeaderboard: true,
      contextLeaderboard: false,
      playerXPEnabled: true,
      guildXPEnabled: true,
      inGameExitButtonPvE: true,
      tipsSystem: false,
      tipsSystemEverySession: true,
      showStarterPack: false,
      skipStageSelectorTimerReset: true,
      disableSessionSocketRetry: false,
      discordHelpForIAPUser: false,
      discordHelpForGoldPass: false,
      discordHelpFormPercentPlayer: true,
      filterOnAvailabiltyFlagForSKU: true,
      lobbyStatusWidgetsMobile: false,
      lobbyStatusWidgetsDesktop: true,
      sessionStartPromo: true,
      disablePromoLanguageCheck: false,
      disableBruteForceRenderBufferFix: false,
      checkForPurchaseButton: true,
      lowPowerMode_desktop: true,
      lowPowerMode_mobile: true,
      thievesRecruitButton: false,
      thievesRecruitPopUp: false
    },
    enableFTUE: false,
    stageForFTUE: "tutorial",
    scriptForFTUE: "pioneerFTUE",
    tickRate: 15,
    preambleTime: 5,
    maxClientWaitTime: 20,
    followOnWait: 0,
    abortedMatchTimeout: 120,
    zombieTimeoutSecs: 600,
    mutexForConversation: true,
    mutexAcrossMatches: 0,
    startDelaySeconds: 0,
    cappedBotUpdate: 1,
    lobbyFlow: {
      votingTime: 0,
      postVoteWait: 10,
      duelMode: {
        waitForFriend: 10
      }
    },
    schedule: {
      displayMode: "todayonly",
      daysShown: 0,
      weekly: {
        monday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ],
        tuesday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ],
        wednesday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ],
        thursday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ],
        friday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ],
        saturday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ],
        sunday: [
          {
            gameMode: "burgerTime",
            hideCountdown: true
          },
          {
            gameMode: "sushiMode",
            hideCountdown: true
          },
          {
            gameMode: "wurstNightmare",
            hideCountdown: true
          },
          {
            gameMode: "dosaDash",
            hideCountdown: true
          }
        ]
      },
      calendar: {},
      events: []
    },
    liveEvent: {
      name: "Summer 2021",
      eventInfoMessages: {
        Summer2021_Started: true,
        Summer2021_Calendar: true
      },
      calendar: {
        week1: [
          {
            dateId: "4/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "5/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "6/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "7/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "8/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "9/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "10/7/2021",
            dateDisplayName: ""
          }
        ],
        week2: [
          {
            dateId: "11/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "12/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "13/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "14/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "15/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "16/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "17/7/2021",
            dateDisplayName: ""
          }
        ],
        week3: [
          {
            dateId: "18/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "19/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "20/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "21/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "22/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "23/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "24/7/2021",
            dateDisplayName: ""
          }
        ],
        week4: [
          {
            dateId: "25/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "26/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "27/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "28/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "29/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "30/7/2021",
            dateDisplayName: ""
          },
          {
            dateId: "31/7/2021",
            dateDisplayName: ""
          }
        ]
      },
      calendarOffsetInMinutes: -300,
      currentTugOfWar: {
        eventId: "summer-2021-week-2",
        stageTeamA: "kingOfTheGrill",
        stageTeamB: "iceCreamParlour",
        previousRoundIds: [
          "summer-2021-week-1"
        ]
      }
    },
    eventUpdating: {
      minResultsBeforePush: 100,
      maxSecondsBeforePush: 300,
      updatePeriodSeconds: 300,
      minSecondsForVelocityCalculation: 300
    },
    replays: {
      enableRecording: false,
      enablePlayback: false,
      recordLosers: false,
      minimumOrders: 3,
      maximumOrders: 50,
      minimumScore: 50,
      deleteAfterPlays: 3,
      limitPerMode: 100,
      queryLimit: 50,
      avgLevelBand: 1
    },
    matchmakingDebug: {
      logNumMatchesForConvo: 5,
      logNumMatchesForSolo: 3
    },
    sessionConfig: {
      errorRecovery: {
        FIND_MATCH_FAILED: {
          captureException: true
        },
        JOIN_MATCH_FAILED: {
          captureException: true,
          retries: {
            max: 3,
            delayBetweenMS: 1e3
          }
        }
      }
    },
    versionMessages: {
      cssURL: "http://storage.googleapis.com/game-chef-server-popups/main.css",
      urls: {
        incompatible: "http://storage.googleapis.com/game-chef-server-popups/upgrade-game-no-css.html"
      },
      specificVersions: {
        none: "incompatible"
      },
      firstGoodVersion: {
        version: "2.10.3",
        url: "incompatible"
      }
    },
    botAvatars: [
      {
        name: "Dave",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Janice",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Margaret",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Dougal",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Ermintrude",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Brian",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Florence",
        avatarId: "null",
        cosmetic: ""
      },
      {
        name: "Dylan",
        avatarId: "null",
        cosmetic: ""
      }
    ],
    ftueBotAvatars: [
      {
        name: "Colette",
        avatarId: "null",
        cosmetic: "chefHat"
      }
    ],
    news: {
      enabled: false,
      list: []
    },
    maximumTeamSizes: {
      solo: 1,
      conversation: 5,
      spectators: 10
    },
    teamMatchmaking: {
      metrics: {
        teamSize: {},
        teamLevel: {
          averageAcrossTeamWithMultiplier: 1,
          optional: true
        }
      }
    },
    guildPass: {
      validBoostPacks: [
        "starterPack",
        "guildPass",
        "goldPass1",
        "goldPass2",
        "goldPass3",
        "goldPass5",
        "goldPass10"
      ],
      purchasePackId: "goldPass5",
      daysAddedOnBoost: 0,
      beforePurchasePromo: {
        promoId: "goldPassPromo",
        buttonCaption: "Get Gold Pass"
      },
      sessionStartPromo: {
        promoId: "goldPassPromo",
        userSessionCount: {
          showOn: 1
        }
      },
      defaultFreeItems: [
        "stage_burger_diner_score_attack"
      ],
      defaultBoostItems: [],
      levels: [
        {
          xpRequired: 5,
          freeTierItems: [
            "stage_burger_diner_versus"
          ],
          boostTierItems: [
            "character_roadie_chef"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [
            "stage_sushi_street_score_attack"
          ],
          boostTierItems: [
            "character_roadie_sushi_2"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [],
          boostTierItems: [
            "stage_burger_diner_score_attack_extreme"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [
            "character_roadie"
          ],
          boostTierItems: [
            "character_belle_chef"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [],
          boostTierItems: [
            "stage_happy_hour_score_attack"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [
            "stage_sushi_street_versus"
          ],
          boostTierItems: [
            "character_roadie_trash"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [],
          boostTierItems: [
            "stage_happy_hour_versus"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [
            "character_roadie_dirty"
          ],
          boostTierItems: [
            "character_funguy_chef"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [],
          boostTierItems: [
            "character_roadie_sushi"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [
            "stage_waffle_lodge_score_attack"
          ],
          boostTierItems: [
            "stage_waffle_lodge_versus"
          ]
        },
        {
          xpRequired: 200,
          freeTierItems: [],
          boostTierItems: [
            "stage_waffle_lodge_score_attack_extreme"
          ]
        },
        {
          xpRequired: 0,
          freeTierItems: [],
          boostTierItems: []
        }
      ],
      items: {
        stage_burger_diner_score_attack: {
          itemType: "stage",
          itemName: "burgerTimeScoreAttack",
          upperText: "gameMode_burgerTime",
          lowerText: "guild_pass_new_kitchen",
          borderColour: "#dc0063",
          gameMode: {
            type: "pve",
            stage: "burgerTimeScoreAttack"
          }
        },
        stage_burger_diner_score_attack_extreme: {
          itemType: "stage",
          itemName: "burgerTimeScoreAttackExtreme",
          upperText: "gameMode_burgerTime",
          lowerText: "guild_pass_hard_mode",
          borderColour: "#843aff",
          gameMode: {
            type: "pve",
            stage: "burgerTimeScoreAttackExtreme"
          }
        },
        stage_burger_diner_versus: {
          itemType: "stage",
          itemName: "burgerTime",
          upperText: "gameMode_burgerTime",
          lowerText: "guild_pass_versus",
          borderColour: "#dc0063",
          gameMode: {
            type: "classic",
            stage: "burgerTime"
          }
        },
        stage_sushi_street_score_attack: {
          itemType: "stage",
          itemName: "sushiModeScoreAttack",
          upperText: "gameMode_sushiMode",
          lowerText: "guild_pass_new_kitchen",
          borderColour: "#dc0063",
          gameMode: {
            type: "pve",
            stage: "sushiModeScoreAttack"
          }
        },
        stage_sushi_street_versus: {
          itemType: "stage",
          itemName: "sushiMode",
          upperText: "gameMode_sushiMode",
          lowerText: "guild_pass_versus",
          borderColour: "#dc0063",
          gameMode: {
            type: "classic",
            stage: "sushiMode"
          }
        },
        stage_waffle_lodge_score_attack: {
          itemType: "stage",
          itemName: "winterModeScoreAttack",
          upperText: "gameMode_winterMode",
          lowerText: "guild_pass_new_kitchen",
          borderColour: "#00B4BC",
          gameMode: {
            type: "pve",
            stage: "winterModeScoreAttack"
          }
        },
        stage_waffle_lodge_score_attack_extreme: {
          itemType: "stage",
          itemName: "winterModeScoreAttackExtreme",
          upperText: "gameMode_winterMode",
          lowerText: "guild_pass_hard_mode",
          borderColour: "#843aff",
          gameMode: {
            type: "pve",
            stage: "winterModeScoreAttackExtreme"
          }
        },
        stage_waffle_lodge_versus: {
          itemType: "stage",
          itemName: "winterMode",
          upperText: "gameMode_winterMode",
          lowerText: "guild_pass_versus",
          borderColour: "#dc0063",
          gameMode: {
            type: "classic",
            stage: "winterMode"
          }
        },
        stage_happy_hour_score_attack: {
          itemType: "stage",
          itemName: "happyHourScoreAttack",
          upperText: "gameMode_happyHour",
          lowerText: "guild_pass_new_kitchen",
          borderColour: "#dc0063",
          gameMode: {
            type: "pve",
            stage: "happyHourScoreAttack"
          }
        },
        stage_happy_hour_versus: {
          itemType: "stage",
          itemName: "happyHour",
          upperText: "gameMode_happyHour",
          lowerText: "guild_pass_versus",
          borderColour: "#dc0063",
          gameMode: {
            type: "classic",
            stage: "happyHour"
          }
        },
        character_chonk_chef: {
          itemType: "character",
          itemName: "chonk_chef",
          upperText: "guild_pass_new_skin",
          lowerText: "Chef",
          borderColour: "#D13554"
        },
        character_thin_chef: {
          itemType: "character",
          itemName: "thin_chef",
          upperText: "guild_pass_new_skin",
          lowerText: "Chef",
          borderColour: "#D13554"
        },
        character_funguy_chef: {
          itemType: "character",
          itemName: "funguy_chef",
          upperText: "guild_pass_new_skin",
          lowerText: "character_funguy_chef",
          borderColour: "#D13554"
        },
        character_belle_chef: {
          itemType: "character",
          itemName: "belle_chef",
          upperText: "guild_pass_new_skin",
          lowerText: "character_belle_chef",
          borderColour: "#D13554"
        },
        character_roadie: {
          itemType: "character",
          itemName: "roadie",
          upperText: "guild_pass_new_skin",
          lowerText: "character_roadie",
          borderColour: "#D13554"
        },
        character_roadie_chef: {
          itemType: "character",
          itemName: "roadie_chef",
          upperText: "guild_pass_new_skin",
          lowerText: "character_roadie_chef",
          borderColour: "#D13554"
        },
        character_roadie_trash: {
          itemType: "character",
          itemName: "roadie_trash",
          upperText: "guild_pass_new_skin",
          lowerText: "character_roadie_trash",
          borderColour: "#D13554"
        },
        character_roadie_dirty: {
          itemType: "character",
          itemName: "roadie_dirty",
          upperText: "guild_pass_new_skin",
          lowerText: "character_roadie_dirty",
          borderColour: "#D13554"
        },
        character_roadie_sushi: {
          itemType: "character",
          itemName: "roadie_sushi",
          upperText: "guild_pass_new_skin",
          lowerText: "character_roadie_sushi",
          borderColour: "#D13554"
        },
        character_roadie_sushi_2: {
          itemType: "character",
          itemName: "roadie_sushi_2",
          upperText: "guild_pass_new_skin",
          lowerText: "character_roadie_sushi_2",
          borderColour: "#D13554"
        }
      }
    },
    playerLevelConfig: {
      overshootMultiplier: 100,
      levels: [
        {
          xpRequired: 10
        },
        {
          xpRequired: 20
        },
        {
          xpRequired: 30
        },
        {
          xpRequired: 40
        },
        {
          xpRequired: 40
        },
        {
          xpRequired: 50
        },
        {
          xpRequired: 50
        },
        {
          xpRequired: 50
        },
        {
          xpRequired: 60
        },
        {
          xpRequired: 60
        },
        {
          xpRequired: 60
        },
        {
          xpRequired: 70
        },
        {
          xpRequired: 70
        },
        {
          xpRequired: 80
        },
        {
          xpRequired: 80
        },
        {
          xpRequired: 90
        },
        {
          xpRequired: 90
        },
        {
          xpRequired: 100
        },
        {
          xpRequired: 120
        },
        {
          xpRequired: 140
        },
        {
          xpRequired: 160
        },
        {
          xpRequired: 180
        },
        {
          xpRequired: 200
        },
        {
          xpRequired: 220
        },
        {
          xpRequired: 250
        },
        {
          xpRequired: 280
        },
        {
          xpRequired: 310
        },
        {
          xpRequired: 340
        },
        {
          xpRequired: 370
        },
        {
          xpRequired: 400
        },
        {
          xpRequired: 440
        },
        {
          xpRequired: 480
        },
        {
          xpRequired: 520
        },
        {
          xpRequired: 560
        },
        {
          xpRequired: 600
        },
        {
          xpRequired: 640
        },
        {
          xpRequired: 690
        },
        {
          xpRequired: 740
        },
        {
          xpRequired: 790
        },
        {
          xpRequired: 840
        },
        {
          xpRequired: 890
        },
        {
          xpRequired: 950
        },
        {
          xpRequired: 1010
        },
        {
          xpRequired: 1070
        },
        {
          xpRequired: 1140
        },
        {
          xpRequired: 1210
        },
        {
          xpRequired: 1280
        },
        {
          xpRequired: 1350
        },
        {
          xpRequired: 1430
        },
        {
          xpRequired: 1500
        },
        {
          xpRequired: 1570
        },
        {
          xpRequired: 1640
        },
        {
          xpRequired: 1730
        },
        {
          xpRequired: 1820
        },
        {
          xpRequired: 1910
        },
        {
          xpRequired: 2e3
        },
        {
          xpRequired: 2100
        },
        {
          xpRequired: 2200
        },
        {
          xpRequired: 2300
        }
      ]
    },
    kitchenVersusBalance: {
      potionParty: {
        orderValueMultiplier: 0.53
      },
      happyHour: {
        orderValueMultiplier: 0.58
      },
      iceCreamParlour: {
        orderValueMultiplier: 0.74
      },
      breakfastClub: {
        orderValueMultiplier: 0.77
      },
      sushiMode: {
        orderValueMultiplier: 0.86
      },
      winterMode: {
        orderValueMultiplier: 0.86
      },
      doubleDiner: {
        orderValueMultiplier: 0.93
      },
      wurstNightmare: {
        orderValueMultiplier: 0.97
      },
      burgerTime: {
        orderValueMultiplier: 1
      },
      dosaDash: {
        orderValueMultiplier: 0.048
      }
    },
    matchRewardsBalance: {
      classic: {
        playerXpForPvPWin: 15,
        playerXpForPvPLoss: 5,
        playerXPForPvePlay: []
      },
      pve: {
        playerXpForPvPWin: 0,
        playerXpForPvPLoss: 0,
        playerXPForPvePlay: [
          {
            levelReached: 0,
            playerXP: 5
          },
          {
            levelReached: 5,
            playerXP: 10
          },
          {
            levelReached: 10,
            playerXP: 15
          },
          {
            levelReached: 15,
            playerXP: 30
          },
          {
            levelReached: 20,
            playerXP: 40
          }
        ]
      },
      tutorial: {
        playerXpForPvPWin: 0,
        playerXpForPvPLoss: 0,
        playerXPForPvePlay: []
      },
      duel: {
        playerXpForPvPWin: 0,
        playerXpForPvPLoss: 0,
        playerXPForPvePlay: []
      }
    },
    gameModeDefinitions: {
      burgerTime: {
        displayName: "Burger Time",
        matchTypes: {
          classic: {
            scene: 762792,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "burgerTime_classic",
            gameplayBalance: {
              salePrices: {
                basic_burger: 10,
                drink: 5,
                fries: 7,
                salad: 3
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                singleOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "salad",
                      "salad"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "drink",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "salad",
                      "salad",
                      "salad"
                    ]
                  }
                ],
                specialOrder: [
                  {
                    value: [
                      "drink",
                      "drink",
                      "drink",
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "drink",
                      "drink",
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "drink",
                      "drink",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "salad",
                      "salad",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "fries",
                      "fries",
                      "basic_burger",
                      "basic_burger"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 50,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 50,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 1
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      burgerTimeScoreAttack: {
        displayName: "Burger Time",
        matchTypes: {
          pve: {
            scene: 762792,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "burgerTime_classic",
            gameplayBalance: {
              salePrices: {
                basic_burger: 10,
                drink: 5,
                fries: 7,
                salad: 3
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              run: [
                {
                  options: [
                    "tutorial_wave",
                    "tutorial_wave_b"
                  ]
                },
                {
                  options: [
                    "wave_2_a",
                    "wave_2_b",
                    "wave_2_c",
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c"
                  ]
                },
                {
                  options: [
                    "wave_2_a",
                    "wave_2_b",
                    "wave_2_c",
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_5_introduce_wildcards"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_9_introduce_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_13_harder_moneybags"
                  ]
                }
              ],
              waves: {
                tutorial_wave: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderSalad",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderDrink",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderFries",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderBurger",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                tutorial_wave_b: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderDrink",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderSalad",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderBurger",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderFries",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderFries",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderBurger",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderFries",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderBurger",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderComplex",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_5_introduce_wildcards: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "ANYTHING GOES"
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_9_introduce_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 25
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_12: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrderSimple",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_13_harder_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 25
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_15: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ]
              },
              blueprints: {
                singleOrderDrink: [
                  {
                    value: [
                      "drink"
                    ]
                  }
                ],
                singleOrderSalad: [
                  {
                    value: [
                      "salad"
                    ]
                  }
                ],
                singleOrderBurger: [
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                singleOrderFries: [
                  {
                    value: [
                      "fries"
                    ]
                  }
                ],
                singleOrderSimple: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  }
                ],
                singleOrderComplex: [
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                singleOrderAny: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                burgerAndThingEasy: [
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  }
                ],
                burgerAndThingHard: [
                  {
                    value: [
                      "salad",
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "fries"
                    ]
                  }
                ],
                burgerAndFriesOrder: [
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries"
                    ]
                  }
                ],
                saladMania: [
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "fries"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "basic_burger",
                      "basic_burger",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "salad",
                      "salad"
                    ]
                  }
                ],
                deliveryOrder: [
                  {
                    value: [
                      "fries",
                      "fries",
                      "fries",
                      "basic_burger",
                      "basic_burger",
                      "basic_burger"
                    ]
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0.1
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0.05
            }
          }
        }
      },
      burgerTimeScoreAttackExtreme: {
        displayName: "Burger Time",
        matchTypes: {
          pve: {
            scene: 762792,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "burgerTime_classic",
            gameplayBalance: {
              salePrices: {
                basic_burger: 10,
                drink: 5,
                fries: 7,
                salad: 3,
                burger_salad: 12
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              run: [
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_9_introduce_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_13_harder_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_13_harder_moneybags"
                  ]
                }
              ],
              waves: {
                wave_3_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_b: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderComplex",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_a: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_9_introduce_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 25
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_12: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrderSimple",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_13_harder_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 25
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 35
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_15: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "burgerAndThingHard",
                    time: 30
                  },
                  {
                    type: "saladMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "burgerAndFriesOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "saladMania",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "burgerAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ]
              },
              blueprints: {
                singleOrderDrink: [
                  {
                    value: [
                      "drink"
                    ]
                  }
                ],
                singleOrderSalad: [
                  {
                    value: [
                      "salad"
                    ]
                  }
                ],
                singleOrderBurger: [
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                singleOrderFries: [
                  {
                    value: [
                      "fries"
                    ]
                  }
                ],
                singleOrderBurgerSalad: [
                  {
                    value: [
                      "burger_salad"
                    ]
                  }
                ],
                singleOrderSimple: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  }
                ],
                singleOrderComplex: [
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "burger_salad"
                    ]
                  }
                ],
                singleOrderAny: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "burger_salad"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "burger_salad"
                    ]
                  }
                ],
                burgerAndThingEasy: [
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "burger_salad"
                    ]
                  }
                ],
                burgerAndThingHard: [
                  {
                    value: [
                      "salad",
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "burger_salad"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "fries"
                    ]
                  }
                ],
                burgerAndFriesOrder: [
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "burger_salad",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "burger_salad"
                    ]
                  }
                ],
                saladMania: [
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "burger_salad"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "basic_burger",
                      "basic_burger",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "burger_salad",
                      "burger_salad",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "burger_salad",
                      "burger_salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "burger_salad",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "fries",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "salad",
                      "salad"
                    ]
                  }
                ],
                deliveryOrder: [
                  {
                    value: [
                      "fries",
                      "fries",
                      "fries",
                      "burger_salad",
                      "burger_salad",
                      "burger_salad"
                    ]
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0.1
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0.075
            }
          }
        }
      },
      happyHour: {
        displayName: "Happy Hour",
        matchTypes: {
          classic: {
            scene: 804467,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "happyHour_classic",
            gameplayBalance: {
              salePrices: {
                milkshake: 5,
                root_beer: 5,
                soda: 5,
                drink: 5,
                coffee: 5,
                agua_fresca: 5
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                singleOrder: [
                  {
                    value: [
                      "soda"
                    ]
                  },
                  {
                    value: [
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "soda"
                    ]
                  },
                  {
                    value: [
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "coffee"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "coffee"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink",
                      "drink"
                    ]
                  }
                ],
                specialOrder: [
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink",
                      "drink"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 50,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 50,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 1
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.1,
                defaultSettings: {
                  minActionTime: 1,
                  maxActionTime: 5
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      happyHourScoreAttack: {
        displayName: "Happy Hour",
        matchTypes: {
          pve: {
            scene: 804467,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "happyHour_classic",
            gameplayBalance: {
              salePrices: {
                milkshake: 5,
                root_beer: 5,
                soda: 5,
                drink: 5,
                coffee: 5,
                agua_fresca: 5
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                singleOrderSoda: [
                  {
                    value: [
                      "soda"
                    ]
                  }
                ],
                singleOrderMilkshake: [
                  {
                    value: [
                      "milkshake"
                    ]
                  }
                ],
                singleOrderRootBeer: [
                  {
                    value: [
                      "root_beer"
                    ]
                  }
                ],
                singleOrderCoffee: [
                  {
                    value: [
                      "coffee"
                    ]
                  }
                ],
                singleOrderDrink: [
                  {
                    value: [
                      "drink"
                    ]
                  }
                ],
                singleOrderAquaFresca: [
                  {
                    value: [
                      "agua_fresca"
                    ]
                  }
                ],
                singleOrder: [
                  {
                    value: [
                      "soda"
                    ]
                  },
                  {
                    value: [
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "soda"
                    ]
                  },
                  {
                    value: [
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "coffee"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "coffee"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "milkshake",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "drink",
                      "drink"
                    ]
                  }
                ],
                specialOrder: [
                  {
                    value: [
                      "soda",
                      "soda",
                      "soda",
                      "milkshake",
                      "milkshake",
                      "milkshake"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "soda",
                      "root_beer",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "soda",
                      "agua_fresca",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "soda",
                      "coffee",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "soda",
                      "soda",
                      "soda",
                      "drink",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "milkshake",
                      "root_beer",
                      "root_beer",
                      "root_beer"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "milkshake",
                      "agua_fresca",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "milkshake",
                      "coffee",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "milkshake",
                      "milkshake",
                      "milkshake",
                      "drink",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "root_beer",
                      "agua_fresca",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "root_beer",
                      "coffee",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "root_beer",
                      "root_beer",
                      "root_beer",
                      "drink",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "agua_fresca",
                      "coffee",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "agua_fresca",
                      "agua_fresca",
                      "agua_fresca",
                      "drink",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "coffee",
                      "coffee",
                      "coffee",
                      "drink",
                      "drink",
                      "drink"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_9_introduce_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_13_harder_moneybags"
                  ]
                }
              ],
              waves: {
                wave_2_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_9_introduce_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 35,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_12: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 17,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_13_harder_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 25,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 17
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 25
                  },
                  {
                    type: "moneybag_order",
                    time: 25,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 17
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 17
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 17
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrder",
                    time: 17
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 17,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 17,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_15: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 25
                  },
                  {
                    type: "mediumOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.1,
                defaultSettings: {
                  minActionTime: 1,
                  maxActionTime: 5
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0.1
            }
          }
        }
      },
      sushiMode: {
        displayName: "Sushi Mode",
        matchTypes: {
          classic: {
            scene: 832201,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "sushiMode_classic",
            gameplayBalance: {
              salePrices: {
                rice: 5,
                salmon_sushi: 9,
                omlette_sushi_seaweed: 9,
                green_tea: 5
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                singleOrder: [
                  {
                    value: [
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "green_tea",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "rice",
                      "green_tea",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "green_tea",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "salmon_sushi",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "rice",
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                specialOrder: [
                  {
                    value: [
                      "rice",
                      "rice",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "salmon_sushi",
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 1
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 7
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      sushiModeScoreAttack: {
        displayName: "Sushi Mode",
        matchTypes: {
          pve: {
            scene: 832201,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "sushiMode_classic",
            gameplayBalance: {
              salePrices: {
                omlette_sushi_seaweed: 10,
                green_tea: 5,
                salmon_sushi: 7,
                rice: 3
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              run: [
                {
                  options: [
                    "tutorial_wave",
                    "tutorial_wave_b"
                  ]
                },
                {
                  options: [
                    "wave_2_a",
                    "wave_2_b",
                    "wave_2_c",
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c"
                  ]
                },
                {
                  options: [
                    "wave_2_a",
                    "wave_2_b",
                    "wave_2_c",
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_5_introduce_wildcards"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_9_introduce_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_13_harder_moneybags"
                  ]
                }
              ],
              waves: {
                tutorial_wave: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderRice",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderDrink",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSalmon",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderOmlette",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                tutorial_wave_b: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderDrink",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderRice",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderOmlette",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSalmon",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderSalmon",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderOmlette",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSalmon",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderOmlette",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderComplex",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_5_introduce_wildcards: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "ANYTHING GOES"
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 35
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_9_introduce_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 25
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 35
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_12: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrderSimple",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 30
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_13_harder_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 30
                  },
                  {
                    type: "riceMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 30
                  },
                  {
                    type: "riceMania",
                    time: 25
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 30
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "riceMania",
                    time: 35
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_15: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "omletteAndThingHard",
                    time: 30
                  },
                  {
                    type: "riceMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleSushiOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "riceMania",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "omletteAndThingEasy",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ]
              },
              blueprints: {
                singleOrderDrink: [
                  {
                    value: [
                      "green_tea"
                    ]
                  }
                ],
                singleOrderRice: [
                  {
                    value: [
                      "rice"
                    ]
                  }
                ],
                singleOrderSalmon: [
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  }
                ],
                singleOrderOmlette: [
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                singleOrderSimple: [
                  {
                    value: [
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice"
                    ]
                  }
                ],
                singleOrderComplex: [
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                singleOrderAny: [
                  {
                    value: [
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                omletteAndThingEasy: [
                  {
                    value: [
                      "rice",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                omletteAndThingHard: [
                  {
                    value: [
                      "rice",
                      "rice",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "omlette_sushi_seaweed"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "rice",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "green_tea",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "salmon_sushi"
                    ]
                  }
                ],
                doubleSushiOrder: [
                  {
                    value: [
                      "salmon_sushi",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "salmon_sushi"
                    ]
                  }
                ],
                riceMania: [
                  {
                    value: [
                      "rice",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "rice",
                      "salmon_sushi"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed",
                      "salmon_sushi"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed",
                      "green_tea",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "green_tea",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "salmon_sushi",
                      "green_tea"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "salmon_sushi",
                      "omlette_sushi_seaweed"
                    ]
                  },
                  {
                    value: [
                      "salmon_sushi",
                      "salmon_sushi",
                      "rice",
                      "rice"
                    ]
                  },
                  {
                    value: [
                      "omlette_sushi_seaweed",
                      "rice",
                      "rice"
                    ]
                  }
                ],
                deliveryOrder: [
                  {
                    value: [
                      "salmon_sushi",
                      "salmon_sushi",
                      "salmon_sushi",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed",
                      "omlette_sushi_seaweed"
                    ]
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0.1
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0.05
            }
          }
        }
      },
      winterMode: {
        displayName: "Hut Chocolate",
        matchTypes: {
          classic: {
            scene: 826443,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "winterMode_classic",
            gameplayBalance: {
              salePrices: {
                hot_choc: 2,
                hot_choc_marshmallows: 5,
                hot_choc_sprinkles: 5,
                waffle_with_cream: 7,
                waffle: 5
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                singleOrder: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc",
                      "hot_choc"
                    ]
                  }
                ],
                specialOrder: [
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc",
                      "hot_choc"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 1
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.2,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 6
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      winterModeScoreAttack: {
        displayName: "Hut Chocolate",
        matchTypes: {
          pve: {
            scene: 826443,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "winterMode_classic",
            gameplayBalance: {
              salePrices: {
                hot_choc: 2,
                hot_choc_sprinkles: 4,
                waffle_with_cream: 7,
                waffle: 5
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              run: [
                {
                  options: [
                    "tutorial_wave",
                    "tutorial_wave_b"
                  ]
                },
                {
                  options: [
                    "wave_2_a",
                    "wave_2_b",
                    "wave_2_c",
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c"
                  ]
                },
                {
                  options: [
                    "wave_2_a",
                    "wave_2_b",
                    "wave_2_c",
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_5_introduce_wildcards"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_9_introduce_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_13_harder_moneybags"
                  ]
                }
              ],
              waves: {
                tutorial_wave: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderWaffle",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderDrink",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderWaffleCream",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderDrinkSprinkles",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                tutorial_wave_b: [
                  {
                    type: "round_start",
                    time: 3
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderDrink",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderDrinkSprinkles",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderWaffle",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderWaffleCream",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderSimple",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_2_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderWaffle",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderWaffleCream",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderWaffle",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "singleOrderWaffleCream",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderComplex",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_5_introduce_wildcards: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "ANYTHING GOES"
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_9_introduce_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 25
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_12: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrderSimple",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_13_harder_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 25
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_15: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ]
              },
              blueprints: {
                singleOrderDrink: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  }
                ],
                singleOrderDrinkSprinkles: [
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  }
                ],
                singleOrderWaffle: [
                  {
                    value: [
                      "waffle"
                    ]
                  }
                ],
                singleOrderWaffleCream: [
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                singleOrderSimple: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  }
                ],
                singleOrderComplex: [
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                singleOrderAny: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                waffleAndThingEasy: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "waffle_with_cream"
                    ]
                  }
                ],
                waffleAndThingHard: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_choc",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle"
                    ]
                  }
                ],
                doubleWaffleOrder: [
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle"
                    ]
                  }
                ],
                sprinkleMania: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  }
                ],
                deliveryOrder: [
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "waffle",
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "waffle_with_cream"
                    ]
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0.1
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0.05
            }
          }
        }
      },
      winterModeScoreAttackExtreme: {
        displayName: "Hut Chocolate",
        matchTypes: {
          pve: {
            scene: 826443,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "winterMode_classic",
            gameplayBalance: {
              salePrices: {
                hot_choc: 2,
                hot_choc_marshmallows: 4,
                hot_choc_sprinkles: 4,
                waffle_with_cream: 7,
                waffle_with_syrup: 7,
                waffle: 5
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              run: [
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_3_a",
                    "wave_3_b",
                    "wave_3_c",
                    "wave_4_a",
                    "wave_4_b",
                    "wave_4_c",
                    "wave_6_a",
                    "wave_6_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_6_a",
                    "wave_6_b",
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_7_a",
                    "wave_7_b",
                    "wave_7_c",
                    "wave_8_a",
                    "wave_8_b",
                    "wave_10_a",
                    "wave_10_b"
                  ]
                },
                {
                  options: [
                    "wave_9_introduce_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_10_a",
                    "wave_10_b",
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_13_harder_moneybags"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15"
                  ]
                },
                {
                  options: [
                    "wave_11_a",
                    "wave_11_b",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_12",
                    "wave_14",
                    "wave_14_b",
                    "wave_15",
                    "wave_13_harder_moneybags"
                  ]
                }
              ],
              waves: {
                wave_3_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderComplex",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_3_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderComplex",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_4_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_6_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 35,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_7_c: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "singleOrderAny",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_8_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_9_introduce_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_10_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_a: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_11_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "singleOrderAny",
                    time: 25
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 10
                  },
                  {
                    type: "wildcard_order",
                    time: 25,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 40
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_12: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 3
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "singleOrderSimple",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 20,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_13_harder_moneybags: [
                  {
                    type: "round_start",
                    time: 2,
                    message: "DELIVERY ORDER"
                  },
                  {
                    type: "set_slots_to",
                    value: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 30,
                    multiplier: 5,
                    blueprint: "deliveryOrder"
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 20
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "singleOrderAny",
                    time: 30
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_14_b: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 25
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 35
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "easyOrder",
                    time: 30,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ],
                wave_15: [
                  {
                    type: "round_start",
                    time: 2
                  },
                  {
                    type: "set_slots_to",
                    value: 4
                  },
                  {
                    type: "waffleAndThingHard",
                    time: 30
                  },
                  {
                    type: "sprinkleMania",
                    time: 25
                  },
                  {
                    type: "wildcard_order",
                    time: 15,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "doubleWaffleOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 35
                  },
                  {
                    type: "sprinkleMania",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "waffleAndThingEasy",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "hardOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 30
                  },
                  {
                    type: "easyOrder",
                    time: 25,
                    mood: 0.6
                  },
                  {
                    type: "round_end",
                    time: 2
                  }
                ]
              },
              blueprints: {
                singleOrderDrink: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  }
                ],
                singleOrderDrinkSprinkles: [
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  }
                ],
                singleOrderDrinkMallows: [
                  {
                    value: [
                      "hot_choc_marshmallows"
                    ]
                  }
                ],
                singleOrderWaffle: [
                  {
                    value: [
                      "waffle"
                    ]
                  }
                ],
                singleOrderWaffleCream: [
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                singleOrderWaffleSyrup: [
                  {
                    value: [
                      "waffle_with_syrup"
                    ]
                  }
                ],
                singleOrderSimple: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows"
                    ]
                  }
                ],
                singleOrderComplex: [
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup"
                    ]
                  }
                ],
                singleOrderAny: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "hot_choc_marshmallows"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  }
                ],
                waffleAndThingEasy: [
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "waffle_with_syrup"
                    ]
                  }
                ],
                waffleAndThingHard: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "hot_choc_marshmallows",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_choc",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "hot_choc_marshmallows",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_choc",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_syrup"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_marshmallows",
                      "waffle"
                    ]
                  }
                ],
                doubleWaffleOrder: [
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_syrup"
                    ]
                  }
                ],
                sprinkleMania: [
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "hot_choc_marshmallows"
                    ]
                  },
                  {
                    value: [
                      "hot_choc_sprinkles",
                      "waffle"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle_with_syrup",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle_with_syrup",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "hot_choc",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "hot_choc_marshmallows",
                      "hot_choc_marshmallows"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "hot_choc_marshmallows",
                      "hot_choc_marshmallows"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "hot_choc_sprinkles",
                      "hot_choc_sprinkles"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "hot_choc_marshmallows",
                      "hot_choc_marshmallows"
                    ]
                  }
                ],
                deliveryOrder: [
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "waffle",
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle",
                      "waffle",
                      "waffle_with_syrup",
                      "waffle_with_syrup",
                      "waffle_with_syrup"
                    ]
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0.1
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0.05
            }
          }
        }
      },
      tutorial: {
        displayName: "Tutorial",
        matchTypes: {
          tutorial: {
            scene: 1697450,
            customerSlots: 4,
            enabled: false,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "",
            gameplayBalance: {
              salePrices: {
                basic_burger: 8,
                drink: 6,
                salad: 5
              },
              tips: {
                high: 2,
                mid: 2,
                low: 2
              },
              blueprints: {
                drinkOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  }
                ],
                saladOrder: [
                  {
                    value: [
                      "salad"
                    ]
                  }
                ],
                burgerOrder: [
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                saladAndDrinkOrder: [
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  }
                ],
                drinkAndDrinkOrder: [
                  {
                    value: [
                      "drink",
                      "drink"
                    ]
                  }
                ],
                burgerAndSaladOrder: [
                  {
                    value: [
                      "basic_burger",
                      "salad"
                    ]
                  }
                ],
                burgerAndDrinkOrder: [
                  {
                    value: [
                      "basic_burger",
                      "drink"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "lock_to_position",
                    value: 0
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "patient_order",
                    time: 7e3,
                    blueprint: "saladOrder"
                  },
                  {
                    type: "patient_order",
                    time: 5e3,
                    blueprint: "drinkOrder"
                  },
                  {
                    type: "patient_order",
                    time: 8e3,
                    blueprint: "burgerOrder"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "unlock_positions"
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladAndDrinkOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "saladOrder",
                    time: 40
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "drinkOrder",
                    time: 40
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 5
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      breakfastClub: {
        displayName: "Breakfast Club",
        matchTypes: {
          classic: {
            scene: 804466,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "breakfastClub_classic",
            gameplayBalance: {
              salePrices: {
                coffee: 5,
                waffle: 7,
                waffle_with_cream: 9,
                waffle_with_syrup: 9
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "waffle"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "coffee",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "waffle",
                      "waffle_with_cream"
                    ]
                  },
                  {
                    value: [
                      "waffle",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "coffee"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "coffee",
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle",
                      "waffle"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "coffee",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "coffee",
                      "coffee"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle_with_syrup",
                      "coffee"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_cream",
                      "waffle_with_cream",
                      "waffle_with_syrup"
                    ]
                  },
                  {
                    value: [
                      "waffle_with_syrup",
                      "waffle_with_syrup",
                      "waffle_with_cream"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 60,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "largeOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.1,
                defaultSettings: {
                  minActionTime: 1,
                  maxActionTime: 4
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      potionParty: {
        displayName: "Potion Party",
        matchTypes: {
          classic: {
            scene: 806836,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "potionParty_classic",
            gameplayBalance: {
              salePrices: {
                purple_punch: 7,
                green_punch: 7,
                green_punch_with_eyeball: 9,
                purple_punch_with_eyeball: 9
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "purple_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "green_punch_with_eyeball"
                    ]
                  },
                  {
                    value: [
                      "purple_punch_with_eyeball"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "purple_punch_with_eyeball",
                      "green_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch_with_eyeball",
                      "purple_punch"
                    ]
                  },
                  {
                    value: [
                      "purple_punch_with_eyeball",
                      "purple_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch_with_eyeball",
                      "green_punch"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "purple_punch_with_eyeball",
                      "green_punch",
                      "green_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch_with_eyeball",
                      "purple_punch",
                      "purple_punch"
                    ]
                  },
                  {
                    value: [
                      "purple_punch_with_eyeball",
                      "purple_punch",
                      "purple_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch_with_eyeball",
                      "green_punch",
                      "green_punch"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "purple_punch_with_eyeball",
                      "purple_punch_with_eyeball",
                      "green_punch",
                      "green_punch"
                    ]
                  },
                  {
                    value: [
                      "purple_punch_with_eyeball",
                      "purple_punch_with_eyeball",
                      "purple_punch",
                      "purple_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch_with_eyeball",
                      "green_punch_with_eyeball",
                      "green_punch",
                      "green_punch"
                    ]
                  },
                  {
                    value: [
                      "green_punch_with_eyeball",
                      "green_punch_with_eyeball",
                      "purple_punch",
                      "purple_punch"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 60,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "largeOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 7
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      wurstNightmare: {
        displayName: "Winter Wiener",
        matchTypes: {
          classic: {
            scene: 835008,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "wurstNightmare_classic",
            gameplayBalance: {
              salePrices: {
                hot_choc: 5,
                hot_dog: 7,
                chilli_dog: 11
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "hot_choc"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "hot_dog"
                    ]
                  },
                  {
                    value: [
                      "chilli_dog"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "hot_choc",
                      "chilli_dog"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_dog"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "hot_choc",
                      "hot_dog"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "chilli_dog"
                    ]
                  },
                  {
                    value: [
                      "chilli_dog",
                      "hot_dog"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "chilli_dog",
                      "chilli_dog",
                      "hot_dog"
                    ]
                  },
                  {
                    value: [
                      "hot_dog",
                      "hot_dog",
                      "chilli_dog"
                    ]
                  },
                  {
                    value: [
                      "hot_choc",
                      "hot_choc",
                      "chilli_dog"
                    ]
                  },
                  {
                    value: [
                      "hot_dog",
                      "hot_choc",
                      "hot_choc"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 60
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "smallOrder",
                    time: 70
                  },
                  {
                    type: "tinyOrder",
                    time: 40
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 80
                  },
                  {
                    type: "mediumOrder",
                    time: 80
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 80
                  },
                  {
                    type: "smallOrder",
                    time: 50
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "largeOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "wildcard_order",
                    time: 50,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "largeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 4,
                  maxActionTime: 9
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      lunarNewYear: {
        displayName: "Lunar New Year",
        matchTypes: {
          classic: {
            scene: 865329,
            customerSlots: 4,
            enabled: false,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "lunarNewYear_classic",
            gameplayBalance: {
              salePrices: {
                noodle_soup: 7,
                steamed_fish: 11,
                steamed_dumpling: 9
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "noodle_soup"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "steamed_fish"
                    ]
                  },
                  {
                    value: [
                      "steamed_dumpling"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "steamed_fish",
                      "noodle_soup"
                    ]
                  },
                  {
                    value: [
                      "steamed_dumpling",
                      "noodle_soup"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "noodle_soup",
                      "noodle_soup",
                      "steamed_fish"
                    ]
                  },
                  {
                    value: [
                      "noodle_soup",
                      "noodle_soup",
                      "steamed_dumpling"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "noodle_soup",
                      "steamed_fish",
                      "steamed_fish"
                    ]
                  },
                  {
                    value: [
                      "noodle_soup",
                      "steamed_dumpling",
                      "steamed_dumpling"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 60,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "largeOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 5
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      iceCreamParlour: {
        displayName: "Ice Cream Parlour",
        matchTypes: {
          classic: {
            scene: 897070,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "iceCreamParlour_classic",
            gameplayBalance: {
              salePrices: {
                ice_lolly: 3,
                cone_scoop_berry: 7,
                cone_scoop_mango: 7,
                cone_scoop_mint: 7,
                cone_soft_serve: 8,
                cone_scoop_berry_mango_mint: 9,
                coconut_scoop_berry_mango_mint: 9
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mango"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "ice_lolly",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "cone_scoop_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_soft_serve"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "cone_soft_serve",
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "cone_soft_serve",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "cone_soft_serve",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_soft_serve",
                      "cone_scoop_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry",
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mango",
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_scoop_mint"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "cone_scoop_mango",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_mango",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry",
                      "cone_scoop_mango",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mango",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mango",
                      "cone_scoop_mint",
                      "cone_scoop_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry",
                      "cone_scoop_mint",
                      "cone_scoop_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry_mango_mint",
                      "coconut_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_soft_serve"
                    ]
                  },
                  {
                    value: [
                      "cone_soft_serve",
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry_mango_mint",
                      "ice_lolly",
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "coconut_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "cone_scoop_mango",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "ice_lolly",
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_mint",
                      "cone_scoop_mango",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry",
                      "cone_scoop_berry",
                      "cone_scoop_mango",
                      "cone_scoop_mango"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_mint",
                      "cone_scoop_mint",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry_mango_mint",
                      "coconut_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_soft_serve"
                    ]
                  },
                  {
                    value: [
                      "cone_soft_serve",
                      "cone_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "cone_scoop_berry_mango_mint",
                      "ice_lolly",
                      "ice_lolly"
                    ]
                  },
                  {
                    value: [
                      "ice_lolly",
                      "ice_lolly",
                      "coconut_scoop_berry_mango_mint"
                    ]
                  },
                  {
                    value: [
                      "coconut_scoop_berry_mango_mint",
                      "cone_scoop_berry",
                      "cone_scoop_berry"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 55
                  },
                  {
                    type: "tinyOrder",
                    time: 55
                  },
                  {
                    type: "smallOrder",
                    time: 65
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 65
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 65,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 75
                  },
                  {
                    type: "mediumOrder",
                    time: 75
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 65
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 75
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 75,
                    multiplier: 2,
                    blueprint: "largeOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 65
                  },
                  {
                    type: "mediumOrder",
                    time: 65
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 55
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 55
                  },
                  {
                    type: "hugeOrder",
                    time: 75
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 65
                  },
                  {
                    type: "hugeOrder",
                    time: 75
                  },
                  {
                    type: "mediumOrder",
                    time: 55
                  },
                  {
                    type: "largeOrder",
                    time: 65
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 65
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.1,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 5
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      dosaDash: {
        displayName: "Dosa Dash",
        matchTypes: {
          classic: {
            scene: 975064,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "dosaDash_classic",
            gameplayBalance: {
              salePrices: {
                coffee_india: 70,
                sambar: 100,
                dosa_masala_coconut: 190,
                dosa_coconut: 150,
                medu_vada_tomato: 170,
                dosa_masala_tomato: 190,
                dosa_tomato: 150,
                medu_vada_coconut: 170
              },
              tips: {
                high: 50,
                mid: 25,
                low: 0
              },
              blueprints: {
                singleOrder: [
                  {
                    value: [
                      "coffee_india"
                    ]
                  },
                  {
                    value: [
                      "sambar"
                    ]
                  },
                  {
                    value: [
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_coconut"
                    ]
                  }
                ],
                easyOrder: [
                  {
                    value: [
                      "coffee_india"
                    ]
                  },
                  {
                    value: [
                      "sambar"
                    ]
                  },
                  {
                    value: [
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "sambar"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "dosa_tomato"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "dosa_coconut"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "dosa_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "dosa_coconut"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "dosa_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_coconut"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_coconut",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_tomato",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "coffee_india",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "coffee_india",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "sambar",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "sambar",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  }
                ],
                hardOrder: [
                  {
                    value: [
                      "coffee_india",
                      "coffee_india",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "coffee_india",
                      "coffee_india",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "sambar",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "sambar",
                      "sambar",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut",
                      "dosa_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato",
                      "dosa_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_coconut",
                      "dosa_masala_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_tomato",
                      "dosa_masala_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  }
                ],
                specialOrder: [
                  {
                    value: [
                      "dosa_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_coconut",
                      "dosa_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_tomato",
                      "dosa_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_coconut",
                      "dosa_masala_coconut",
                      "medu_vada_tomato",
                      "medu_vada_tomato"
                    ]
                  },
                  {
                    value: [
                      "dosa_masala_tomato",
                      "dosa_masala_tomato",
                      "medu_vada_coconut",
                      "medu_vada_coconut"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 2,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "delay",
                    time: 1
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 40,
                    multiplier: 2,
                    blueprint: "specialOrder"
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "hardOrder",
                    time: 40
                  },
                  {
                    type: "easyOrder",
                    time: 30
                  },
                  {
                    type: "wildcard_order",
                    time: 30,
                    value: 10
                  },
                  {
                    type: "singleOrder",
                    time: 20
                  },
                  {
                    type: "mediumOrder",
                    time: 35
                  },
                  {
                    type: "delay",
                    time: 1
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.1,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 1
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      doubleDiner: {
        displayName: "Double Diner",
        matchTypes: {
          classic: {
            scene: 1026834,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "doubleDiner_classic",
            gameplayBalance: {
              salePrices: {
                basic_burger: 10,
                drink: 5,
                fries: 7
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "fries"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "drink",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "fries",
                      "basic_burger"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "fries",
                      "fries",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "fries"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "basic_burger",
                      "basic_burger",
                      "fries"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "basic_burger",
                      "drink",
                      "drink"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 60,
                    multiplier: 2,
                    blueprint: "smallOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "smallOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      kingOfTheGrill: {
        displayName: "King of the Grill",
        matchTypes: {
          classic: {
            scene: 1154022,
            customerSlots: 4,
            enabled: true,
            isEventMode: false,
            eventEndTime: "",
            associatedUnlock: "kingOfTheGrill_classic",
            gameplayBalance: {
              salePrices: {
                basic_burger: 7,
                drink: 3,
                hot_dog: 7,
                salad: 3,
                hot_dog_salad: 8,
                burger_salad: 8,
                chilli_dog: 8
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "drink"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "hot_dog"
                    ]
                  },
                  {
                    value: [
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "drink"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "drink",
                      "hot_dog"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "hot_dog"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "hot_dog_salad"
                    ]
                  },
                  {
                    value: [
                      "burger_salad"
                    ]
                  },
                  {
                    value: [
                      "chilli_dog"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "hot_dog",
                      "hot_dog",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "hot_dog",
                      "hot_dog",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "chilli_dog"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "hot_dog_salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "burger_salad"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "salad",
                      "salad",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "drink",
                      "drink",
                      "basic_burger",
                      "basic_burger"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "salad",
                      "salad"
                    ]
                  },
                  {
                    value: [
                      "salad",
                      "salad",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "basic_burger",
                      "hot_dog_salad",
                      "hot_dog_salad"
                    ]
                  },
                  {
                    value: [
                      "burger_salad",
                      "burger_salad",
                      "drink",
                      "drink"
                    ]
                  },
                  {
                    value: [
                      "chilli_dog",
                      "chilli_dog",
                      "salad"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 60,
                    multiplier: 2,
                    blueprint: "smallOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "smallOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 10
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.3,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 3
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      },
      tacoTime: {
        displayName: "Taco Time",
        matchTypes: {
          classic: {
            scene: 1249147,
            customerSlots: 4,
            enabled: true,
            isEventMode: true,
            eventEndTime: "",
            associatedUnlock: "tacoTime_classic",
            gameplayBalance: {
              salePrices: {
                mx_hot_choc: 5,
                agua_fresca: 5,
                taco_meat: 7,
                taco_shrimp: 7,
                taco_meat_red: 10,
                taco_meat_green: 10,
                taco_shrimp_red: 10,
                taco_shrimp_green: 10
              },
              tips: {
                high: 4,
                mid: 2,
                low: 0
              },
              blueprints: {
                tinyOrder: [
                  {
                    value: [
                      "agua_fresca"
                    ]
                  }
                ],
                smallOrder: [
                  {
                    value: [
                      "taco_meat"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp"
                    ]
                  }
                ],
                mediumOrder: [
                  {
                    value: [
                      "taco_meat",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_green"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_red"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_green"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_red"
                    ]
                  }
                ],
                largeOrder: [
                  {
                    value: [
                      "taco_meat_red",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_green",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_red",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_green",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_red",
                      "taco_shrimp"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_green",
                      "taco_shrimp"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_red",
                      "taco_meat"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_green",
                      "taco_meat"
                    ]
                  }
                ],
                hugeOrder: [
                  {
                    value: [
                      "taco_meat_red",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_green",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_red",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_green",
                      "agua_fresca",
                      "agua_fresca"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_red",
                      "taco_shrimp",
                      "taco_shrimp"
                    ]
                  },
                  {
                    value: [
                      "taco_meat_green",
                      "taco_shrimp",
                      "taco_shrimp"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_red",
                      "taco_meat",
                      "taco_meat"
                    ]
                  },
                  {
                    value: [
                      "taco_shrimp_green",
                      "taco_meat",
                      "taco_meat"
                    ]
                  }
                ]
              },
              run: [
                {
                  options: [
                    "default"
                  ]
                }
              ],
              waves: {
                default: [
                  {
                    type: "delay",
                    time: 5
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "tinyOrder",
                    time: 50
                  },
                  {
                    type: "smallOrder",
                    time: 50
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 15
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 60
                  },
                  {
                    type: "tinyOrder",
                    time: 30
                  },
                  {
                    type: "moneybag_order",
                    time: 60,
                    multiplier: 2,
                    blueprint: "mediumOrder"
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "smallOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "smallOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "smallOrder",
                    time: 40
                  },
                  {
                    type: "new_slot"
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "repeat_point"
                  },
                  {
                    type: "mediumOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 2
                  },
                  {
                    type: "moneybag_order",
                    time: 70,
                    multiplier: 2,
                    blueprint: "largeOrder"
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "mediumOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "wildcard_order",
                    time: 40,
                    value: 15
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "delay",
                    time: 3
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "hugeOrder",
                    time: 70
                  },
                  {
                    type: "mediumOrder",
                    time: 50
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  },
                  {
                    type: "delay",
                    time: 4
                  },
                  {
                    type: "largeOrder",
                    time: 60
                  }
                ]
              },
              botCfg: {
                deliveryTime: 0.1,
                defaultSettings: {
                  minActionTime: 2,
                  maxActionTime: 8
                },
                customSettings: {
                  coffee: {
                    minActionTime: 1,
                    maxActionTime: 1
                  }
                }
              },
              timeExtensionBonus: 0.365,
              timeReductionOnLoop: 0
            },
            metronome: {
              baseWaveMultiplier: 1,
              waveMultiplierIncrement: 0
            }
          }
        }
      }
    },
    matchGameModeSequences: {
      classic: {
        modeOrder: [
          "dosaDash"
        ],
        randomEntry: true,
        enforceEntryInMatchmaking: false,
        enforceOrderInMatchmaking: false
      },
      duel: {
        modeOrder: [
          "dosaDash"
        ],
        randomEntry: true,
        enforceEntryInMatchmaking: false,
        enforceOrderInMatchmaking: false
      }
    },
    matchTypeDefinitions: {
      classic: {
        playersPerTeam: {
          min: 1,
          max: 4
        },
        timeLimitSeconds: 99
      },
      tutorial: {
        playersPerTeam: {
          min: 1,
          max: 1
        },
        cashForWin: 50
      },
      pve: {
        playersPerTeam: {
          min: 1,
          max: 10
        },
        livesForIncomplete: 3,
        recoverySecsForLostLife: 5
      }
    },
    secondsBetweenLootUnlocks: 21600,
    leagueEndingWarningNotificationHours: 12,
    happeningNowThumbnailUrl: "https://cf-st.sc-cdn.net/d/p8xyto3OnhS6ZYYowaGMs?bo=EhQaABoAMgIEfUgCUAhaBAj0gwFgAQ%3D%3D&uc=8",
    leagueThumbnailUrl: "https://cf-st.sc-cdn.net/d/st7KU5JHyTaMBWuQc3pNL?bo=EhQaABoAMgIEfUgCUAhaBAibxgNgAQ%3D%3D&uc=8",
    globalLeaderboardName: "LEAGUE-WEEKLY",
    leagueLevelLimit: 3,
    leagueNames: [
      "Beginner Chefs",
      "Apprentice Chefs",
      "Skilled Chefs",
      "Advanced Chefs",
      "Expert Chefs",
      "Master Chefs"
    ],
    leaderboards: {
      createLeaderboards: {},
      adjustLeaderboards: {},
      deadLeaderboards: {
        leaderboards: [
          "LEAGUE-DEV-HR",
          "LEAGUE-MONTH",
          "LEAGUE-WEEKLY",
          "LEAGUE-DEV-WEEKLY3",
          "LEAGUE-DEV-xHR",
          "LEAGUE-WEEKLY-0",
          "LEAGUE-WEEKLY-1",
          "LEAGUE-WEEKLY-2"
        ],
        underlyingLeaderboards: []
      }
    },
    modeUnlock: {
      burgerTime: 0,
      sushiMode: 1,
      winterMode: 8,
      happyHour: 20
    },
    pvpReadyTimeout: 30,
    availableCustomer: 6,
    stagePickingTimeout: 10,
    scoreAttackLeaderboard: {
      global: {
        score: {
          resetSchedule: "0 0 * * 0",
          operator: "best",
          sortOrder: "desc",
          debugEntry: true,
          debugRecords: [
            {
              displayName: "Lounge@Coffee+",
              numOfPeople: 3,
              score: 120,
              avatarId: "attachments/1100054793608761504/1111307249747513415/pexels-pixabay-162140_1.png?width=1280&height=760"
            },
            {
              displayName: "Hangout SQD",
              numOfPeople: 4,
              avatarId: "attachments/1100054793608761504/1111307250104025150/pexels-matteo-petralli-1828875.png?width=666&height=998"
            },
            {
              displayName: "Vibe Tribe",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307250468933713/pexels-jacob-morch-457418.png?width=596&height=1000"
            },
            {
              displayName: "TopDogs",
              numOfPeople: 4,
              avatarId: "attachments/1100054793608761504/1111307250791891096/pexels-mateus-10941793.png?width=666&height=998"
            },
            {
              displayName: "The Boios",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307251119030272/pexels-khairul-nizam-16516.png?width=1280&height=854"
            },
            {
              displayName: "2Fast2See",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307251798528020/pexels-harsch-shivam-2007647.png?width=730&height=1000"
            },
            {
              displayName: "hardkash",
              numOfPeople: 4,
              avatarId: "attachments/1100054793608761504/1111307252465418311/pexels-guilherme-rossi-1668928.png?width=666&height=998"
            },
            {
              displayName: "mr worlwide",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307252771586148/pexels-elina-sazonova-3971985.png?width=666&height=998"
            },
            {
              displayName: "electronic wizards",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307249747513415/pexels-pixabay-162140_1.png?width=1280&height=760"
            },
            {
              displayName: "winged freaks",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307253195231344/pexels-craig-dennis-881142.png?width=1280&height=854"
            },
            {
              displayName: "galactic gummy bears",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307279845838969/pexels-cottonbro-studio-6869655.png?width=666&height=998"
            },
            {
              displayName: "SpaghettiSquad",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307280193949817/pexels-cottonbro-studio-3693901.png?width=666&height=998"
            },
            {
              displayName: "Zen Bites",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307280663720096/pexels-ashley-fontana-705771.png?width=1280&height=690"
            },
            {
              displayName: "Neon Nexus",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307281007661158/pexels-ashutosh-sonwani-1762578.png?width=800&height=1000"
            },
            {
              displayName: "DAMN BOI",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307281263497287/pexels-bekir-donmez-670030.png?width=666&height=998"
            },
            {
              displayName: "Memetic in the BEST way",
              numOfPeople: 3,
              avatarId: "attachments/1100054793608761504/1111307281561301062/pexels-brenoanp-1136575.png?width=800&height=1000"
            },
            {
              displayName: "SerotoninShot",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307281854894131/pexels-arthur-ogleznev-1102777.png?width=666&height=998"
            },
            {
              displayName: "Pop off QUEENS!",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307282135920690/pexels-artem-saranin-1202841.png?width=666&height=998"
            },
            {
              displayName: "Particularly fresh",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307282408558713/pexels-artem-saranin-1187079.png?width=666&height=998"
            },
            {
              displayName: "unicorns in the wild",
              numOfPeople: 2,
              avatarId: "attachments/1100054793608761504/1111307284149174303/pexels-alexis-caso-3094799.png?width=800&height=1000"
            }
          ]
        }
      }
    },
    avatarSkinDefinitions: {
      chonk_chef: {
        baseMeshId: "chonk_chef",
        displayName: "Chef"
      },
      thin_chef: {
        baseMeshId: "chonk_chef",
        displayName: "Chef"
      },
      "vip-v0": {
        baseMeshId: "vip-v0",
        displayName: "Gold Chef"
      },
      roadie_chef: {
        baseMeshId: "roadie_chef",
        displayName: "Chef Roadie"
      },
      roadie_trash: {
        baseMeshId: "roadie_trash",
        displayName: "Trash Roadie"
      },
      roadie: {
        baseMeshId: "roadie",
        displayName: "Casual Roadie"
      },
      roadie_dirty: {
        baseMeshId: "roadie_dirty",
        displayName: "Dirty Roadie"
      },
      roadie_sushi: {
        baseMeshId: "roadie_sushi",
        displayName: "Sushi Roadie Master"
      },
      roadie_sushi_2: {
        baseMeshId: "original-roadie-sushi",
        displayName: "Sushi Roadie Apprentice"
      },
      funguy_chef: {
        baseMeshId: "funguy-chef",
        displayName: "Chef Funguy"
      },
      belle_chef: {
        baseMeshId: "bell-chef",
        displayName: "Chef Belle"
      }
    },
    iapList: {
      "1068580404434567278": {
        starterPack: "1107973030757531690",
        guildPass: "1135869429956214804",
        goldPass1: "1135869429956214804",
        goldPass2: "1135869429956214804",
        goldPass3: "1135869429956214804",
        goldPass5: "1135869429956214804",
        goldPass10: "1135869429956214804"
      },
      "1068582065370574878": {
        starterPack: "1129016520006180934",
        guildPass: "1156617812354269214",
        goldPass1: "1156617812354269214",
        goldPass2: "1156617812354269214",
        goldPass3: "1156617812354269214",
        goldPass5: "1156617812354269214",
        goldPass10: "1156617812354269214"
      },
      "1037680572660727838": {
        starterPack: "1129016408529977414",
        guildPass: "1146118084160131194",
        goldPass1: "1146118084160131194",
        goldPass2: "1146118125453062156",
        goldPass3: "1146118352742387889",
        goldPass5: "1156261963450564688",
        goldPass10: "1156261993259466793"
      },
      "1080169180189438062": {
        starterPack: "",
        guildPass: "1136711918179069954",
        goldPass1: "1136711918179069954",
        goldPass2: "1136711918179069954",
        goldPass3: "1136711918179069954",
        goldPass5: "1136711918179069954",
        goldPass10: "1136711918179069954"
      }
    },
    iapPackages: {
      starterPack: {
        skinUnlocks: [
          "vip-v0"
        ]
      }
    },
    rolloutDiscordHelp: 1
  }
};

// server/nakama/src/settings.js
var GS = game_settings_default;
var SS = game_settings_default.serverSettings;
var MATCH_TYPES = SS.matchTypeDefinitions;
var USER_COLLECTION = "chef_users";
var FEATURE_FLAGS = Object.assign({}, SS.featureFlags, {
  matchType_classic: true,
  matchType_duel: true,
  versusMode: true,
  scoreAttackMode: true,
  characterCosmetics: true,
  displayStolenBubbles: true,
  inGameExitButtonPvE: true,
  showHighScorePopup: false,
  enableTutorialMatch: false,
  enableFTUE: false,
  autoShowSummer2021Started: false,
  autoShowSummer2021Calendar: false,
  showStarterPack: false,
  sessionStartPromo: false,
  showInviteFriendsButton: false,
  guildXPEnabled: false,
  showLeagueLeaderboard: false,
  showLootboxVictoryRoad: false,
  autoPopupLootboxVictoryRoad: false,
  enableMobileLogo: false,
  hidePVPButton: false,
  tipsSystem: false,
  filterOnAvailabiltyFlagForSKU: false,
  playerXPEnabled: true,
  leagueLeaderboardWarningNotification: false,
  leagueLeaderboardResetNotification: false
});
var CLASSIC_STAGES = [
  "burgerTime",
  "happyHour",
  "sushiMode",
  "winterMode",
  "breakfastClub",
  "potionParty",
  "wurstNightmare",
  "lunarNewYear",
  "iceCreamParlour",
  "dosaDash",
  "doubleDiner",
  "kingOfTheGrill",
  "tacoTime"
];
var DUEL_STAGES = [
  "burgerTime",
  "happyHour",
  "sushiMode",
  "winterMode",
  "breakfastClub",
  "potionParty",
  "wurstNightmare",
  "lunarNewYear",
  "iceCreamParlour"
];
var PVE_STAGES = [
  "burgerTimeScoreAttack",
  "happyHourScoreAttack",
  "sushiModeScoreAttack",
  "winterModeScoreAttack",
  "burgerTimeScoreAttackExtreme",
  "winterModeScoreAttackExtreme"
];
function stageConfig(stage, matchType) {
  const def = SS.gameModeDefinitions[stage];
  if (!def || !def.matchTypes) return null;
  if (def.matchTypes[matchType]) return def.matchTypes[matchType];
  if (matchType === "duel" && def.matchTypes.classic) return def.matchTypes.classic;
  if (matchType === "coop" && def.matchTypes.classic) return def.matchTypes.classic;
  if (matchType === "classic" && def.matchTypes.duel) return def.matchTypes.duel;
  const keys = Object.keys(def.matchTypes);
  return keys.length ? def.matchTypes[keys[0]] : null;
}
function allStagesForMode(mode) {
  if (mode === "duel") return DUEL_STAGES;
  if (mode === "pve") return PVE_STAGES;
  return CLASSIC_STAGES;
}
function modeToMatchType(mode) {
  if (mode === "pve") return "pve";
  if (mode === "duel") return "duel";
  return "classic";
}
function makeGuildPassConfig() {
  const cfg = JSON.parse(JSON.stringify(SS.guildPass || {}));
  cfg.items = cfg.items || {};
  cfg.levels = cfg.levels || [];
  cfg.defaultFreeItems = cfg.defaultFreeItems || [];
  cfg.defaultBoostItems = cfg.defaultBoostItems || [];
  Object.keys(cfg.items).forEach((key) => {
    const item = cfg.items[key];
    if (!item || item.itemType !== "stage" || !item.gameMode) return;
    if (cfg.defaultFreeItems.indexOf(key) < 0) cfg.defaultFreeItems.push(key);
  });
  return cfg;
}
function makeAvailableUnlocks() {
  const cfg = makeGuildPassConfig();
  const out = {};
  Object.keys(cfg.items).forEach((key) => {
    const item = cfg.items[key];
    if (!item || item.itemType !== "stage" || !item.gameMode) return;
    out[key] = {
      gameMode: item.gameMode,
      unlockedFree: true,
      unlockedBoosted: false
    };
  });
  return out;
}
function makeAvailableMode(mode) {
  const out = {};
  allStagesForMode(mode).forEach((stage) => {
    out[stage] = {
      unlockedFree: true,
      unlockedBoosted: false,
      freeUnlockName: "stage_" + stage + "_" + modeToMatchType(mode)
    };
  });
  return out;
}
function defaultStageForMode(mode) {
  if (mode === "pve") return PVE_STAGES[0];
  if (mode === "duel") return DUEL_STAGES[0];
  return CLASSIC_STAGES[0];
}

// server/nakama/src/util.js
function nowSec() {
  return Date.now() / 1e3;
}
function nowMs() {
  return Date.now();
}
function parsePayload(payload) {
  if (!payload) return {};
  if (typeof payload === "object") return payload;
  try {
    var value = JSON.parse(payload);
    if (typeof value === "string" && value.length > 1 && (value[0] === "{" || value[0] === "[")) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  } catch (e) {
    return {};
  }
}
function parseJson(value, fallback) {
  if (value === void 0 || value === null || value === "") return fallback;
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
function randomCode(len) {
  var alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var out = "";
  for (var i = 0; i < (len || 4); i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function countsFromArray(items) {
  var out = {};
  (items || []).forEach(function(it) {
    out[it] = (out[it] || 0) + 1;
  });
  return out;
}
function sumCounts(map) {
  var n = 0;
  Object.keys(map || {}).forEach(function(k) {
    n += map[k] || 0;
  });
  return n;
}

// server/nakama/src/users.js
function defaultInventory() {
  var out = {};
  Object.keys(GS.inventoryItems || {}).forEach(function(key) {
    out[key] = { level: 1, cards: 5 };
  });
  return out;
}
function defaultSkins() {
  var out = {};
  Object.keys(SS.avatarSkinDefinitions || {}).forEach(function(key) {
    out[key] = true;
  });
  out.chonk_chef = true;
  return out;
}
function defaultUserDoc(userId, dataUser) {
  var displayName = dataUser && dataUser.displayName || dataUser && dataUser.name || "Chef";
  return {
    userId,
    displayName: String(displayName).slice(0, 18),
    avatarId: dataUser && dataUser.avatarId || "",
    accentColour: dataUser && dataUser.accentColour || "#f2b134",
    cashAmount: 0,
    trophies: 0,
    sessionCount: 0,
    level: { level: 1, levelXP: 0 },
    games: {},
    itemInventory: defaultInventory(),
    cosmeticInventory: { "vip-v0": true },
    unlockedSkins: defaultSkins(),
    currentSkin: { skinId: "chonk_chef" },
    equippedItem: "none",
    iAPUser: false,
    newsOpenedTimestamp: 0,
    nextLootboxUnlockUTC: 0,
    notificationsScheduledUTC: 0,
    notShowThievesRecruitment: true,
    summerEvent2021: false,
    viewedInfoPopups: [],
    skinId: "chonk_chef",
    lootboxTokens: 0,
    unopenedBoxes: ["cardboard"],
    unopenedBoxCount: 1,
    createdAt: nowMs(),
    updatedAt: nowMs()
  };
}
function readUserDoc(nk, userId, dataUser) {
  var recs = [];
  try {
    recs = nk.storageRead([
      {
        collection: USER_COLLECTION,
        key: userId,
        userId
      }
    ]);
  } catch (e) {
    recs = [];
  }
  if (recs && recs.length > 0 && recs[0].value) {
    var doc = clone(recs[0].value);
    if (!doc.level) doc.level = { level: 1, levelXP: 0 };
    if (!doc.currentSkin) doc.currentSkin = { skinId: "chonk_chef" };
    if (!doc.itemInventory) doc.itemInventory = defaultInventory();
    if (!doc.unlockedSkins) doc.unlockedSkins = defaultSkins();
    if (!doc.cosmeticInventory) doc.cosmeticInventory = { "vip-v0": true };
    return doc;
  }
  return defaultUserDoc(userId, dataUser);
}
function writeUserDoc(nk, userId, doc) {
  doc.updatedAt = nowMs();
  nk.storageWrite([
    {
      collection: USER_COLLECTION,
      key: userId,
      userId,
      value: doc,
      permissionRead: 1,
      permissionWrite: 1
    }
  ]);
  return doc;
}
function makeGameData() {
  return {
    featureFlags: clone(FEATURE_FLAGS),
    sessionConfig: clone(SS.sessionConfig || {}),
    activeGameModes: clone(SS.schedule || {}),
    guildPassConfig: makeGuildPassConfig(),
    playerLevelConfig: clone(SS.playerLevelConfig || {}),
    iapList: {},
    beacon: {},
    guildAllowList: null,
    channelAllowList: null,
    userMessage: null,
    globalLeaderboardName: SS.globalLeaderboardName || "",
    liveEvent: null,
    ftueScriptName: SS.scriptForFTUE || "pioneerFTUE",
    news: clone(SS.news || {}),
    shop: { items: [] },
    store: { items: [] }
  };
}
function makeUserInfo(doc, lobbyMatchId) {
  return {
    userDoc: doc,
    gameData: makeGameData(),
    configName: "private",
    serverVersion: "chef-private-1.0.0",
    serverName: "Private Kitchen",
    gameModeSchedule: clone(SS.schedule || {}),
    gameModeScheduleTime: nowMs(),
    availableUnlocks: makeAvailableUnlocks(),
    experiments: [],
    lobbyMatchId: lobbyMatchId || "",
    contextSessionCount: doc.sessionCount || 1
  };
}

// server/nakama/src/rpc.js
function reply(obj) {
  return JSON.stringify(obj);
}
function success(doc) {
  return reply({
    status: "success",
    updatedUserInfo: makeUserInfo(doc, "")
  });
}
function updateUser(nk, ctx, payload) {
  var data = payload.updateData || {};
  var doc = readUserDoc(nk, ctx.userId, {
    displayName: data.displayName,
    name: data.name,
    avatarId: data.avatarId,
    accentColour: data.accentColour || data.color
  });
  if (data.displayName) doc.displayName = String(data.displayName).slice(0, 18);
  if (data.avatarId) doc.avatarId = data.avatarId;
  if (data.accentColour) doc.accentColour = data.accentColour;
  return doc;
}
function rpcStartsession(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = updateUser(nk, ctx, data);
  doc.sessionCount = (doc.sessionCount || 0) + 1;
  writeUserDoc(nk, ctx.userId, doc);
  var lobbyMatchId = "";
  var candidate = data.lobbyMatchId || data.instanceId || data.contextId || "";
  if (typeof candidate === "string" && candidate.indexOf("-") > 0 && candidate.length >= 32) {
    lobbyMatchId = candidate;
  }
  return reply(makeUserInfo(doc, lobbyMatchId));
}
function rpcCreateLobbyMatch(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var params = {
    roomCode: data.roomCode || randomCode(4),
    mode: data.mode || "classic",
    stage: data.stage || "",
    hostId: data.hostId || "",
    maxPlayers: data.maxPlayers || 8,
    players: data.players || []
  };
  var matchId = nk.matchCreate("chef_lobby", params);
  logger.info("Created lobby match %s for room %s", matchId, params.roomCode);
  return reply({ matchId, roomCode: params.roomCode });
}
function rpcGetStages() {
  return reply({
    classic: CLASSIC_STAGES,
    duel: DUEL_STAGES,
    pve: PVE_STAGES
  });
}
function rpcSetEquippedItem(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = readUserDoc(nk, ctx.userId, {});
  var item = data.item || data.itemType || "none";
  if (item && item !== "none") {
    doc.equippedItem = item;
    if (SS.avatarSkinDefinitions && SS.avatarSkinDefinitions[item]) {
      doc.currentSkin = { skinId: item };
      doc.skinId = item;
    }
  } else {
    doc.equippedItem = "none";
  }
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}
function rpcUpgradeInventoryItem(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.itemInventory = doc.itemInventory || {};
  var updated = data.updatedItem;
  if (updated && updated.item) {
    doc.itemInventory[updated.item] = {
      level: updated.level || 1,
      cards: updated.cards || 0
    };
  }
  if (data.cashCost) {
    doc.cashAmount = Math.max(0, (doc.cashAmount || 0) - data.cashCost);
  }
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}
function rpcAwardLootbox(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.itemInventory = doc.itemInventory || {};
  doc.cosmeticInventory = doc.cosmeticInventory || {};
  doc.unopenedBoxes = doc.unopenedBoxes || [];
  if (data.items && data.items.length) {
    data.items.forEach(function(entry) {
      if (!entry || !entry.item) return;
      var cur = doc.itemInventory[entry.item] || { level: 0, cards: 0 };
      cur.level = Math.max(cur.level || 0, entry.level || 0);
      cur.cards = (cur.cards || 0) + (entry.cards || 0);
      doc.itemInventory[entry.item] = cur;
    });
  } else {
    var boxName = data.lootBoxName || (doc.unopenedBoxes.length ? doc.unopenedBoxes.shift() : "cardboard");
    var box = GS.lootBoxes[boxName] || GS.lootBoxes.cardboard;
    var pool = Object.keys(GS.inventoryItems || {});
    (box && box.data ? box.data : []).forEach(function(roll) {
      var count = (roll.min || 1) + Math.floor(Math.random() * ((roll.max || 1) - (roll.min || 1) + 1));
      for (var i = 0; i < count; i++) {
        var item = pool.length ? pool[Math.floor(Math.random() * pool.length)] : "burgerTime_grill";
        var cur = doc.itemInventory[item] || { level: 0, cards: 0 };
        cur.cards = (cur.cards || 0) + 1;
        doc.itemInventory[item] = cur;
      }
    });
  }
  if (data.cash) doc.cashAmount = (doc.cashAmount || 0) + data.cash;
  doc.unopenedBoxCount = (doc.unopenedBoxes || []).length;
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}
function rpcSetGiftLootboxTimer(ctx, logger, nk) {
  var doc = readUserDoc(nk, ctx.userId, {});
  var seconds = SS.secondsBetweenLootUnlocks || 21600;
  doc.nextLootboxUnlockUTC = nowMs() + seconds * 1e3;
  doc.unopenedBoxes = doc.unopenedBoxes || [];
  if (doc.unopenedBoxes.length === 0) doc.unopenedBoxes.push("cardboard");
  doc.unopenedBoxCount = doc.unopenedBoxes.length;
  writeUserDoc(nk, ctx.userId, doc);
  return success(doc);
}
function rpcUpdateNewsReadTimestamp(ctx, logger, nk) {
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.newsOpenedTimestamp = nowMs();
  writeUserDoc(nk, ctx.userId, doc);
  return reply({ status: "success" });
}
function rpcSeenRecruitPopup(ctx, logger, nk) {
  var doc = readUserDoc(nk, ctx.userId, {});
  doc.notShowThievesRecruitment = true;
  writeUserDoc(nk, ctx.userId, doc);
  return reply({ status: "success" });
}
function rpcGetEntitlements() {
  return reply({ entitlements: [], validPackNames: [] });
}
function rpcGetEventStatus(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  return reply({
    eventId: data.eventId || "",
    active: false,
    currentTugOfWar: null
  });
}
function rpcGetBeaconSignature() {
  return reply({ signature: "", enabled: false });
}
function rpcPlayerBoostedGuild() {
  return reply({ status: "success", guildDoc: null });
}
function rpcPlayerCheckPromote() {
  return reply({ status: "success", promote: false });
}
function rpcPlayerMadePurchase() {
  return reply({ status: "success", entitlements: [] });
}
function rpcRequestLeaderboard() {
  return reply({
    ownerScores: [],
    topScores: [],
    previousOwnerScores: [],
    previousTopScores: [],
    leaderboard: null
  });
}
function rpcRequestLeaderboardRecords() {
  return reply({ scores: [] });
}
function rpcUpdateTeamStream() {
  return reply({ status: "success" });
}
function rpcSelectModeTeamStream() {
  return reply({ status: "success" });
}
function rpcDebugEndRoom(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  var list = nk.matchList(100, true, null, null, null, null);
  var n = 0;
  list.forEach(function(m) {
    if (m.label && data.roomCode && String(m.label).indexOf(String(data.roomCode)) >= 0) {
      try {
        nk.matchSignal(m.matchId, JSON.stringify({ type: "end" }));
        n++;
      } catch (e) {
      }
    }
  });
  return reply({ ok: true, signalled: n });
}
function rpcDebugSignalMatch(ctx, logger, nk, payload) {
  var data = parsePayload(payload);
  if (!data.matchId) return reply({ error: "matchId required" });
  try {
    nk.matchSignal(data.matchId, JSON.stringify(data.signal || { type: "end" }));
    return reply({ ok: true });
  } catch (e) {
    return reply({ error: String(e) });
  }
}

// server/nakama/src/lobby.js
var OP = {
  PlayerJoinQueueRequest: 101,
  PlayerLeaveQueueRequest: 102,
  PlayerReadyToPlayRequest: 103,
  PlayerNotReadyToPlayRequest: 104,
  PlayerPickGameModeRequest: 105,
  PlayerJoinChannel: 106,
  PlayerLeaveChannel: 107,
  StateBroadcast: 200,
  ChannelUpdate: 201,
  MigrationBroadcast: 202,
  GuildPassBoosted: 203,
  AvailableUnlocksUpdated: 204,
  StartTutorialMatchRequest: 300,
  StartPVEMatchRequest: 400,
  PlayerChangeSkinRequest: 600,
  PlayerChangeSkinResponse: 601,
  Ping: 999
};
function readData(nk, data) {
  if (typeof data === "string") return data;
  try {
    return nk.binaryToString(data);
  } catch (e) {
    return "";
  }
}
function playerList(state) {
  var out = {};
  Object.keys(state.expected).forEach(function(userId) {
    var base = state.expected[userId];
    var p = state.presencesByUser[userId];
    var meta = p ? p.meta : null;
    out[userId] = {
      userId,
      displayName: meta && meta.displayName || base.displayName || "Chef",
      avatarId: meta && meta.avatarId || base.avatarId || "",
      accentColour: meta && meta.accentColour || base.color || "#f2b134",
      currentSkin: base.currentSkin && base.currentSkin || { skinId: "chonk_chef" },
      joinedAt: p && p.joinedAt || base.joinedAt || nowMs(),
      winCount: 0,
      guildId: "",
      guildName: "",
      guildIcon: ""
    };
  });
  return out;
}
function teamUserIds(state) {
  var a = [];
  var b = [];
  Object.keys(state.ready).forEach(function(userId) {
    if (state.ready[userId]) {
      if (state.teams[userId] === "b") b.push(userId);
      else a.push(userId);
    }
  });
  a.sort();
  b.sort();
  return { teamA: a, teamB: b };
}
function buildState(state) {
  var players = playerList(state);
  var userIds = Object.keys(players);
  var members = {};
  userIds.forEach(function(userId) {
    members[userId] = { readyToPlay: !!state.ready[userId] };
  });
  var teams = teamUserIds(state);
  var currentGame = null;
  if (state.phase === "AwaitingModeSelection") {
    currentGame = {
      matchType: state.matchType,
      selectedGameMode: {
        modeName: state.selectedStage,
        stage: state.selectedStage,
        type: state.matchType,
        selectedBy: "server"
      },
      teams: {
        teamA: teams.teamA.map(function(id) {
          return { userId: id };
        }),
        teamB: teams.teamB.map(function(id) {
          return { userId: id };
        })
      },
      match: null
    };
  } else if (state.phase === "MatchInProgress" || state.phase === "PostMatch") {
    currentGame = state.currentGame ? clone(state.currentGame) : {
      matchType: state.matchType,
      selectedGameMode: {
        modeName: state.selectedStage,
        stage: state.selectedStage,
        type: state.matchType
      },
      teams: { teamA: [], teamB: [] },
      match: null
    };
  }
  var playerMatch = {};
  if (currentGame && currentGame.match && currentGame.match.matchId) {
    userIds.forEach(function(userId) {
      playerMatch[userId] = {
        match: { matchId: currentGame.match.matchId },
        selectedGameMode: {
          modeName: state.selectedStage,
          stage: state.selectedStage,
          type: state.matchType
        },
        matchType: state.gameMatchType || state.matchType
      };
    });
  }
  return {
    time: Math.floor(nowSec()),
    sessionCount: Object.keys(state.presences).length,
    players,
    gameChannels: {
      [state.channelKey]: {
        channelKey: state.channelKey,
        members,
        queue: [],
        phase: state.phase,
        phaseTimeOut: Math.floor(state.phaseEndsAt),
        maxPlayers: state.maxPlayers,
        currentGame
      }
    },
    availableMode: makeAvailableMode(state.matchType),
    playerMatch,
    forceChannel: state.channelKey
  };
}
function broadcastState(state, dispatcher, presences) {
  var payload = JSON.stringify(buildState(state));
  dispatcher.broadcastMessage(OP.StateBroadcast, payload, presences || null, null, true);
}
function sendStateTo(state, dispatcher, presence) {
  broadcastState(state, dispatcher, [presence]);
}
function assignTeams(state) {
  var present = Object.keys(state.presencesByUser).sort(function(a, b) {
    return (state.presencesByUser[a].joinedAt || 0) - (state.presencesByUser[b].joinedAt || 0);
  });
  var mode = state.roomMode;
  var teams = {};
  if (mode === "coop" || mode === "pve" || present.length === 1) {
    present.forEach(function(userId) {
      teams[userId] = "a";
    });
  } else if (mode === "duel") {
    present.forEach(function(userId, i) {
      teams[userId] = i % 2 === 0 ? "a" : "b";
    });
  } else {
    var aCount = 0;
    var bCount = 0;
    present.forEach(function(userId) {
      if (aCount <= bCount && aCount < 4) {
        teams[userId] = "a";
        aCount++;
      } else if (bCount < 4) {
        teams[userId] = "b";
        bCount++;
      } else {
        teams[userId] = "a";
      }
    });
  }
  return teams;
}
function startGame(ctx, logger, nk, dispatcher, state, stage) {
  var present = Object.keys(state.presencesByUser);
  if (present.length === 0) return;
  state.selectedStage = stage || state.selectedStage || defaultStageForMode(state.mode);
  if (state.selectedStage !== "tutorial" && allStagesForMode(state.roomMode).indexOf(state.selectedStage) < 0) {
    state.selectedStage = defaultStageForMode(state.roomMode);
  }
  state.teams = assignTeams(state);
  var players = present.map(function(userId) {
    var p = state.presencesByUser[userId];
    var meta = p.meta || {};
    var base = state.expected[userId] || {};
    return {
      userId,
      sessionId: p.presence.sessionId,
      displayName: meta.displayName || base.displayName || p.presence.username || "Chef",
      avatarId: meta.avatarId || base.avatarId || "",
      color: meta.accentColour || base.color || "#f2b134",
      currentSkin: meta.currentSkin || base.currentSkin || { skinId: "chonk_chef" },
      team: state.teams[userId] || "a"
    };
  });
  var matchType = state.roomMode === "pve" ? "pve" : state.roomMode === "duel" ? "duel" : "classic";
  var gameMatchId = nk.matchCreate("chef_game", {
    roomCode: state.roomCode,
    roomMode: state.roomMode,
    matchType,
    stage: state.selectedStage,
    players,
    hostId: state.hostId,
    lobbyMatchId: ctx.matchId
  });
  state.gameMatchType = matchType;
  state.currentGame = {
    matchType,
    selectedGameMode: {
      modeName: state.selectedStage,
      stage: state.selectedStage,
      type: matchType
    },
    teams: {
      teamA: players.filter(function(p) {
        return p.team === "a";
      }).map(function(p) {
        return { userId: p.userId };
      }),
      teamB: players.filter(function(p) {
        return p.team === "b";
      }).map(function(p) {
        return { userId: p.userId };
      })
    },
    match: { matchId: gameMatchId, outcome: null }
  };
  state.phase = "MatchInProgress";
  state.autoReady = false;
  state.phaseEndsAt = nowSec() + 60 * 10;
  logger.info("Lobby %s starting game %s (%s %s)", state.roomCode, gameMatchId, matchType, state.selectedStage);
  broadcastState(state, dispatcher, null);
}
function lateJoinTeam(state) {
  if (state.roomMode === "coop" || state.roomMode === "pve") return "a";
  var cur = state.currentGame && state.currentGame.teams;
  var aCount = cur ? cur.teamA.length : 0;
  var bCount = cur ? cur.teamB.length : 0;
  if (state.roomMode === "duel") return aCount <= bCount ? "a" : "b";
  if (aCount < 4 && aCount <= bCount) return "a";
  if (bCount < 4) return "b";
  return "a";
}
function addLateJoiner(state, nk, logger, presence, meta) {
  if (!state.currentGame || !state.currentGame.match) return;
  var matchId = state.currentGame.match.matchId;
  if (!matchId) return;
  var userId = presence.userId;
  var teams = state.currentGame.teams;
  if (teams.teamA.some(function(p) {
    return p.userId === userId;
  }) || teams.teamB.some(function(p) {
    return p.userId === userId;
  })) {
    return;
  }
  var team = lateJoinTeam(state);
  state.teams[userId] = team;
  (team === "b" ? teams.teamB : teams.teamA).push({ userId });
  var base = state.expected[userId] || {};
  var player = {
    userId,
    sessionId: presence.sessionId,
    displayName: meta && meta.displayName || base.displayName || presence.username || "Chef",
    avatarId: meta && meta.avatarId || base.avatarId || "",
    color: meta && meta.accentColour || base.color || "#f2b134",
    currentSkin: base && base.currentSkin || { skinId: "chonk_chef" },
    team
  };
  try {
    nk.matchSignal(matchId, JSON.stringify({ type: "player_join", player }));
  } catch (e) {
    logger.warn("Could not add late joiner to game: %s", e.message);
  }
}
function maybeStartAfterVotes(state) {
  var ready = Object.keys(state.ready).filter(function(id) {
    return state.ready[id];
  });
  var voters = Object.keys(state.votes);
  if (voters.length >= ready.length && ready.length > 0) {
    var counts = {};
    voters.forEach(function(id) {
      var s = state.votes[id];
      counts[s] = (counts[s] || 0) + 1;
    });
    var best = state.selectedStage;
    var bestN = -1;
    Object.keys(counts).forEach(function(s) {
      if (counts[s] > bestN) {
        best = s;
        bestN = counts[s];
      }
    });
    state.selectedStage = best;
    state.phaseEndsAt = nowSec();
  }
}
function lobbyMatchInit(ctx, logger, nk, params) {
  var p = parsePayload(params);
  var roomCode = p.roomCode || "ROOM";
  var players = p.players || [];
  var expected = {};
  players.forEach(function(pl) {
    expected[pl.userId] = {
      userId: pl.userId,
      displayName: pl.displayName || "Chef",
      avatarId: pl.avatarId || "",
      color: pl.color || "#f2b134",
      currentSkin: pl.currentSkin || { skinId: "chonk_chef" },
      ready: pl.ready !== false,
      joinedAt: nowMs()
    };
  });
  var mode = p.mode || p.roomMode || "classic";
  var matchType = mode === "pve" ? "pve" : "classic";
  var state = {
    roomCode,
    channelKey: matchType === "pve" ? "scoreAttack" : "versus",
    hostId: p.hostId || "",
    mode,
    roomMode: mode,
    matchType,
    maxPlayers: p.maxPlayers || 8,
    expected,
    presences: {},
    presencesByUser: {},
    ready: {},
    votes: {},
    teams: {},
    phase: "AwaitingChallengers",
    phaseEndsAt: 0,
    selectedStage: p.stage || defaultStageForMode(mode),
    currentGame: null,
    autoReady: true,
    pinged: {},
    lastBroadcast: 0,
    createdAt: nowMs()
  };
  return {
    state,
    tickRate: 5,
    label: JSON.stringify({ room: roomCode, mode, stage: state.selectedStage })
  };
}
function lobbyMatchJoinAttempt(ctx, logger, nk, dispatcher, tick, state, presence, metadata) {
  if (state.phase === "PostMatch" && Object.keys(state.presences).length >= state.maxPlayers) {
    return { state, accept: false, rejectMessage: "Room is full" };
  }
  if (Object.keys(state.presences).length >= state.maxPlayers) {
    return { state, accept: false, rejectMessage: "Room is full" };
  }
  state.expected[presence.userId] = state.expected[presence.userId] || {
    userId: presence.userId,
    displayName: presence.username || "Chef",
    avatarId: "",
    color: "#f2b134",
    currentSkin: { skinId: "chonk_chef" },
    joinedAt: nowMs()
  };
  state.joinMeta = state.joinMeta || {};
  state.joinMeta[presence.sessionId] = parseJson(metadata, {});
  return { state, accept: true, rejectMessage: "" };
}
function lobbyMatchJoin(ctx, logger, nk, dispatcher, tick, state, presences) {
  for (var i = 0; i < presences.length; i++) {
    var presence = presences[i];
    var meta = state.joinMeta && state.joinMeta[presence.sessionId] || {};
    state.presences[presence.sessionId] = {
      presence,
      userId: presence.userId,
      meta,
      joinedAt: nowMs()
    };
    state.presencesByUser[presence.userId] = {
      presence,
      meta,
      joinedAt: nowMs()
    };
    if (state.ready[presence.userId] === void 0) {
      state.ready[presence.userId] = state.expected[presence.userId] ? state.expected[presence.userId].ready !== false : true;
    }
    if (!state.teams[presence.userId]) state.teams[presence.userId] = "a";
    if (state.phase === "MatchInProgress") {
      addLateJoiner(state, nk, logger, presence, meta);
    }
  }
  state.sendSoon = nowMs() + 250;
  broadcastState(state, dispatcher, null);
  return { state };
}
function lobbyMatchLeave(ctx, logger, nk, dispatcher, tick, state, presences) {
  for (var i = 0; i < presences.length; i++) {
    var presence = presences[i];
    delete state.presences[presence.sessionId];
    delete state.presencesByUser[presence.userId];
    delete state.ready[presence.userId];
    delete state.votes[presence.userId];
    delete state.teams[presence.userId];
    if (state.joinMeta) delete state.joinMeta[presence.sessionId];
  }
  if (Object.keys(state.presences).length === 0 && state.phase !== "MatchInProgress") {
    return null;
  }
  broadcastState(state, dispatcher, null);
  return { state };
}
function lobbyMatchLoop(ctx, logger, nk, dispatcher, tick, state, messages) {
  var now = nowSec();
  if (state.phase === "AwaitingChallengers" && state.autoReady) {
    var presentIds = Object.keys(state.presencesByUser);
    var allReady = presentIds.length > 0 && presentIds.every(function(id) {
      return state.ready[id];
    });
    if (allReady) {
      state.phase = "AwaitingModeSelection";
      state.phaseEndsAt = now + 15;
      state.votes = {};
      state.selectedStage = state.selectedStage || defaultStageForMode(state.mode);
      broadcastState(state, dispatcher, null);
    }
  }
  for (var i = 0; i < messages.length; i++) {
    var msg = messages[i];
    var sender = msg.sender;
    var op = msg.opCode;
    var data = parseJson(readData(nk, msg.data), {});
    var user = state.presencesByUser[sender.userId];
    if (!user) continue;
    if (op === OP.Ping) {
      dispatcher.broadcastMessage(
        OP.Ping,
        JSON.stringify({ timestamp: data.timestamp || Date.now() }),
        [sender],
        null,
        true
      );
      state.pinged[sender.userId] = true;
      sendStateTo(state, dispatcher, sender);
    } else if (op === OP.PlayerReadyToPlayRequest || op === OP.PlayerJoinQueueRequest) {
      state.ready[sender.userId] = true;
      if (state.phase === "AwaitingChallengers") {
        var readyCount = Object.keys(state.ready).filter(function(id) {
          return state.ready[id];
        }).length;
        var presentCount = Object.keys(state.presencesByUser).length;
        if (readyCount >= presentCount && presentCount > 0) {
          state.phase = "AwaitingModeSelection";
          state.phaseEndsAt = now + 20;
          state.votes = {};
          state.selectedStage = state.selectedStage || defaultStageForMode(state.mode);
        }
      }
      broadcastState(state, dispatcher, null);
    } else if (op === OP.PlayerNotReadyToPlayRequest || op === OP.PlayerLeaveQueueRequest) {
      state.ready[sender.userId] = false;
      if (state.phase === "AwaitingModeSelection") {
        state.phase = "AwaitingChallengers";
        state.phaseEndsAt = 0;
      }
      broadcastState(state, dispatcher, null);
    } else if (op === OP.PlayerPickGameModeRequest) {
      if (state.phase === "AwaitingModeSelection") {
        var stage = data.gameMode || data.stage || data.mode || "";
        if (typeof stage === "string" && allStagesForMode(state.mode).indexOf(stage) >= 0) {
          state.votes[sender.userId] = stage;
          maybeStartAfterVotes(state);
        }
      }
    } else if (op === OP.PlayerChangeSkinRequest) {
      var skinId = data.skinId || data.currentSkin || data.item || "chonk_chef";
      if (typeof skinId === "object" && skinId.skinId) skinId = skinId.skinId;
      user.meta.currentSkin = { skinId };
      user.meta.currentSkinId = skinId;
      if (state.expected[sender.userId]) {
        state.expected[sender.userId].currentSkin = { skinId };
      }
      dispatcher.broadcastMessage(
        OP.PlayerChangeSkinResponse,
        JSON.stringify({
          userId: sender.userId,
          currentSkin: { skinId }
        }),
        null,
        null,
        true
      );
    } else if (op === OP.StartPVEMatchRequest) {
      var requestedStage = typeof data.stage === "string" && data.stage || typeof data.gameMode === "string" && data.gameMode || "";
      var pveStage = requestedStage && allStagesForMode("pve").indexOf(requestedStage) >= 0 ? requestedStage : defaultStageForMode("pve");
      state.roomMode = "pve";
      state.mode = "pve";
      state.matchType = "pve";
      if (state.phase !== "MatchInProgress" && state.phase !== "PostMatch") {
        startGame(ctx, logger, nk, dispatcher, state, pveStage);
      }
    } else if (op === OP.StartTutorialMatchRequest) {
      state.roomMode = "pve";
      state.mode = "pve";
      state.matchType = "pve";
      if (state.phase !== "MatchInProgress" && state.phase !== "PostMatch") {
        startGame(ctx, logger, nk, dispatcher, state, "tutorial");
      }
    }
  }
  if (state.phase === "AwaitingModeSelection" && now >= state.phaseEndsAt) {
    var ready = Object.keys(state.ready).filter(function(id) {
      return state.ready[id];
    });
    var voters = Object.keys(state.votes);
    if (voters.length > 0) {
      var counts = {};
      var best = state.selectedStage;
      var bestN = -1;
      voters.forEach(function(id) {
        counts[state.votes[id]] = (counts[state.votes[id]] || 0) + 1;
      });
      Object.keys(counts).forEach(function(s) {
        if (counts[s] > bestN) {
          best = s;
          bestN = counts[s];
        }
      });
      state.selectedStage = best;
    }
    startGame(ctx, logger, nk, dispatcher, state, state.selectedStage);
  }
  if (state.phase === "PostMatch" && now >= state.phaseEndsAt) {
    state.phase = "AwaitingChallengers";
    state.phaseEndsAt = 0;
    state.currentGame = null;
    state.votes = {};
    Object.keys(state.ready).forEach(function(id) {
      state.ready[id] = false;
    });
    broadcastState(state, dispatcher, null);
  }
  if (state.sendSoon && nowMs() >= state.sendSoon) {
    state.sendSoon = 0;
    broadcastState(state, dispatcher, null);
  }
  if (Object.keys(state.presences).length === 0 && state.phase !== "MatchInProgress" && nowMs() - state.createdAt > 12e4) {
    return null;
  }
  if (Object.keys(state.presences).length === 0) {
    if (!state.emptySince) state.emptySince = nowMs();
    if (nowMs() - state.emptySince > 6e4) return null;
  } else {
    state.emptySince = 0;
  }
  return { state };
}
function lobbyMatchTerminate(ctx, logger, nk, dispatcher, tick, state, graceSeconds) {
  logger.info("Lobby %s terminating", state.roomCode);
  return { state };
}
function lobbyMatchSignal(ctx, logger, nk, dispatcher, tick, state, data) {
  var signal = parseJson(data, {});
  if (signal.type === "postmatch") {
    state.phase = "PostMatch";
    state.phaseEndsAt = nowSec() + 14;
    if (state.currentGame) {
      state.currentGame.match = state.currentGame.match || {};
      var scoreA = signal.scores && signal.scores.a && signal.scores.a.cash || 0;
      var scoreB = signal.scores && signal.scores.b && signal.scores.b.cash || 0;
      state.currentGame.match.outcome = {
        winningTeam: signal.winner === "b" ? "teamB" : "teamA",
        winner: signal.winner || "a",
        scores: signal.scores || {},
        teamAScore: scoreA,
        teamBScore: scoreB,
        winnerScore: Math.max(scoreA, scoreB),
        loserScore: Math.min(scoreA, scoreB)
      };
    }
    broadcastState(state, dispatcher, null);
  }
  return { state, data: JSON.stringify({ ok: true }) };
}
var lobbyMatchHandler = {
  matchInit: lobbyMatchInit,
  matchJoinAttempt: lobbyMatchJoinAttempt,
  matchJoin: lobbyMatchJoin,
  matchLeave: lobbyMatchLeave,
  matchLoop: lobbyMatchLoop,
  matchTerminate: lobbyMatchTerminate,
  matchSignal: lobbyMatchSignal
};

// server/nakama/src/rules.js
function makeWaveRunner(stageCfg, startTime) {
  var balance = stageCfg && stageCfg.gameplayBalance || {};
  var waves = balance.waves && balance.waves.default || [];
  var pve = false;
  var runSteps = 0;
  if (!waves.length && balance.run && balance.waves) {
    pve = true;
    runSteps = balance.run.length;
    var flat = [];
    balance.run.forEach(function(step, stepIndex) {
      var options = step.options || [];
      if (!options.length) return;
      var name = options[Math.floor(Math.random() * options.length)];
      var list = balance.waves[name] || [];
      list.forEach(function(entry) {
        flat.push(Object.assign({}, entry, { _round: stepIndex + 1 }));
      });
    });
    waves = flat;
  }
  var repeatIndex = -1;
  if (!pve) {
    for (var i = 0; i < waves.length; i++) {
      if (waves[i].type === "repeat_point") repeatIndex = i;
    }
  }
  return {
    waves,
    repeatIndex,
    index: 0,
    nextAt: startTime,
    round: 1,
    slots: 1,
    done: false,
    roundStart: true,
    roundEnded: false,
    nextOrder: 1,
    pve,
    runSteps,
    cycle: 0
  };
}
function tickWaveRunner(runner, now, stageCfg, spawn) {
  var out = { spawned: 0, roundStart: false, roundEnded: false };
  if (!runner || runner.done) return out;
  if (runner.roundStart) {
    out.roundStart = true;
    runner.roundStart = false;
  }
  var guard = 0;
  while (runner.index < runner.waves.length && now >= runner.nextAt) {
    if (guard++ > 200) break;
    var entry = runner.waves[runner.index];
    if (!entry) break;
    if (entry.type === "round_start" || entry.type === "round_end") {
      if (entry.type === "round_start") {
        runner.round = (runner.cycle || 0) * (runner.runSteps || 0) + (entry._round || runner.round);
        runner.roundStart = true;
        out.roundStart = true;
      }
      runner.nextAt += entry.time || 0;
      runner.index++;
      continue;
    }
    if (entry.type === "set_slots_to") {
      var maxSlots2 = stageCfg && stageCfg.customerSlots || 4;
      runner.slots = Math.min(entry.value || 1, maxSlots2);
      runner.index++;
      continue;
    }
    if (entry.type === "delay") {
      runner.nextAt += entry.time || 0;
      runner.index++;
      continue;
    }
    if (entry.type === "new_slot") {
      var maxSlots = stageCfg && stageCfg.customerSlots || 4;
      runner.slots = Math.min(runner.slots + 1, maxSlots);
      runner.index++;
      continue;
    }
    if (entry.type === "repeat_point") {
      runner.index++;
      continue;
    }
    if (entry.type === "lock_to_position" || entry.type === "unlock_positions") {
      runner.index++;
      continue;
    }
    var placed = spawn(entry);
    if (!placed) break;
    out.spawned++;
    runner.index++;
  }
  if (runner.index >= runner.waves.length) {
    if (runner.pve) {
      runner.cycle = (runner.cycle || 0) + 1;
      runner.index = 0;
      runner.roundStart = true;
      runner.roundEnded = true;
      out.roundEnded = true;
      out.endedRound = runner.round;
      out.roundStart = false;
    } else if (runner.repeatIndex >= 0) {
      runner.index = runner.repeatIndex + 1;
      out.endedRound = runner.round;
      runner.round++;
      runner.roundStart = true;
      runner.roundEnded = true;
      out.roundEnded = true;
      out.roundStart = false;
    } else {
      runner.done = true;
    }
  }
  return out;
}
function makeOrderFromEntry(entry, runner, stageCfg, now, orderKey) {
  var balance = stageCfg && stageCfg.gameplayBalance || {};
  var blueprints = balance.blueprints || {};
  var bonus = {
    bonusMultiplier: entry.multiplier || 0,
    wildcardValue: entry.type === "wildcard_order" ? entry.value || 10 : 0,
    isPatient: entry.type === "patient_order" || entry.type === "patientOrder"
  };
  var desired = {};
  if (entry.type !== "wildcard_order") {
    var blueprintKey = entry.blueprint || entry.type;
    var pool = blueprints[blueprintKey];
    if (!pool && entry.type === "moneybag_order") {
      pool = blueprints.mediumOrder || blueprints[Object.keys(blueprints)[0]];
    }
    if (!pool) {
      var keys = Object.keys(blueprints);
      pool = keys.length ? blueprints[keys[0]] : [];
    }
    var bp = pool && pool.length ? pick(pool) : null;
    if (bp && bp.value) desired = countsFromArray(bp.value);
  }
  var patience = Number(entry.time) || 40;
  var reduction = Number(balance.timeReductionOnLoop) || 0;
  if (runner && reduction > 0 && runner.cycle > 0) {
    patience = Math.max(8, patience * Math.pow(1 - reduction, runner.cycle));
  }
  return {
    orderKey,
    slotIndex: -1,
    requestTime: now,
    expiryTime: now + patience,
    desiredItems: desired,
    pendingItems: JSON.parse(JSON.stringify(desired)),
    bonusOrder: bonus,
    lastUpdatedBy: "",
    completedByTeam: "",
    contributingChefs: [],
    finishedWithReward: null,
    reward: null,
    customerSequence: 0,
    round: runner ? runner.round : 1
  };
}
function computeReward(order, now, stageCfg) {
  var balance = stageCfg && stageCfg.gameplayBalance || {};
  var prices = balance.salePrices || {};
  var tips = balance.tips || { high: 4, mid: 2, low: 0 };
  var wildcard = order.bonusOrder && order.bonusOrder.wildcardValue;
  var base = 0;
  var itemCount = 0;
  if (wildcard) {
    base = Number(wildcard) || 10;
    itemCount = 1;
  } else {
    Object.keys(order.desiredItems || {}).forEach(function(item) {
      var n = order.desiredItems[item] || 0;
      itemCount += n;
      base += (prices[item] || 0) * n;
    });
  }
  var total = Math.max(1, order.expiryTime - order.requestTime);
  var left = Math.max(0, order.expiryTime - now);
  var ratio = left / total;
  var stars = ratio > 0.66 ? 3 : ratio > 0.33 ? 2 : 1;
  var tip = stars === 3 ? tips.high || 0 : stars === 2 ? tips.mid || 0 : tips.low || 0;
  tip *= Math.max(1, Math.min(4, itemCount));
  if (order.bonusOrder && order.bonusOrder.bonusMultiplier) {
    base *= Number(order.bonusOrder.bonusMultiplier) || 1;
  }
  return {
    cash: Math.round(base),
    tips: Math.round(tip),
    stars
  };
}

// server/nakama/src/game.js
var OP2 = {
  StartMatch: 1,
  UpdateTeams: 2,
  MatchStatus: 3,
  ClientReady: 4,
  MatchSetup: 5,
  ReadyForFollowOn: 6,
  ChefState: 100,
  SellPizza: 102,
  UpdateScores: 103,
  GameOver: 104,
  OrdersUpdated: 107,
  DiscardItems: 108,
  EquipItem: 109,
  RejectOrderItem: 110,
  UpdateBuffs: 111,
  KickBomb: 112,
  ExplodeBomb: 113,
  ExplodeBombUpdateCustomers: 114,
  TimeOut: 201,
  MigrateState: 202,
  MatchWillTerminate: 203,
  MatchDidTerminate: 204,
  DebugAddClientBot: 900
};
function readData2(nk, data) {
  if (typeof data === "string") return data;
  try {
    return nk.binaryToString(data);
  } catch (e) {
    return "";
  }
}
function emptyScore(players) {
  var perPlayer = {};
  Object.keys(players || {}).forEach(function(id) {
    var p = players[id];
    perPlayer[p.sessionId] = {
      cashAwarded: 0,
      tipsAwarded: 0,
      itemsServed: {},
      itemsWasted: {},
      ordersCompleted: 0
    };
  });
  return {
    cash: 0,
    stars: 0,
    orders: {
      totals: { created: 0, completed: 0, expired: 0 },
      perPlayer
    }
  };
}
function chefInfo(p) {
  return {
    displayName: p.displayName || "Chef",
    displayNameBase64: "",
    avatarId: p.avatarId || "",
    accentColour: p.color || "#f2b134",
    currentSkin: p.currentSkin || { skinId: "chonk_chef" },
    chefType: "human",
    equippedCosmetic: "none",
    buffs: void 0
  };
}
function teamsBySession(state, onlyPresent) {
  var a = {};
  var b = {};
  Object.keys(state.players).forEach(function(userId) {
    var p = state.players[userId];
    if (onlyPresent && !state.presences[p.sessionId]) return;
    if (p.team === "b") b[p.sessionId] = chefInfo(p);
    else a[p.sessionId] = chefInfo(p);
  });
  return { a, b };
}
function activeOrders(state, team) {
  return state.teamState[team] ? clone(state.teamState[team].orders) : {};
}
function buildStartPayload(state, team) {
  var teams = teamsBySession(state);
  var stageCfg = state.stageCfg;
  var def = state.matchTypeDef;
  return {
    teams,
    spectators: {},
    gameMode: state.stage,
    scores: clone(state.scores),
    description: {
      matchType: state.matchType,
      config: clone(def),
      teamMatchDescriptions: {
        a: { matchTypeDefinition: clone(stageCfg) },
        b: { matchTypeDefinition: clone(stageCfg) }
      },
      validGameModes: []
    },
    startDelaySeconds: 0,
    livesToLose: state.livesToLose,
    playerRecords: {},
    latecomer: false,
    activeOrders: activeOrders(state, team),
    roundNumber: state.teamState[team] && state.teamState[team].runner ? state.teamState[team].runner.round : 0,
    customerSequence: [],
    serverTime: nowSec(),
    matchStartTime: state.matchStartTime || nowSec() + 1,
    configName: "private",
    followsMatch: false,
    votingCloseTime: nowSec() - 1,
    votes: {}
  };
}
function sendStartTo(state, dispatcher, presence) {
  var p = state.players[presence.userId];
  if (!p) return;
  var team = p.team || "a";
  dispatcher.broadcastMessage(
    OP2.MatchSetup,
    JSON.stringify({
      followsMatch: false,
      serverTime: nowSec(),
      matchStartTime: state.matchStartTime || 0,
      votingCloseTime: nowSec() - 1,
      votes: {}
    }),
    [presence],
    null,
    true
  );
  dispatcher.broadcastMessage(
    OP2.StartMatch,
    JSON.stringify(buildStartPayload(state, team)),
    [presence],
    null,
    true
  );
  if (state.phase === "playing" && state.matchStartTime) {
    dispatcher.broadcastMessage(
      OP2.ClientReady,
      JSON.stringify({
        serverTime: nowSec(),
        matchStartTime: state.matchStartTime
      }),
      [presence],
      null,
      true
    );
  }
  var ts = state.teamState[team];
  if (ts && Object.keys(ts.orders).length > 0) {
    dispatcher.broadcastMessage(
      OP2.OrdersUpdated,
      JSON.stringify({
        serverTime: nowSec(),
        team,
        orders: {
          newOrders: clone(ts.orders),
          updatedOrders: {},
          expiredOrders: {},
          completedOrders: {},
          // No roundState here: a false roundStart would be treated by the
          // client as a round-end summary on a normal late join.
          roundState: void 0
        }
      }),
      [presence],
      null,
      true
    );
  }
}
function sendScores(state, dispatcher) {
  state.scores.a.livesLeft = state.lives;
  state.scores.b.livesLeft = state.lives;
  dispatcher.broadcastMessage(
    OP2.UpdateScores,
    JSON.stringify({ scores: clone(state.scores) }),
    null,
    null,
    true
  );
}
function sendOrders(state, dispatcher, team, changes) {
  if (!changes) return;
  var has = changes.newOrders && Object.keys(changes.newOrders).length || changes.updatedOrders && Object.keys(changes.updatedOrders).length || changes.expiredOrders && Object.keys(changes.expiredOrders).length || changes.completedOrders && Object.keys(changes.completedOrders).length || changes.roundState;
  if (!has) return;
  var targets = Object.keys(state.presences).filter(function(sid) {
    var p = state.players[state.presences[sid].userId];
    return p && (p.team || "a") === team;
  }).map(function(sid) {
    return state.presences[sid].presence;
  });
  if (targets.length === 0) return;
  dispatcher.broadcastMessage(
    OP2.OrdersUpdated,
    JSON.stringify({
      serverTime: nowSec(),
      team,
      orders: {
        newOrders: changes.newOrders || {},
        updatedOrders: changes.updatedOrders || {},
        expiredOrders: changes.expiredOrders || {},
        completedOrders: changes.completedOrders || {},
        roundState: changes.roundState
      }
    }),
    targets,
    null,
    true
  );
}
function findFreeSlot(ts, slots) {
  for (var i = 0; i < slots; i++) {
    var used = false;
    Object.keys(ts.orders).forEach(function(key) {
      if (ts.orders[key].slotIndex === i) used = true;
    });
    if (!used) return i;
  }
  return -1;
}
function spawnForTeam(state, team, entry, changes) {
  var ts = state.teamState[team];
  if (!ts) return false;
  var slot = findFreeSlot(ts, ts.runner.slots);
  if (slot < 0) return false;
  var key = "o" + ++state.orderSeq;
  var order = makeOrderFromEntry(entry, ts.runner, state.stageCfg, nowSec(), key);
  order.slotIndex = slot;
  ts.orders[key] = order;
  state.scores[team].orders.totals.created++;
  changes.newOrders[key] = order;
  if (state.matchType === "duel" && team === "a" && state.teamState.b) {
    var mirror = clone(order);
    mirror.pendingItems = JSON.parse(JSON.stringify(order.desiredItems || {}));
    mirror.lastUpdatedBy = "";
    mirror.contributingChefs = [];
    mirror.completedByTeam = "";
    mirror.finishedWithReward = null;
    mirror.reward = null;
    state.teamState.b.orders[key] = mirror;
    state.scores.b.orders.totals.created++;
    sendOrders(state, state._dispatcher, "b", { newOrders: { [key]: mirror } });
  }
  return true;
}
function applyXp(doc, amount) {
  if (!doc.level) doc.level = { level: 1, levelXP: 0 };
  var cfg = SS && SS.playerLevelConfig || {};
  var levels = cfg.levels || [];
  var level = Math.max(1, Number(doc.level.level) || 1);
  var xp = Math.max(0, Number(doc.level.levelXP) || 0) + Math.max(0, Number(amount) || 0);
  var guard = 0;
  while (level <= levels.length && xp >= (levels[level - 1].xpRequired || 0) && guard++ < 1e3) {
    xp -= levels[level - 1].xpRequired || 0;
    level++;
  }
  doc.level.level = Math.min(level, levels.length + 1);
  doc.level.levelXP = xp;
  return doc;
}
function ensurePlayerScore(state, p, previousSessionId) {
  var team = p.team || "a";
  var s = state.scores[team];
  if (!s || !s.orders || !s.orders.perPlayer) return;
  var per = s.orders.perPlayer;
  if (per[p.sessionId]) {
    if (previousSessionId && previousSessionId !== p.sessionId) delete per[previousSessionId];
    return;
  }
  var prior = previousSessionId ? per[previousSessionId] : null;
  per[p.sessionId] = prior || {
    cashAwarded: 0,
    tipsAwarded: 0,
    itemsServed: {},
    itemsWasted: {},
    ordersCompleted: 0
  };
  if (previousSessionId && previousSessionId !== p.sessionId) delete per[previousSessionId];
}
function scoreForPlayer(state, team, sessionId) {
  var s = state.scores[team];
  if (!s || !s.orders || !s.orders.perPlayer) {
    return { cashAwarded: 0, tipsAwarded: 0, itemsServed: {}, itemsWasted: {}, ordersCompleted: 0 };
  }
  if (!s.orders.perPlayer[sessionId]) {
    s.orders.perPlayer[sessionId] = {
      cashAwarded: 0,
      tipsAwarded: 0,
      itemsServed: {},
      itemsWasted: {},
      ordersCompleted: 0
    };
  }
  return s.orders.perPlayer[sessionId];
}
function completeOrder(state, dispatcher, team, order, sessionId, cashBonus) {
  var reward = computeReward(order, nowSec(), state.stageCfg);
  reward.cash += Number(cashBonus) || 0;
  order.finishedWithReward = reward;
  order.reward = reward;
  order.completedByTeam = team;
  order.lastUpdatedBy = sessionId;
  if (order.contributingChefs.indexOf(sessionId) < 0) {
    order.contributingChefs.push(sessionId);
  }
  var ts = state.teamState[team];
  delete ts.orders[order.orderKey];
  ts.completed[order.orderKey] = order;
  if (ts.roundOrders) ts.roundOrders.push(order);
  var score = state.scores[team];
  score.cash += reward.cash + reward.tips;
  score.stars += reward.stars;
  score.orders.totals.completed++;
  var ps = scoreForPlayer(state, team, sessionId);
  ps.cashAwarded += reward.cash;
  ps.tipsAwarded += reward.tips;
  ps.ordersCompleted++;
  Object.keys(order.desiredItems || {}).forEach(function(item) {
    ps.itemsServed[item] = (ps.itemsServed[item] || 0) + (order.desiredItems[item] || 0);
  });
  var changes = {
    completedOrders: { [order.orderKey]: order },
    roundState: null
  };
  sendOrders(state, dispatcher, team, changes);
  if (state.matchType === "duel") {
    var otherTeam = team === "a" ? "b" : "a";
    var otherState = state.teamState[otherTeam];
    var mirror = otherState && otherState.orders[order.orderKey];
    if (mirror) {
      delete otherState.orders[order.orderKey];
      mirror.completedByTeam = team;
      mirror.lastUpdatedBy = sessionId;
      mirror.contributingChefs = [sessionId];
      mirror.finishedWithReward = null;
      mirror.reward = null;
      otherState.completed[order.orderKey] = mirror;
      if (otherState.roundOrders) otherState.roundOrders.push(mirror);
      state.scores[otherTeam].orders.totals.expired++;
      sendOrders(state, dispatcher, otherTeam, {
        completedOrders: { [order.orderKey]: mirror }
      });
    }
  }
  sendScores(state, dispatcher);
  return reward;
}
function endGame(state, dispatcher) {
  if (state.ended) return;
  state.ended = true;
  state.phase = "ended";
  var a = state.scores.a;
  var b = state.scores.b;
  var winner = "a";
  if (state.matchType === "classic" || state.matchType === "duel") {
    if (b.cash > a.cash) winner = "b";
    else if (b.cash === a.cash && b.stars > a.stars) winner = "b";
  }
  state.winner = winner;
  if (state.lobbyMatchId) {
    try {
      state._nk.matchSignal(
        state.lobbyMatchId,
        JSON.stringify({ type: "postmatch", winner, scores: state.scores })
      );
    } catch (e) {
      state._logger.warn("Could not signal lobby: %s", e.message);
    }
  }
  state.gameOverAt = nowSec() + 1.5;
  state.endAt = nowSec() + 45;
}
function sendGameOver(state, dispatcher) {
  if (state.gameOverSent) return;
  state.gameOverSent = true;
  var winner = state.winner || "a";
  var presences = Object.keys(state.presences).map(function(id) {
    return state.presences[id].presence;
  });
  presences.forEach(function(presence) {
    var p = state.players[presence.userId];
    if (!p) return;
    var team = p.team || "a";
    var reward = {
      score: state.scores[team].cash,
      previousHighScore: 0,
      stars: state.scores[team].stars,
      cash: state.scores[team].cash,
      tips: 0,
      playerXPAdded: state.matchType === "pve" ? 5 : team === winner ? 15 : 5,
      guildXPAdded: 0,
      playerLevelBefore: { level: 1, levelXP: 0 },
      playerLevelAfter: { level: 1, levelXP: 0 },
      guildLevelBefore: { level: 0, levelXP: 0 },
      guildLevelAfter: { level: 0, levelXP: 0 },
      matchType: state.matchType
    };
    var userInfo = null;
    try {
      var doc = readUserDoc(state._nk, presence.userId, p);
      doc.cashAmount = (doc.cashAmount || 0) + state.scores[team].cash;
      doc.trophies = doc.trophies || 0;
      doc.lootboxTokens = (doc.lootboxTokens || 0) + Math.max(1, Math.floor(state.scores[team].cash / 100));
      while (doc.lootboxTokens >= 100) {
        doc.lootboxTokens -= 100;
        doc.unopenedBoxes = doc.unopenedBoxes || [];
        doc.unopenedBoxes.push("cardboard");
      }
      doc.unopenedBoxCount = (doc.unopenedBoxes || []).length;
      if (!doc.level) doc.level = { level: 1, levelXP: 0 };
      reward.playerLevelBefore = clone(doc.level);
      applyXp(doc, reward.playerXPAdded);
      reward.playerLevelAfter = clone(doc.level);
      doc.games = doc.games || {};
      doc.games[state.stage] = (doc.games[state.stage] || 0) + 1;
      writeUserDoc(state._nk, presence.userId, doc);
      userInfo = makeUserInfo(doc, "");
    } catch (e) {
      state._logger.error("Failed to persist user %s: %s", presence.userId, e.message);
    }
    var payload = {
      status: "FINISHED",
      scores: clone(state.scores),
      winner,
      matchType: state.matchType,
      updatedUserInfo: userInfo,
      wasSpectating: false,
      followOnMatchId: null,
      allRewards: {},
      reward
    };
    dispatcher.broadcastMessage(
      OP2.GameOver,
      JSON.stringify(payload),
      [presence],
      null,
      true
    );
  });
}
function debugSnapshot(state) {
  var teams = {};
  Object.keys(state.teamState).forEach(function(team) {
    var ts = state.teamState[team];
    if (!ts) return;
    teams[team] = {
      orders: Object.keys(ts.orders).map(function(key) {
        var o = ts.orders[key];
        return {
          orderKey: o.orderKey,
          slotIndex: o.slotIndex,
          pendingItems: clone(o.pendingItems),
          desiredItems: clone(o.desiredItems),
          expiryTime: o.expiryTime,
          reward: o.finishedWithReward
        };
      }),
      completed: Object.keys(ts.completed).length,
      expired: Object.keys(ts.expired).length,
      round: ts.runner ? ts.runner.round : 0
    };
  });
  return {
    type: "snapshot",
    phase: state.phase,
    ended: state.ended,
    matchType: state.matchType,
    roomMode: state.roomMode,
    stage: state.stage,
    matchStartTime: state.matchStartTime,
    matchEndTime: state.matchEndTime || null,
    lives: state.lives,
    serverTime: nowSec(),
    players: Object.keys(state.players).map(function(id) {
      var p = state.players[id];
      return {
        userId: p.userId,
        sessionId: p.sessionId,
        displayName: p.displayName,
        team: p.team
      };
    }),
    presenceCount: Object.keys(state.presences).length,
    scores: clone(state.scores),
    teams
  };
}
function lateTeamForGame(state) {
  if (state.roomMode === "coop" || state.roomMode === "pve") return "a";
  var counts = { a: 0, b: 0 };
  Object.keys(state.players).forEach(function(id) {
    var team = state.players[id].team === "b" ? "b" : "a";
    counts[team]++;
  });
  if (state.roomMode === "duel") return counts.a <= counts.b ? "a" : "b";
  if (counts.a < 4 && counts.a <= counts.b) return "a";
  if (counts.b < 4) return "b";
  return "a";
}
function gameMatchInit(ctx, logger, nk, params) {
  var p = parsePayload(params);
  var players = {};
  (p.players || []).forEach(function(pl) {
    players[pl.userId] = {
      userId: pl.userId,
      sessionId: pl.sessionId,
      displayName: pl.displayName || "Chef",
      avatarId: pl.avatarId || "",
      color: pl.color || "#f2b134",
      currentSkin: pl.currentSkin || { skinId: "chonk_chef" },
      team: pl.team || "a"
    };
  });
  var matchType = p.matchType || modeToMatchType(p.roomMode || "classic");
  if (matchType === "coop") matchType = "classic";
  var stageMode = matchType === "pve" ? "pve" : matchType;
  var stage = p.stage || defaultStageForMode(stageMode);
  var cfg = stageConfig(stage, stageMode);
  if (!cfg) {
    stage = defaultStageForMode(stageMode);
    cfg = stageConfig(stage, stageMode) || stageConfig(stage, "classic");
  }
  var def = MATCH_TYPES[matchType] || MATCH_TYPES.classic;
  var slots = cfg && cfg.customerSlots || 4;
  var lives = matchType === "pve" ? def.livesForIncomplete || 3 : 0;
  var state = {
    roomCode: p.roomCode || "",
    matchType,
    roomMode: p.roomMode || "classic",
    stage,
    stageCfg: cfg,
    matchTypeDef: def,
    customerSlots: slots,
    players,
    presences: {},
    sessionToUser: {},
    scores: {
      a: emptyScore(players),
      b: emptyScore(players)
    },
    teamState: {
      a: null,
      b: null
    },
    phase: "waiting",
    firstJoinAt: 0,
    matchStartTime: 0,
    startDeadline: 0,
    ready: {},
    clientReadySent: false,
    lives,
    livesToLose: lives,
    orderSeq: 0,
    ended: false,
    endAt: 0,
    winner: "",
    lobbyMatchId: p.lobbyMatchId || "",
    hostId: p.hostId || "",
    _nk: nk,
    _logger: logger
  };
  Object.keys(players).forEach(function(userId) {
    var p2 = players[userId];
    state.scores[p2.team || "a"].orders.perPlayer[p2.sessionId] = {
      cashAwarded: 0,
      tipsAwarded: 0,
      itemsServed: {},
      itemsWasted: {},
      ordersCompleted: 0
    };
  });
  return {
    state,
    tickRate: 15,
    label: JSON.stringify({ room: state.roomCode, mode: state.matchType, stage })
  };
}
function gameMatchJoinAttempt(ctx, logger, nk, dispatcher, tick, state, presence, metadata) {
  if (state.ended) return { state, accept: false, rejectMessage: "Match ended" };
  var p = state.players[presence.userId];
  if (!p) {
    if (state.phase === "waiting") {
      return { state, accept: false, rejectMessage: "Not in this room" };
    }
    var lateMeta = parseJson(metadata, {});
    p = state.players[presence.userId] = {
      userId: presence.userId,
      sessionId: presence.sessionId,
      displayName: lateMeta.displayName || presence.username || "Chef",
      avatarId: lateMeta.avatarId || "",
      color: lateMeta.accentColour || "#f2b134",
      currentSkin: lateMeta.currentSkin || { skinId: "chonk_chef" },
      team: lateTeamForGame(state)
    };
    ensurePlayerScore(state, p, "");
  }
  state.joinMeta = state.joinMeta || {};
  state.joinMeta[presence.sessionId] = parseJson(metadata, {});
  return { state, accept: true, rejectMessage: "" };
}
function gameMatchJoin(ctx, logger, nk, dispatcher, tick, state, presences) {
  for (var i = 0; i < presences.length; i++) {
    var presence = presences[i];
    state.presences[presence.sessionId] = { presence, userId: presence.userId };
    state.sessionToUser[presence.sessionId] = presence.userId;
    var p = state.players[presence.userId];
    if (p) {
      var previousSessionId = p.sessionId;
      p.sessionId = presence.sessionId;
      ensurePlayerScore(state, p, previousSessionId);
      state.ready[presence.userId] = false;
    }
    if (!state.firstJoinAt) state.firstJoinAt = nowSec();
  }
  state._dispatcher = dispatcher;
  if (state.phase !== "waiting") {
    for (var j = 0; j < presences.length; j++) {
      sendStartTo(state, dispatcher, presences[j]);
    }
  }
  return { state };
}
function gameMatchLeave(ctx, logger, nk, dispatcher, tick, state, presences) {
  for (var i = 0; i < presences.length; i++) {
    var presence = presences[i];
    delete state.presences[presence.sessionId];
    delete state.sessionToUser[presence.sessionId];
    delete state.ready[presence.userId];
  }
  dispatcher.broadcastMessage(
    OP2.UpdateTeams,
    JSON.stringify({
      teams: teamsBySession(state, true),
      spectators: {},
      teamGameModes: { a: state.stage, b: state.stage }
    }),
    null,
    null,
    true
  );
  if (Object.keys(state.presences).length === 0) return null;
  return { state };
}
function gameMatchLoop(ctx, logger, nk, dispatcher, tick, state, messages) {
  state._dispatcher = dispatcher;
  state._nk = nk;
  state._logger = logger;
  var now = nowSec();
  for (var i = 0; i < messages.length; i++) {
    var msg = messages[i];
    var sender = msg.sender;
    var p = state.players[sender.userId];
    if (!p) continue;
    var op = msg.opCode;
    var raw = readData2(nk, msg.data);
    var data = parseJson(raw, {});
    if (op === OP2.ClientReady) {
      state.ready[sender.userId] = true;
      if (!state.clientReadySent && state.phase === "starting") {
        var readyCount = Object.keys(state.players).filter(function(uid) {
          return state.ready[uid];
        }).length;
        if (readyCount >= Object.keys(state.players).length || now > state.startDeadline) {
          startPlaying(state, dispatcher);
        }
      }
    } else if (op === OP2.ChefState) {
      var targets = Object.keys(state.presences).filter(function(sid) {
        return sid !== sender.sessionId;
      }).map(function(sid) {
        return state.presences[sid].presence;
      });
      if (targets.length) {
        var chefEvent = JSON.stringify({
          uId: sender.sessionId,
          state: data,
          clientId: data.clientId,
          timestamp: data.timestamp || 0
        });
        dispatcher.broadcastMessage(op, chefEvent, targets, sender, false);
      }
    } else if (op === OP2.OrdersUpdated) {
      handleOrderUpdate(state, dispatcher, p, data);
    } else if (op === OP2.DiscardItems) {
      var team = p.team || "a";
      sendOrders(state, dispatcher, team, null);
      broadcastToTeam(state, dispatcher, team, op, raw, sender);
    } else if (op === OP2.EquipItem) {
      var item = data.itemType || "none";
      p.equippedItem = item;
      var equipMap = {};
      equipMap[sender.sessionId] = item;
      dispatcher.broadcastMessage(OP2.EquipItem, JSON.stringify(equipMap), null, null, true);
    } else if (op === OP2.UpdateBuffs) {
      dispatcher.broadcastMessage(
        OP2.UpdateBuffs,
        JSON.stringify({ buffs: [] }),
        [sender],
        null,
        true
      );
    } else if (op === OP2.KickBomb || op === OP2.ExplodeBomb || op === OP2.ExplodeBombUpdateCustomers) {
      broadcastToTeam(state, dispatcher, p.team || "a", op, raw, sender);
    } else if (op === OP2.ReadyForFollowOn || op === OP2.DebugAddClientBot) {
    }
  }
  if (state.phase === "waiting") {
    var expected = Object.keys(state.players).length;
    var joined = Object.keys(state.presences).length;
    if (joined >= expected || state.firstJoinAt && now > state.firstJoinAt + 20) {
      beginMatch(state, dispatcher);
    }
  } else if (state.phase === "starting") {
    var ready = Object.keys(state.players).filter(function(uid) {
      return state.ready[uid];
    }).length;
    var present = Object.keys(state.presences).length;
    if (!state.clientReadySent && (present > 0 && ready >= present || now > state.startDeadline)) {
      startPlaying(state, dispatcher);
    }
  } else if (state.phase === "playing") {
    tickMatch(state, dispatcher, now);
  }
  if (state.ended && !state.gameOverSent && state.gameOverAt && now >= state.gameOverAt) {
    sendGameOver(state, dispatcher);
  }
  if (state.phase === "ended" && now > state.endAt) {
    if (!state.gameOverSent) sendGameOver(state, dispatcher);
    return null;
  }
  return { state };
}
function gameMatchTerminate(ctx, logger, nk, dispatcher, tick, state, graceSeconds) {
  logger.info("Game %s terminating", state.roomCode);
  return { state };
}
function gameMatchSignal(ctx, logger, nk, dispatcher, tick, state, data) {
  var signal = parseJson(data, {});
  if (signal.type === "end") {
    endGame(state, dispatcher);
  } else if (signal.type === "snapshot") {
    var snapshotTargets = null;
    if (signal.targetSessionId && state.presences[signal.targetSessionId]) {
      snapshotTargets = [state.presences[signal.targetSessionId].presence];
    }
    dispatcher.broadcastMessage(
      990,
      JSON.stringify(debugSnapshot(state)),
      snapshotTargets,
      null,
      true
    );
  } else if (signal.type === "player_join" && signal.player && !state.ended) {
    var pl = signal.player;
    var existing = state.players[pl.userId];
    if (!existing) {
      existing = state.players[pl.userId] = {
        userId: pl.userId,
        sessionId: pl.sessionId || "",
        displayName: pl.displayName || "Chef",
        avatarId: pl.avatarId || "",
        color: pl.color || "#f2b134",
        currentSkin: pl.currentSkin || { skinId: "chonk_chef" },
        team: pl.team === "b" ? "b" : "a"
      };
    }
    ensurePlayerScore(state, existing, "");
    dispatcher.broadcastMessage(
      OP2.UpdateTeams,
      JSON.stringify({
        teams: teamsBySession(state, true),
        spectators: {},
        teamGameModes: { a: state.stage, b: state.stage }
      }),
      null,
      null,
      true
    );
  }
  return { state, data: "" };
}
var gameMatchHandler = {
  matchInit: gameMatchInit,
  matchJoinAttempt: gameMatchJoinAttempt,
  matchJoin: gameMatchJoin,
  matchLeave: gameMatchLeave,
  matchLoop: gameMatchLoop,
  matchTerminate: gameMatchTerminate,
  matchSignal: gameMatchSignal
};
function broadcastToTeam(state, dispatcher, team, op, raw, sender) {
  var targets = Object.keys(state.presences).filter(function(sid) {
    var p = state.players[state.presences[sid].userId];
    return p && (p.team || "a") === team;
  }).map(function(sid) {
    return state.presences[sid].presence;
  });
  if (targets.length) dispatcher.broadcastMessage(op, raw, targets, sender || null, false);
}
function beginMatch(state, dispatcher) {
  state.phase = "starting";
  state.matchStartTime = nowSec() + 1;
  state.startDeadline = nowSec() + 60;
  var presences = Object.keys(state.presences).map(function(sid) {
    return state.presences[sid].presence;
  });
  presences.forEach(function(presence) {
    sendStartTo(state, dispatcher, presence);
  });
  dispatcher.broadcastMessage(
    OP2.MatchStatus,
    JSON.stringify({ serverTime: nowSec(), matchStartTime: state.matchStartTime }),
    null,
    null,
    true
  );
}
function startPlaying(state, dispatcher) {
  if (state.clientReadySent) return;
  state.clientReadySent = true;
  state.phase = "playing";
  state.matchStartTime = nowSec() + 0.5;
  var ts = {
    runner: makeWaveRunner(state.stageCfg, state.matchStartTime),
    orders: {},
    completed: {},
    expired: {},
    roundOrders: []
  };
  state.teamState.a = ts;
  if (state.matchType !== "pve" && state.roomMode !== "coop") {
    state.teamState.b = {
      runner: state.matchType === "duel" ? null : makeWaveRunner(state.stageCfg, state.matchStartTime),
      orders: {},
      completed: {},
      expired: {},
      roundOrders: []
    };
  }
  dispatcher.broadcastMessage(
    OP2.ClientReady,
    JSON.stringify({ serverTime: nowSec(), matchStartTime: state.matchStartTime }),
    null,
    null,
    true
  );
  state.matchEndTime = state.matchTypeDef.timeLimitSeconds ? state.matchStartTime + state.matchTypeDef.timeLimitSeconds : Infinity;
  sendScores(state, dispatcher);
}
function tickMatch(state, dispatcher, now) {
  if (state.ended) return;
  var expiredAny = false;
  if (state.clientReadySent && state.matchStartTime && now < state.matchStartTime + 90 && now >= (state.lastReadyBroadcast || 0) + 5) {
    state.lastReadyBroadcast = now;
    dispatcher.broadcastMessage(
      OP2.MatchSetup,
      JSON.stringify({
        followsMatch: false,
        serverTime: nowSec(),
        matchStartTime: state.matchStartTime,
        votingCloseTime: nowSec() - 1,
        votes: {}
      }),
      null,
      null,
      true
    );
    dispatcher.broadcastMessage(
      OP2.ClientReady,
      JSON.stringify({
        serverTime: nowSec(),
        matchStartTime: state.matchStartTime
      }),
      null,
      null,
      true
    );
  }
  var teams = ["a"];
  if (state.teamState.b) teams.push("b");
  teams.forEach(function(team) {
    var ts = state.teamState[team];
    if (!ts) return;
    var changes = {
      newOrders: {},
      updatedOrders: {},
      expiredOrders: {},
      completedOrders: {},
      roundState: null
    };
    if (ts.runner) {
      var out = tickWaveRunner(ts.runner, now, state.stageCfg, function(entry) {
        if (state.matchType === "duel" && team === "a") {
          return spawnForTeamDuel(state, entry, changes);
        }
        return spawnForTeam(state, team, entry, changes);
      });
      if (out.roundEnded) {
        changes.roundState = {
          roundNumber: out.endedRound || ts.runner.round,
          roundOrders: ts.roundOrders || []
        };
        ts.roundOrders = [];
      } else if (out.roundStart) {
        changes.roundState = { roundNumber: ts.runner.round, roundStart: true };
      }
    }
    Object.keys(ts.orders).forEach(function(key) {
      var order = ts.orders[key];
      if (now >= order.expiryTime) {
        delete ts.orders[key];
        ts.expired[key] = order;
        if (ts.roundOrders) ts.roundOrders.push(order);
        state.scores[team].orders.totals.expired++;
        changes.expiredOrders[key] = order;
        if (state.matchType === "pve") {
          state.lives--;
        }
      }
    });
    sendOrders(state, dispatcher, team, changes);
    if (Object.keys(changes.expiredOrders).length > 0) expiredAny = true;
  });
  if (expiredAny) sendScores(state, dispatcher);
  if (state.matchType === "pve" && state.lives <= 0) {
    endGame(state, dispatcher);
    return;
  }
  if (state.matchEndTime && now >= state.matchEndTime) {
    endGame(state, dispatcher);
    return;
  }
}
function spawnForTeamDuel(state, entry, changes) {
  var ts = state.teamState.a;
  var slot = findFreeSlot(ts, ts.runner.slots);
  if (slot < 0) return false;
  var key = "o" + ++state.orderSeq;
  var order = makeOrderFromEntry(entry, ts.runner, state.stageCfg, nowSec(), key);
  order.slotIndex = slot;
  ts.orders[key] = order;
  state.scores.a.orders.totals.created++;
  changes.newOrders[key] = order;
  if (state.teamState.b) {
    var mirror = clone(order);
    mirror.pendingItems = JSON.parse(JSON.stringify(order.desiredItems || {}));
    mirror.lastUpdatedBy = "";
    mirror.contributingChefs = [];
    mirror.completedByTeam = "";
    mirror.finishedWithReward = null;
    mirror.reward = null;
    state.teamState.b.orders[key] = mirror;
    state.scores.b.orders.totals.created++;
    sendOrders(state, state._dispatcher, "b", { newOrders: { [key]: mirror } });
  }
  return true;
}
function handleOrderUpdate(state, dispatcher, p, data) {
  var team = p.team || "a";
  var ts = state.teamState[team];
  if (!ts) return;
  var order = ts.orders[data.orderKey];
  if (!order) {
    var other = state.matchType === "duel" && team === "b" ? state.teamState.a : null;
    if (other) order = other.orders[data.orderKey];
  }
  if (!order) return;
  var sessionId = p.sessionId;
  var items = data.items || {};
  var wildcard = order.bonusOrder && order.bonusOrder.wildcardValue;
  var changed = false;
  var rejected = {};
  if (wildcard) {
    var any = Object.keys(items).filter(function(k) {
      return items[k] > 0;
    })[0];
    if (any) {
      order.pendingItems[any] = (order.pendingItems[any] || 0) + 1;
      changed = true;
    }
  } else {
    Object.keys(items).forEach(function(item) {
      var remaining = order.pendingItems[item] || 0;
      var n = items[item] || 0;
      if (remaining > 0 && n > 0) {
        order.pendingItems[item] = Math.max(0, remaining - n);
        changed = true;
      } else {
        rejected[item] = n;
      }
    });
  }
  if (Object.keys(rejected).length > 0) {
    dispatcher.broadcastMessage(
      OP2.RejectOrderItem,
      JSON.stringify({ uId: sessionId, items: rejected }),
      [state.presences[sessionId].presence],
      null,
      true
    );
  }
  if (!changed) return;
  order.lastUpdatedBy = sessionId;
  if (order.contributingChefs.indexOf(sessionId) < 0) {
    order.contributingChefs.push(sessionId);
  }
  if (wildcard || sumCounts(order.pendingItems) === 0) {
    completeOrder(state, dispatcher, team, order, sessionId, data.cashBonus);
  } else {
    sendOrders(state, dispatcher, team, {
      updatedOrders: { [order.orderKey]: order }
    });
  }
}

// server/nakama/src/index.js
function InitModule(ctx, logger, nk, initializer) {
  logger.info("Chef Showdown private server module initialising");
  initializer.registerRpc("startsession", rpcStartsession);
  initializer.registerRpc("create_lobby_match", rpcCreateLobbyMatch);
  initializer.registerRpc("get_stages", rpcGetStages);
  initializer.registerRpc("setequippeditem", rpcSetEquippedItem);
  initializer.registerRpc("upgradeinventoryitem", rpcUpgradeInventoryItem);
  initializer.registerRpc("awardlootbox", rpcAwardLootbox);
  initializer.registerRpc("setgiftlootboxtimer", rpcSetGiftLootboxTimer);
  initializer.registerRpc("updatenewsreadtimestamp", rpcUpdateNewsReadTimestamp);
  initializer.registerRpc("seenrecruitpopup", rpcSeenRecruitPopup);
  initializer.registerRpc("get-entitlements", rpcGetEntitlements);
  initializer.registerRpc("geteventstatus", rpcGetEventStatus);
  initializer.registerRpc("getBeaconSignature", rpcGetBeaconSignature);
  initializer.registerRpc("player-boosted-guild", rpcPlayerBoostedGuild);
  initializer.registerRpc("player-check-promote", rpcPlayerCheckPromote);
  initializer.registerRpc("player-made-purchase", rpcPlayerMadePurchase);
  initializer.registerRpc("request-leaderboard", rpcRequestLeaderboard);
  initializer.registerRpc("request-leaderboard-records", rpcRequestLeaderboardRecords);
  initializer.registerRpc("updateteamstream", rpcUpdateTeamStream);
  initializer.registerRpc("selectmodeteamstream", rpcSelectModeTeamStream);
  initializer.registerRpc("debug_signal_match", rpcDebugSignalMatch);
  initializer.registerRpc("debug_end_room", rpcDebugEndRoom);
  initializer.registerMatch("chef_lobby", lobbyMatchHandler);
  initializer.registerMatch("chef_game", gameMatchHandler);
  logger.info("Chef Showdown private server module ready");
}
if (typeof globalThis !== "undefined") {
  globalThis.InitModule = InitModule;
}
