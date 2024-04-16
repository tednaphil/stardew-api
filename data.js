const characters = [
    // {id: 'a', name: 'Bellamy', hobbies: ['playing', 'eating', 'picking flowers'], avatar: ''},
    // {id: 'b', name: 'Tayla', hobbies: ['shopping', 'gardening', 'skating'], avatar: ''},
    // {id: 'c', name: 'Tayor', hobbies: ['music', 'hockey', 'mixology'], avatar: ''},
    {
        "id": "1",
        "name": "Abigail",
        "birthday": 'Fall 13',
        "hobbies": ["playing flute", "mining", "playing video games"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
        "favGifts": ['Amethyst', 'Banana Pudding', 'Blackberry Cobbler', 'Chocolate Cake', 'Monster Compendium', 'Pufferfish', 'Pumpkin', 'Spicy Eel']
      },
      {
        "id": "2",
        "name": "Alex",
        "birthday": 'Summer 13',
        "hobbies": ["playing football", "working out", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
        "favGifts": ['Complete Breakfast', 'Jack Be Nimble, Jack Be Thick', 'Salmon Dinner']
      },
      {
        "id": "3",
        "name": "Elliott",
        "birthday": 'Fall 5',
        "hobbies": ["writing", "reading", "fishing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
        "favGifts": ['Crab Cakes', 'Duck Feather', 'Lobster', 'Pomegranate', 'Squid Ink', 'Tom Kha Soup']
      },
      {
        "id": "4",
        "name": "Emily",
        "birthday": 'Spring 27',
        "hobbies": ["sewing", "making clothes", "baking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
        "favGifts": ['Amethyst', 'Aquamarine', 'Cloth', 'Emerald', 'Jade', 'Ruby', 'Survival Burger', 'Topaz', 'Wool']
      },
      {
        "id": "5",
        "name": "Haley",
        "birthday": 'Spring 14',
        "hobbies": ["photography", "shopping", "sunbathing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
        "favGifts": ['Coconut', 'Fruit Salad', 'Pink Cake', 'Sunflower']
      },
      {
        "id": "6",
        "name": "Harvey",
        "birthday": 'Winter 14',
        "hobbies": ["medicine", "flying drones", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
        "favGifts": ['Coffee', 'Pickles', 'Super Meal', 'Truffle Oil', 'Wine']
      },
      {
        "id": "7",
        "name": "Leah",
        "birthday": 'Winter 23',
        "hobbies": ["painting", "sculpting", "foraging"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
        "favGifts": ['Goat Cheese', 'Poppyseed Muffin', 'Salad', 'Stir Fry', 'Truffle', 'Vegetable Medley', 'Wine']
      },
      {
        "id": "8",
        "name": "Maru",
        "birthday": 'Summer 10',
        "hobbies": ["inventing", "building robots", "playing video games"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
        "favGifts": ['Battery Pack', 'Cauliflower', 'Cheese Cauliflower', 'Diamond', 'Gold Bar', 'Iridium Bar', 'Miner\'s treat', 'Pepper Poppers', 'Radioactive Bar', 'Rhubarb Pie', 'Strawberry']
      },
      {
        "id": "9",
        "name": "Penny",
        "birthday": 'Fall 2',
        "hobbies": ["reading", "helping others", "farming"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
        "favGifts": ['Diamond', 'Emerald', 'Melon', 'Poppy', 'Poppyseed Muffin', 'Red Plate', 'Roots Platter', 'Sandfish', 'Tom Kha Soup']
      },
      {
        "id": "10",
        "name": "Sam",
        "birthday": 'Summer 17',
        "hobbies": ["playing guitar", "skateboarding", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
        "favGifts": ['Cactus Fruit', 'Maple Bar', 'Pizza', 'Tigerseye']
      },
      {
        "id": "11",
        "name": "Sebastian",
        "birthday": 'Winter 10',
        "hobbies": ["programming", "playing video games", "playing guitar"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
        "favGifts": ['Frozen Tear', 'Obsidian', 'Pumpkin Soup', 'Sashimi', 'Void Egg']
      },
      {
        "id": "12",
        "name": "Shane",
        "birthday": 'Spring 20',
        "hobbies": ["raising chickens", "drinking", "playing video games"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
        "favGifts": ['Beer', 'Hot Pepper', 'Pepper Poppers', 'Pizza']
      },
      {
        "id": "13",
        "name": "Caroline",
        "birthday": 'Winter 7',
        "hobbies": ["gardening", "cooking", "writing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
        "favGifts": ['Fish Taco', 'Green Tea', 'Summer Spangle', 'Tropical Curry']
      },
      {
        "id": "14",
        "name": "Clint",
        "birthday": 'Winter 26',
        "hobbies": ["blacksmithing", "mining", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
        "favGifts": ['Amethyst', 'Aquamarine', 'Artichoke Dip', 'Emerald', 'Fiddlehead Risotto', 'Gold Bar', 'Iridium Bar', 'Jade', 'Omni Geode', 'Ruby', 'Topaz']
      },
      {
        "id": "15",
        "name": "Demetrius",
        "birthday": 'Summer 19',
        "hobbies": ["science", "gardening", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
        "favGifts": ['Bean Hotpot', 'Ice Cream', 'Rice Pudding', 'Strawberry']
      },
      {
        "id": "16",
        "name": "Dwarf",
        "birthday": 'Summer 22',
        "hobbies": ["gemology", "mining", "foraging"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
        "favGifts": ['Amethyst', 'Aquamarine', 'Emerald', 'Jade', 'Lava Eel', 'Lemon Stone', 'Omni Geode', 'Ruby', 'Topaz']
      },
      {
        "id": "17",
        "name": "Evelyn",
        "birthday": 'Winter 20',
        "hobbies": ["knitting", "baking", "gardening"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
        "favGifts": ['Beet', 'Chocolate Cake', 'Diamond', 'Fairy Rose', 'Stuffing', 'Tulip', 'Raisins']
      },
      {
        "id": "18",
        "name": "George",
        "birthday": 'Fall 24',
        "hobbies": ["watching TV", "complaining", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
        "favGifts": ['Fried Mushroom', 'Leek']
      },
      {
        "id": "19",
        "name": "Gus",
        "birthday": 'Summer 8',
        "hobbies": ["cooking", "fishing", "playing darts"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
        "favGifts": ['Diamond', 'Escargot', 'Fish Taco', 'Orange', 'Tropical Curry']
      },
      {
        "id": "20",
        "name": "Jas",
        "birthday": 'Summer 4',
        "hobbies": ["playing with animals", "reading", "drawing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
        "favGifts": ['Fairy Rose', 'Pink Cake', 'Plum Pudding']
      },
      {
        "id": "21",
        "name": "Jodi",
        "birthday": 'Fall 11',
        "hobbies": ["cooking", "gardening", "exercising"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
        "favGifts": ['Chocolate Cake', 'Crispy Bass', 'Diamond', 'Eggplant Parmesan', 'Fried Eerl', 'Pancakes', 'Rhubarb Pie', 'Vegetable Medley']
      },
      {
        "id": "22",
        "name": "Kent",
        "birthday": 'Spring 4',
        "hobbies": ["playing video games", "hunting", "exercising"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
        "favGifts": ['Fiddlehead Risotto', 'Roasted Hazelnuts']
      },
      {
        "id": "23",
        "name": "Krobus",
        "birthday": 'Winter 1',
        "hobbies": ["collecting artifacts", "playing chess", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
        "favGifts": ['Diamond', 'Iridium Bar', 'Monster Compendium', 'Pumpkin', 'Void Egg', 'Void Mayonnaise', 'Wild Horseradish']
      },
      {
        "id": "24",
        "name": "Leo",
        "birthday": 'Summer 26',
        "hobbies": ["stargazing", "camping", "drawing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png",
        "favGifts": ['Duck Feather', 'Mango', 'Ostrich Egg', 'Poi']
      },
      {
        "id": "25",
        "name": "Lewis",
        "birthday": 'Spring 7',
        "hobbies": ["governing", "history", "geography"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
        "favGifts": ['Autumn\'s Bounty', 'Glazed Yams', 'Green Tea', 'Hot Pepper', 'Vegetable Medley']
      },
      {
        "id": "26",
        "name": "Linus",
        "birthday": 'Winter 3',
        "hobbies": ["foraging", "camping", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
        "favGifts": ['Blueberry Tart', 'Cactus Fruit', 'Coconut', 'Dish O\' The Sea', 'The Alleyway Buffet', 'Yam']
      },
      {
        "id": "27",
        "name": "Marnie",
        "birthday": 'Fall 18',
        "hobbies": ["farming", "taking care of animals", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
        "favGifts": ['Diamond', 'Farmer\'s Lunch', 'Pink Cake', 'Pumpkin Pie']
      },
      {
        "id": "28",
        "name": "Pam",
        "birthday": 'Spring 18',
        "hobbies": ["drinking", "watching TV", "complaining"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
        "favGifts": ['Beer', 'Cactus Fruit', 'Glazed Yams', 'Mead', 'Pale Ale', 'Parsnip', 'Parsnip Soup', 'Piña Colada']
      },
      {
        "id": "29",
        "name": "Pierre",
        "birthday": 'Spring 26',
        "hobbies": ["business", "cooking", "gardening"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
        "favGifts": ['Fried Calamari', 'Price Catalogue']
      },
      {
        "id": "30",
        "name": "Robin",
        "birthday": 'Fall 21',
        "hobbies": ["carpentry", "gardening", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
        "favGifts": ['Goat Cheese', 'Peach', 'Spaghetti', 'Woody\'s Secret']
      },
      {
        "id": "31",
        "name": "Sandy",
        "birthday": 'Fall 15',
        "hobbies": ["exploring", "collecting rare items", "gardening"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
        "favGifts": ['Crocus', 'Daffodil', 'Mango Sticky Rice','Sweet Pea']
      },
      {
        "id": "32",
        "name": "Vincent",
        "birthday": 'Spring 10',
        "hobbies": ["playing with friends", "drawing", "exploring"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
        "favGifts": ['Cranberry Candy', 'Ginger Ale', 'Grape', 'Pink Cake', 'Snail']
      },
      {
        "id": "33",
        "name": "Willy",
        "birthday": 'Summer 24',
        "hobbies": ["fishing", "exploring", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
        "favGifts": ['Catfish', 'Diamond', 'Iridium Bar', 'Jewels of The Sea', 'Mead', 'Octopus', 'Pumpkin', 'Sea Cucumber', 'Sturgeon', 'The Art O\' Crabbing']
      },
      {
        "id": "34",
        "name": "Wizard",
        "birthday": 'Winter 17',
        "hobbies": ["alchemy", "potion brewing", "divination"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
        "favGifts": ['Book of Mysteries', 'Purple Mushroom', 'Solar Essence', 'Super Cucumber', 'Void Essence']

      }
]


module.exports = {characters}