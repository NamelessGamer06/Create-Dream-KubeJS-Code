// priority: 0


StartupEvents.registry('item', e => {
    console.info("Starting Sifter Item Registration")
    
    e.create('magnetic_mesh','createsifter:mesh').displayName('Magnetic Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","create_sifter:item/magnet_mesh").texture("frame","create_sifter:item/iron_block");
    console.info("Sifter Item Registration Completed Successfully")
})