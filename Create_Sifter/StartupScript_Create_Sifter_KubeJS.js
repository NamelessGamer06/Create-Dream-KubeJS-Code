// priority: 0

console.info("Starting Item Registration")

StartupEvents.registry('item', e => {
    e.create('magnetic_mesh','createsifter:mesh').displayName('Magnetic Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/magnet_mesh").texture("frame","kubejs:item/iron_block");
    console.info("Item Registration Completed Successfully")
})