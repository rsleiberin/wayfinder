require 'date'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#-------------Sources------------------------
#Rulebooks

Source.create(source_type: "Rulebook", name: "Core Rulebook", release_date: Date.new(2019,8,1))
Source.create(source_type: "Rulebook", name: "Bestiary", release_date: Date.new(2019,8,1))
Source.create(source_type: "Rulebook", name: "Gamemastery Guide", release_date: Date.new(2020,2,26))
Source.create(source_type: "Rulebook", name: "Bestiary 2", release_date: Date.new(2020,5,27))
Source.create(source_type: "Rulebook", name: "Advanced Player's Guide", release_date: Date.new(2020,7,30))
Source.create(source_type: "Rulebook", name: "Pathfinder Beginner Box: Game Master's Guide", release_date: Date.new(2020,10,15))
Source.create(source_type: "Rulebook", name: "Pathfinder Beginner Box: Hero's Handbook", release_date: Date.new(2020,10,15))
Source.create(source_type: "Rulebook", name: "Bestiary 3", release_date: Date.new(2021,4,7))
Source.create(source_type: "Rulebook", name: "Secrets of Magic", release_date: Date.new(2021,9,1))
Source.create(source_type: "Rulebook", name: "Guns & Gears", release_date: Date.new(2021,10,13))
Source.create(source_type: "Rulebook", name: "Book of the Dead", release_date: Date.new(2022,4,27))

#-------------Rules------------------------
#Traits

Trait.create(name: "Chaotic")
Trait.create(name: "Lawful")
Trait.create(name: "Evil")
Trait.create(name: "Good")
Trait.create(name: "Aasimar")
Trait.create(name: "Anadi")
Trait.create(name: "Android")
Trait.create(name: "Aphorite")
Trait.create(name: "Automaton")
Trait.create(name: "Azarketi")
Trait.create(name: "Beastkin")
Trait.create(name: "Catfolk")
Trait.create(name: "Changling")
Trait.create(name: "Conrasu")
Trait.create(name: "Dhampir")
Trait.create(name: "Duskwalker")
Trait.create(name: "Dwarf")
Trait.create(name: "Elf")
Trait.create(name: "Fetchling")
Trait.create(name: "Fleshwarp")
Trait.create(name: "Ganzi")
Trait.create(name: "Geniekin")
Trait.create(name: "Gnoll")
Trait.create(name: "Gnome")
Trait.create(name: "Goblin")
Trait.create(name: "Goloma")
Trait.create(name: "Grippli")
Trait.create(name: "Half-Elf")
Trait.create(name: "Halfling")
Trait.create(name: "Half-Orc")
Trait.create(name: "Hobgoblin")
Trait.create(name: "Human")
Trait.create(name: "Ifrit")
Trait.create(name: "Kitsune")
Trait.create(name: "Kobold")
Trait.create(name: "Leshy")
Trait.create(name: "Lizardfolk")
Trait.create(name: "Orc")
Trait.create(name: "Oread")
Trait.create(name: "Poppet")
Trait.create(name: "Ratfolk")
Trait.create(name: "Shisk")
Trait.create(name: "Shoony")
Trait.create(name: "Skeleton")
Trait.create(name: "Sprite")
Trait.create(name: "Strix")
Trait.create(name: "Suli")
Trait.create(name: "Sylph")
Trait.create(name: "Tengu")
Trait.create(name: "Tiefling")
Trait.create(name: "Undine")

Trait.create(name: "Bulwark")
Trait.create(name: "Comfort")
Trait.create(name: "Flexible")
Trait.create(name: "Noisy")

Trait.create(name: "Alchemist")
Trait.create(name: "Barbarian")
Trait.create(name: "Bard")
Trait.create(name: "Champion")
Trait.create(name: "Cleric")
Trait.create(name: "Druid")
Trait.create(name: "Fighter")
Trait.create(name: "Gunslinger")
Trait.create(name: "Inventor")
Trait.create(name: "Investigator")
Trait.create(name: "Magus")
Trait.create(name: "Monk")
Trait.create(name: "Oracle")
Trait.create(name: "Ranger")
Trait.create(name: "Rogue")
Trait.create(name: "Sorcerer")
Trait.create(name: "Summoner")
Trait.create(name: "Swashbuckler")
Trait.create(name: "Witch")
Trait.create(name: "Wizard")

Trait.create(name: "Addititve")
Trait.create(name: "Composition")
Trait.create(name: "Cursebound")
Trait.create(name: "Eidolon")
Trait.create(name: "Evolution")
Trait.create(name: "Finisher")
Trait.create(name: "Hex")
Trait.create(name: "Infused")
Trait.create(name: "Instinct")
Trait.create(name: "Litany")
Trait.create(name: "Modification")
Trait.create(name: "Oath")
Trait.create(name: "Rage")
Trait.create(name: "Social")
Trait.create(name: "Stance")
Trait.create(name: "Tandem")
Trait.create(name: "Unstable")
Trait.create(name: "Vigilante")

Trait.create(name: "Aberration")
Trait.create(name: "Animal")
Trait.create(name: "Astral")
Trait.create(name: "Beast")
Trait.create(name: "Celestial")
Trait.create(name: "Construct")
Trait.create(name: "Dragon")
Trait.create(name: "Dream")
Trait.create(name: "Elemental")
Trait.create(name: "Ethereal")
Trait.create(name: "Fey")
Trait.create(name: "Fiend")
Trait.create(name: "Fungus")
Trait.create(name: "Giant")
Trait.create(name: "Humanoid")
Trait.create(name: "Monitor")
Trait.create(name: "Negative")
Trait.create(name: "Ooze")
Trait.create(name: "Petitioner")
Trait.create(name: "Plant")
Trait.create(name: "Positive")
Trait.create(name: "Spirit")
Trait.create(name: "Time")
Trait.create(name: "Undead")

Trait.create(name: "Air")
Trait.create(name: "Earth")
Trait.create(name: "Fire")
Trait.create(name: "Water")

Trait.create(name: "Acid")
Trait.create(name: "Cold")
Trait.create(name: "Electricity")
Trait.create(name: "Fire")
Trait.create(name: "Force")
Trait.create(name: "Negative")
Trait.create(name: "Positive")
Trait.create(name: "Sonic")

Trait.create(name: "Adjustment")
Trait.create(name: "Alchemical")
Trait.create(name: "Apex")
Trait.create(name: "Artifact")
Trait.create(name: "Bomb")
Trait.create(name: "Catalyst")
Trait.create(name: "Clockwork")
Trait.create(name: "Companion")
Trait.create(name: "Consumable")
Trait.create(name: "Contract")
Trait.create(name: "Cursed")
Trait.create(name: "Drug")
Trait.create(name: "Elixer")
Trait.create(name: "Focused")
Trait.create(name: "Fulu")
Trait.create(name: "Gadget")
Trait.create(name: "Grimoire")
Trait.create(name: "Intelligent")
Trait.create(name: "Invested")
Trait.create(name: "Mechanical")
Trait.create(name: "Mutagen")
Trait.create(name: "Oil")
Trait.create(name: "Potion")
Trait.create(name: "Saggorak")
Trait.create(name: "Scroll")
Trait.create(name: "Snare")
Trait.create(name: "Spellheart")
Trait.create(name: "Staff")
Trait.create(name: "Steam")
Trait.create(name: "Structure")
Trait.create(name: "Talisman")
Trait.create(name: "Tattoo")
Trait.create(name: "Trap")
Trait.create(name: "Wand")

Trait.create(name: "Environmental")
Trait.create(name: "Haunt")
Trait.create(name: "Mechanical")
Trait.create(name: "Trap")

Trait.create(name: "Aasimar")
Trait.create(name: "Acid")
Trait.create(name: "Aeon")
Trait.create(name: "Aesir")
Trait.create(name: "Agathion")
Trait.create(name: "Air")
Trait.create(name: "Alchemical")
Trait.create(name: "Amphibious")
Trait.create(name: "Anadi")
Trait.create(name: "Angel")
Trait.create(name: "Anugobu")
#not completed: Not all triats listed, duplicates exist

#-------------Ancestries------------------------
ancestry1 = Ancestry.create(name: "Dwarf", hit_points: 10, size: "Medium", speed: 20, vision: "Darkvision")
ancestry2 = Ancestry.create(name: "Elf", hit_points: 6, size: "Medium", speed: 30, vision: "Low-Light")
ancestry3 = Ancestry.create(name: "Gnome", hit_points: 8, size: "Small", speed: 25, vision: "Low-Light")
ancestry4 = Ancestry.create(name: "Goblin", hit_points: 6, size: "Small", speed: 25, vision: "Darkvision")
ancestry5 = Ancestry.create(name: "Hafling", hit_points: 6, size: "Small", speed: 25, vision: nil)
ancestry6 = Ancestry.create(name: "Human", hit_points: 8, size: "Medium", speed: 25, vision: nil)
#Only core ancestries
#Ancestries still require Ability Modifiers and Langauges for base, as well as additional specific stuff to each ancestry

#-------------Heritages------------------------

heritage1 = Heritage.create(name:"Ancient-Blooded Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage1.id)

heritage2 = Heritage.create(name:"Anvil Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage2.id)

heritage3 = Heritage.create(name:"Death Warden Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage3.id)

heritage4 = Heritage.create(name:"Elemental Heart Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage4.id)

heritage5 = Heritage.create(name:"Forge Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage5.id)

heritage6 = Heritage.create(name:"Oathkeeper Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage6.id)

heritage7 = Heritage.create(name:"Rock Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage7.id)

heritage8 = Heritage.create(name: "Strong-Blooded Dwarf")
AncestryHeritage.create(ancestry_id: ancestry1.id, heritage_id: heritage8.id)

heritage9 = Heritage.create(name: "Ancient Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage9.id)

heritage10 = Heritage.create(name: "Artic Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage10.id)

heritage11 = Heritage.create(name: "Cavern Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage11.id)

heritage12 = Heritage.create(name: "Desert Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage12.id)

heritage13 = Heritage.create(name: "Seer Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage13.id)

heritage14 = Heritage.create(name: "Whisper Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage14.id)

heritage15 = Heritage.create(name: "Woodland Elf")
AncestryHeritage.create(ancestry_id: ancestry2.id, heritage_id: heritage15.id)

heritage16 = Heritage.create(name: "Chameleon Gnome")
AncestryHeritage.create(ancestry_id: ancestry3.id, heritage_id: heritage16.id)

heritage17 = Heritage.create(name: "Fey-Touched Gnome")
AncestryHeritage.create(ancestry_id: ancestry3.id, heritage_id: heritage17.id)

heritage18 = Heritage.create(name: "Sensate Gnome")
AncestryHeritage.create(ancestry_id: ancestry3.id, heritage_id: heritage18.id)

heritage19 = Heritage.create(name: "Umbral Gnome")
AncestryHeritage.create(ancestry_id: ancestry3.id, heritage_id: heritage19.id)

heritage20 = Heritage.create(name: "Vivacious Gnome")
AncestryHeritage.create(ancestry_id: ancestry3.id, heritage_id: heritage20.id)

heritage21 = Heritage.create(name: "Wellspring Gnome")
AncestryHeritage.create(ancestry_id: ancestry3.id, heritage_id: heritage21.id)

heritage22 = Heritage.create(name: "Charhide Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage22.id)

heritage23 = Heritage.create(name: "Irongut Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage23.id)

heritage24 = Heritage.create(name: "Razortooth Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage24.id)

heritage25 = Heritage.create(name: "Snow Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage25.id)

heritage26 = Heritage.create(name: "Tailed Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage26.id)

heritage27 = Heritage.create(name: "Treedweller Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage27.id)

heritage28 = Heritage.create(name: "Unbreakable Goblin")
AncestryHeritage.create(ancestry_id: ancestry4.id, heritage_id: heritage28.id)

heritage29 = Heritage.create(name: "Gutsy Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage29.id)

heritage30 = Heritage.create(name: "Hillock Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage30.id)

heritage31 = Heritage.create(name: "Jinxed Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage31.id)

heritage32 = Heritage.create(name: "Nomadic Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage32.id)

heritage33 = Heritage.create(name: "Observant Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage33.id)

heritage34 = Heritage.create(name: "Twilight Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage34.id)

heritage35 = Heritage.create(name: "Wildwood Halfling")
AncestryHeritage.create(ancestry_id: ancestry5.id, heritage_id: heritage35.id)

heritage36 = Heritage.create(name: "Skilled Heritage")
AncestryHeritage.create(ancestry_id: ancestry6.id, heritage_id: heritage36.id)

heritage37 = Heritage.create(name: "Versatile Heritage")
AncestryHeritage.create(ancestry_id: ancestry6.id, heritage_id: heritage37.id)

heritage38 = Heritage.create(name: "Wintertouched Human")
AncestryHeritage.create(ancestry_id: ancestry6.id, heritage_id: heritage38.id)

heritage39 = Heritage.create(name: "Half-Elf")
AncestryHeritage.create(ancestry_id: ancestry6.id, heritage_id: heritage39.id)

heritage40 = Heritage.create(name: "Half-Orc")
AncestryHeritage.create(ancestry_id: ancestry6.id, heritage_id: heritage40.id)
#Versatile Heritages not included, only core Ancestries included

#---------------------------------------