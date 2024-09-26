// priority: 0


ServerEvents.recipes(e => {
    console.info("Adding Stage 2 Metalworking Recipes")
    
    e.recipes.createsifterSifting(
        ['x9 kubejs:pure_copper_pebbles', 
         Item.of('x5 create:copper_nugget').withChance(0.15)],
          ['kubejs:copper_gravel_mix', 'createsifter:magnetic_mesh']).waterLogged()

    e.recipes.createsifterSifting(
        ['x9 kubejs:pure_iron_pebbles', 
         Item.of('x2 minecraft:iron_nugget').withChance(0.15)],
          ['kubejs:iron_gravel_mix', 'createsifter:magnetic_mesh']).waterLogged()

   e.recipes.createsifterSifting(
        ['x9 kubejs:pure_zinc_pebbles', 
         Item.of('x2 create:zinc_nugget').withChance(0.15)],
          ['kubejs:zinc_gravel_mix', 'createsifter:magnetic_mesh']).waterLogged()

    e.recipes.createsifterSifting(
        ['x9 kubejs:pure_gold_pebbles', 
         Item.of('x2 minecraft:gold_nugget').withChance(0.15)],
          ['kubejs:gold_gravel_mix', 'createsifter:magnetic_mesh']).waterLogged()

    console.info("Stage 2 Metalworking Recipes Added Sucessfully")
})