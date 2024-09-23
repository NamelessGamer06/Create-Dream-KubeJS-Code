// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true


onEvent('recipes', event => {
    event.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.05)], ['minecraft:gravel', 'createsifter:string_mesh'])
    event.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.1)], ['minecraft:gravel', 'createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.15)], ['minecraft:gravel', 'createsifter:zinc_mesh'])
    event.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.20)], ['minecraft:gravel', 'createsifter:brass_mesh'])
    event.recipes.createsifterSifting([Item.of('minecraft:iron_nugget').withChance(0.25)], ['minecraft:gravel', 'kubejs:megnetic_mesh'])
})