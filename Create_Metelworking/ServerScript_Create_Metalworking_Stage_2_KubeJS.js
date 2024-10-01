// priority: 4


ServerEvents.recipes(e => {
    console.info("Adding Stage 2 Metalworking Recipes")
    
    e.recipes.createsifterSifting(
        ['9x kubejs:pure_copper_pebbles', 
         Item.of('3x create:copper_nugget').withChance(0.15)],
          ['kubejs:copper_gravel_mix', 'kubejs:magnetic_mesh']).waterlogged()

    e.recipes.createsifterSifting(
        ['9x kubejs:pure_iron_pebbles', 
         Item.of('2x minecraft:iron_nugget').withChance(0.15)],
          ['kubejs:iron_gravel_mix', 'kubejs:magnetic_mesh']).waterlogged()

   e.recipes.createsifterSifting(
        ['9x kubejs:pure_zinc_pebbles', 
         Item.of('2x create:zinc_nugget').withChance(0.15)],
          ['kubejs:zinc_gravel_mix', 'kubejs:magnetic_mesh']).waterlogged()

    e.recipes.createsifterSifting(
        ['9x kubejs:pure_gold_pebbles', 
         Item.of('2x minecraft:gold_nugget').withChance(0.15)],
          ['kubejs:gold_gravel_mix', 'kubejs:magnetic_mesh']).waterlogged()

    console.info("Stage 2 Metalworking Recipes Added Sucessfully")
})