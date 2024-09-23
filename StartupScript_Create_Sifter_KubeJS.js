// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

// Listen to item registry event
onEvent('item.registry', event => {
    event.create('magnetic_mesh','createsifter:mesh').displayName('Megnetic Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","minecraft:iron_block").texture("frame","minecraft:oak_wood");
})