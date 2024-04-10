const characters = [
    // {id: 'a', name: 'Bellamy', hobbies: ['playing', 'eating', 'picking flowers'], avatar: ''},
    // {id: 'b', name: 'Tayla', hobbies: ['shopping', 'gardening', 'skating'], avatar: ''},
    // {id: 'c', name: 'Tayor', hobbies: ['music', 'hockey', 'mixology'], avatar: ''},
    {
        "id": "1",
        "name": "Abigail",
        "hobbies": ["playing flute", "mining", "playing video games"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png"
      },
      {
        "id": "2",
        "name": "Alex",
        "hobbies": ["playing football", "working out", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png"
      },
      {
        "id": "3",
        "name": "Elliott",
        "hobbies": ["writing", "reading", "fishing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png"
      },
      {
        "id": "4",
        "name": "Emily",
        "hobbies": ["sewing", "making clothes", "baking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png"
      },
      {
        "id": "5",
        "name": "Haley",
        "hobbies": ["photography", "shopping", "sunbathing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png"
      },
      {
        "id": "6",
        "name": "Harvey",
        "hobbies": ["medicine", "flying drones", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png"
      },
      {
        "id": "7",
        "name": "Leah",
        "hobbies": ["painting", "sculpting", "foraging"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png"
      },
      {
        "id": "8",
        "name": "Maru",
        "hobbies": ["inventing", "building robots", "playing video games"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png"
      },
      {
        "id": "9",
        "name": "Penny",
        "hobbies": ["reading", "helping others", "farming"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png"
      },
      {
        "id": "10",
        "name": "Sam",
        "hobbies": ["playing guitar", "skateboarding", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png"
      },
      {
        "id": "11",
        "name": "Sebastian",
        "hobbies": ["programming", "playing video games", "playing guitar"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png"
      },
      {
        "id": "12",
        "name": "Shane",
        "hobbies": ["raising chickens", "drinking", "playing video games"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png"
      },
      {
        "id": "13",
        "name": "Caroline",
        "hobbies": ["gardening", "cooking", "writing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png"
      },
      {
        "id": "14",
        "name": "Clint",
        "hobbies": ["blacksmithing", "mining", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png"
      },
      {
        "id": "15",
        "name": "Demetrius",
        "hobbies": ["science", "gardening", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png"
      },
      {
        "id": "16",
        "name": "Dwarf",
        "hobbies": ["gemology", "mining", "foraging"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png"
      },
      {
        "id": "17",
        "name": "Evelyn",
        "hobbies": ["knitting", "baking", "gardening"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png"
      },
      {
        "id": "18",
        "name": "George",
        "hobbies": ["watching TV", "complaining", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png"
      },
      {
        "id": "19",
        "name": "Gus",
        "hobbies": ["cooking", "fishing", "playing darts"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png"
      },
      {
        "id": "20",
        "name": "Jas",
        "hobbies": ["playing with animals", "reading", "drawing"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png"
      },
      {
        "id": "21",
        "name": "Jodi",
        "hobbies": ["cooking", "gardening", "exercising"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png"
      },
      {
        "id": "22",
        "name": "Kent",
        "hobbies": ["playing video games", "hunting", "exercising"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png"
      },
      {
        "id": "23",
        "name": "Krobus",
        "hobbies": ["collecting artifacts", "playing chess", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png"
      },
      //Leo, Lewis
      {
        "id": "24",
        "name": "Linus",
        "hobbies": ["foraging", "camping", "reading"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png"
      },
      {
        "id": "25",
        "name": "Marnie",
        "hobbies": ["farming", "taking care of animals", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png"
      },
      {
        "id": "26",
        "name": "Pam",
        "hobbies": ["drinking", "watching TV", "complaining"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png"
      },
      {
        "id": "27",
        "name": "Pierre",
        "hobbies": ["business", "cooking", "gardening"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png"
      },
      {
        "id": "28",
        "name": "Robin",
        "hobbies": ["carpentry", "gardening", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png"
      },
      {
        "id": "29",
        "name": "Sandy",
        "hobbies": ["exploring", "collecting rare items", "gardening"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png"
      },
      {
        "id": "30",
        "name": "Vincent",
        "hobbies": ["playing with friends", "drawing", "exploring"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png"
      },
      {
        "id": "31",
        "name": "Willy",
        "hobbies": ["fishing", "exploring", "cooking"],
        "avatar": "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png"
      }
      //wizard
      //consider including non-giftable folks - you can't befriend them though so it may not be useful
]
//handroll avatars and additional properties (e.g. birthday, species, fav gifts, family)

module.exports = {characters}