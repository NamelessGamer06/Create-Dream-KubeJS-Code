// priority: 5


ServerEvents.recipes(e => {
    console.info("Adding Stage 1 Metalworking Recipes")
    
    e.remove({ type: 'create:crushing', input: '#forge:ores/copper'})
    e.remove({ type: 'create:crushing', input: '#forge:ores/iron'})
    e.remove({ type: 'create:crushing', input: '#forge:ores/zinc'})
    e.remove({ type: 'create:crushing', input: '#forge:ores/gold'})
    e.recipes.createCrushing(
        [
            '2x kubejs:copper_gravel_mix',
            Item.of('3x create:copper_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'minecraft:copper_ore')
    
    e.recipes.createCrushing(
        [
            '2x kubejs:copper_gravel_mix',
            Item.of('3x create:copper_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'minecraft:deepslate_copper_ore')

    e.recipes.createCrushing(
        [
            'kubejs:iron_gravel_mix',
            Item.of('2x minecraft:iron_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'minecraft:iron_ore')

    e.recipes.createCrushing(
        [
            'kubejs:iron_gravel_mix',
            Item.of('2x minecraft:iron_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'minecraft:deepslate_iron_ore')

    e.recipes.createCrushing(
        [
            'kubejs:gold_gravel_mix',
            Item.of('2x minecraft:gold_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'minecraft:gold_ore')

    e.recipes.createCrushing(
        [
            'kubejs:gold_gravel_mix',
            Item.of('2x minecraft:gold_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'minecraft:deepslate_gold_ore')

    e.recipes.createCrushing(
        [
            'kubejs:zinc_gravel_mix',
            Item.of('2x create:zinc_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            '#forge:ores/zinc')

    console.info("Stage 1 Metalworking Recipes Added Sucessfully")
})