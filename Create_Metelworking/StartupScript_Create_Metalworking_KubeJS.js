// priority: 0


StartupEvents.registry('item', e => {
    console.info("Starting Metalworking Item Registration")

    // Stage 1

    e.create('copper_gravel_mix').displayName('Copper Gravel Mix').texture('create_metalworking:item/copper_gravel_mix')
    e.create('iron_gravel_mix').displayName('Iron Gravel Mix').texture('create_metalworking:item/iron_gravel_mix')
    e.create('zinc_gravel_mix').displayName('Zinc Gravel Mix').texture('create_metalworking:item/zinc_gravel_mix')
    e.create('gold_gravel_mix').displayName('Gold Gravel Mix').texture('create_metalworking:item/gold_gravel_mix')

    // Stage 2

    e.create('pure_copper_pebbles').displayName('Pure Copper Pebbles').texture('create_metalworking:item/pure_copper_pebbles')
    e.create('pure_iron_pebbles').displayName('Pure Iron Pebbles').texture('create_metalworking:item/pure_iron_pebbles')
    e.create('pure_zinc_pebbles').displayName('Pure Zinc Pebbles').texture('create_metalworking:item/pure_zinc_pebbles')
    e.create('pure_gold_pebbles').displayName('Pure Gold Pebbles').texture('create_metalworking:item/pure_gold_pebbles')

    // Stage 3

    e.create('pure_copper_chunk').displayName('Pure Copper Chunk').texture('create_metalworking:item/pure_copper_chunk')
    e.create('pure_iron_chunk').displayName('Pure Iron Chunk').texture('create_metalworking:item/pure_iron_chunk')
    e.create('pure_zinc_chunk').displayName('Pure Zinc Chunk').texture('create_metalworking:item/pure_zinc_chunk')
    e.create('pure_gold_chunk').displayName('Pure Gold Chunk').texture('create_metalworking:item/pure_gold_chunk')

    console.info("Metalworking Item Registration Completed Successfully")
})