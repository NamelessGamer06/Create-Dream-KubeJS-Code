// priority: 1



ServerEvents.recipes(e => {

    console.info("Adding Stage 1 Dense Ores Metalworking Recipes")

    e.recipes.createCrushing(
        [
            '4x kubejs:copper_gravel_mix',
            Item.of('6x create:copper_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'denseores:dense_copper_ore')

    e.recipes.createCrushing(
        [
            '2x kubejs:iron_gravel_mix',
            Item.of('4x minecraft:iron_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'denseores:dense_iron_ore')

    e.recipes.createCrushing(
        [
            '2x kubejs:gold_gravel_mix',
            Item.of('2x minecraft:gold_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'denseores:dense_gold_ore')

    e.recipes.createCrushing(
        [
            '4x kubejs:copper_gravel_mix',
            Item.of('6x create:copper_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'denseores:dense_deepslate_copper_ore')

    e.recipes.createCrushing(
        [
            '2x kubejs:iron_gravel_mix',
            Item.of('4x minecraft:iron_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'denseores:dense_deepslate_iron_ore')

    e.recipes.createCrushing(
        [
            '2x kubejs:gold_gravel_mix',
            Item.of('2x minecraft:gold_nugget').withChance(0.1),
            Item.of('2x create:experience_nugget').withChance(0.75)
        ],
            'denseores:dense_deepslate_gold_ore')

    console.info("Stage 1 Dense Ores Metalworking Recipes Added Sucessfully")
})