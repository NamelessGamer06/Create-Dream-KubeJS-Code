// priority: 3


ServerEvents.recipes(e => {
    console.info("Adding Stage 3 Metalworking Recipes")
    
    e.recipes.createCompacting('kubejs:pure_copper_chunk', [
        '9x kubejs:pure_copper_pebbles'
    ]).heated()

    e.recipes.createCompacting('kubejs:pure_iron_chunk', [
        '9x kubejs:pure_iron_pebbles'
    ]).heated()

    e.recipes.createCompacting('kubejs:pure_gold_chunk', [
        '9x kubejs:pure_gold_pebbles'
    ]).heated()

    e.recipes.createCompacting('kubejs:pure_zinc_chunk', [
        '9x kubejs:pure_zinc_pebbles'
    ]).heated()
    
    e.blasting('9x minecraft:copper_ingot', 'kubejs:pure_copper_chunk')
    e.blasting('9x minecraft:iron_ingot', 'kubejs:pure_iron_chunk')
    e.blasting('9x minecraft:gold_ingot', 'kubejs:pure_gold_chunk')
    e.blasting('9x create:zinc_ingot', 'kubejs:pure_zinc_chunk')
   
    console.info("Stage 3 Metalworking Recipes Added Sucessfully")
})