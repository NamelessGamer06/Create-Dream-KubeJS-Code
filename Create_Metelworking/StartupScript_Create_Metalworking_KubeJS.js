// priority: 0


StartupEvents.registry('item', e => {
    console.info("Starting Metalworking Item Registration")

    e.create('copper_gravel_mix').displayName('Copper Gravel Mix').texture('create_metalworking:item/copper_gravel_mix')
    e.create('iron_gravel_mix').displayName('Iron Gravel Mix').texture('create_metalworking:item/iron_gravel_mix')
    e.create('zinc_gravel_mix').displayName('Zinc Gravel Mix').texture('create_metalworking:item/zinc_gravel_mix')
    e.create('gold_gravel_mix').displayName('Gold Gravel Mix').texture('create_metalworking:item/gold_gravel_mix')
    console.info("Metalworking Item Registration Completed Successfully")
})