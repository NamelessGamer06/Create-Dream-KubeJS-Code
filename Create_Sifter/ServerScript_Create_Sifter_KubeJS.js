// priority: 0


ServerEvents.recipes(e => {
  console.info("Adding Sifting Recipes")
  
    e.remove({ type: 'createsifter:sifting'})
    e.shaped('kubejs:magnetic_mesh', [
        'AAA', 
        'ABA',
        'ACA'  
      ], {
        A: 'minecraft:iron_ingot', 
        B: 'minecraft:string',
        C: 'minecraft:diamond'   
      }
    )
    e.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.05)], ['minecraft:gravel', 'createsifter:string_mesh'])
    e.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.1)], ['minecraft:gravel', 'createsifter:andesite_mesh'])
    e.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.15)], ['minecraft:gravel', 'createsifter:zinc_mesh'])
    e.recipes.createsifterSifting([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.20)], ['minecraft:gravel', 'createsifter:brass_mesh'])
    e.recipes.createsifterSifting([Item.of('minecraft:iron_nugget').withChance(0.25)], ['minecraft:gravel', 'kubejs:magnetic_mesh'])
    console.info("Sifting Recipes Added Sucessfully")
})