// priority: 0

console.info("Adding Extruding Recipes")

ServerEvents.recipes(e => {
    e.remove({ type: 'create_mechanical_extruder:extruding'})
    e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobblestone'), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).requiredBonks(5)
    e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:netherrack'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:lava')])
    e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:stone'), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:stone').requiredBonks(5)
    console.info("Extruding Recipes Added Sucessfully")
})