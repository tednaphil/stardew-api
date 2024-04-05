const express = require('express');
const app = express();
app.use(express.json());
// import { nanoid } from 'nanoid';
// const { nanoid } = require('nanoid');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Stardew Valley NPCs';
app.locals.characters = [
    {id: 'a', name: 'Bellamy', hobbies: ['playing', 'eating', 'picking flowers'], avatar: ''},
    {id: 'b', name: 'Tayla', hobbies: ['shopping', 'gardening', 'skating'], avatar: ''},
    {id: 'c', name: 'Tayor', hobbies: ['music', 'hockey', 'mixology'], avatar: ''},
    {
        "id": "1",
        "name": "Abigail",
        "hobbies": ["playing flute", "mining", "playing video games"],
        "avatar": ""
      },
      {
        "id": "2",
        "name": "Alex",
        "hobbies": ["playing football", "working out", "cooking"],
        "avatar": ""
      },
      {
        "id": "3",
        "name": "Elliott",
        "hobbies": ["writing", "reading", "fishing"],
        "avatar": ""
      },
      {
        "id": "4",
        "name": "Emily",
        "hobbies": ["sewing", "making clothes", "baking"],
        "avatar": ""
      },
      {
        "id": "5",
        "name": "Haley",
        "hobbies": ["photography", "shopping", "sunbathing"],
        "avatar": ""
      },
      {
        "id": "6",
        "name": "Harvey",
        "hobbies": ["medicine", "flying drones", "cooking"],
        "avatar": ""
      },
      {
        "id": "7",
        "name": "Leah",
        "hobbies": ["painting", "sculpting", "foraging"],
        "avatar": ""
      },
      {
        "id": "8",
        "name": "Maru",
        "hobbies": ["inventing", "building robots", "playing video games"],
        "avatar": ""
      },
      {
        "id": "9",
        "name": "Penny",
        "hobbies": ["reading", "helping others", "farming"],
        "avatar": ""
      },
      {
        "id": "10",
        "name": "Sam",
        "hobbies": ["playing guitar", "skateboarding", "cooking"],
        "avatar": ""
      },
      {
        "id": "11",
        "name": "Sebastian",
        "hobbies": ["programming", "playing video games", "playing guitar"],
        "avatar": ""
      },
      {
        "id": "12",
        "name": "Shane",
        "hobbies": ["raising chickens", "drinking", "playing video games"],
        "avatar": ""
      },
      {
        "id": "13",
        "name": "Caroline",
        "hobbies": ["gardening", "cooking", "writing"],
        "avatar": ""
      },
      {
        "id": "14",
        "name": "Clint",
        "hobbies": ["blacksmithing", "mining", "reading"],
        "avatar": ""
      },
      {
        "id": "15",
        "name": "Demetrius",
        "hobbies": ["science", "gardening", "cooking"],
        "avatar": ""
      },
      {
        "id": "16",
        "name": "Dwarf",
        "hobbies": ["gemology", "mining", "foraging"],
        "avatar": ""
      },
      {
        "id": "17",
        "name": "Evelyn",
        "hobbies": ["knitting", "baking", "gardening"],
        "avatar": ""
      },
      {
        "id": "18",
        "name": "George",
        "hobbies": ["watching TV", "complaining", "reading"],
        "avatar": ""
      },
      {
        "id": "19",
        "name": "Gus",
        "hobbies": ["cooking", "fishing", "playing darts"],
        "avatar": ""
      },
      {
        "id": "20",
        "name": "Jas",
        "hobbies": ["playing with animals", "reading", "drawing"],
        "avatar": ""
      },
      {
        "id": "21",
        "name": "Jodi",
        "hobbies": ["cooking", "gardening", "exercising"],
        "avatar": ""
      },
      {
        "id": "22",
        "name": "Kent",
        "hobbies": ["playing video games", "hunting", "exercising"],
        "avatar": ""
      },
      {
        "id": "23",
        "name": "Krobus",
        "hobbies": ["collecting artifacts", "playing chess", "reading"],
        "avatar": ""
      },
      {
        "id": "24",
        "name": "Linus",
        "hobbies": ["foraging", "camping", "reading"],
        "avatar": ""
      },
      {
        "id": "25",
        "name": "Marnie",
        "hobbies": ["farming", "taking care of animals", "cooking"],
        "avatar": ""
      },
      {
        "id": "26",
        "name": "Pam",
        "hobbies": ["drinking", "watching TV", "complaining"],
        "avatar": ""
      },
      {
        "id": "27",
        "name": "Pierre",
        "hobbies": ["business", "cooking", "gardening"],
        "avatar": ""
      },
      {
        "id": "28",
        "name": "Robin",
        "hobbies": ["carpentry", "gardening", "cooking"],
        "avatar": ""
      },
      {
        "id": "29",
        "name": "Sandy",
        "hobbies": ["exploring", "collecting rare items", "gardening"],
        "avatar": ""
      },
      {
        "id": "30",
        "name": "Vincent",
        "hobbies": ["playing with friends", "drawing", "exploring"],
        "avatar": ""
      },
      {
        "id": "31",
        "name": "Willy",
        "hobbies": ["fishing", "exploring", "cooking"],
        "avatar": ""
      }
]
//handroll avatars and additional properties (e.g. birthday, fav gifts, family)

app.get('/api/v1/characters', (request, response) => {
    if (!app.locals.characters) {
        return response.sendStatus(404)
    }
    response.status(200).json(app.locals.characters)
})

app.get('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params;
    const character = app.locals.characters.find(char => char.id === id);
    if (!character) {
        return response.sendStatus(404);
    } else {
        response.status(200).json(character)
    }
})

app.post('/api/v1/characters', (request, response) => {
    // const id = nanoid(10);
    const character = request.body
    const id = Date.now().toString()

    for (let requiredParameter of ['name']) {
        if (!character[requiredParameter]) {
            response.status(422).json({error: `Expected format: { name: <string> }. You're missing a ${requiredParameter} in the request body!`})
            return
        }
    }

    // const charNames = app.locals.characters.map(char => char.name)
    // if (charNames.includes(character.name)) {
    //     return response.status(409)
    // }

    const { name, hobbies = [], avatar = 'https://cdn2.steamgriddb.com/icon/2119b8d43eafcf353e07d7cb5554170b/32/256x256.png'} = character;
    app.locals.characters.push({id, name, hobbies, avatar})
    response.status(201).json({id, name, hobbies, avatar})
})

app.put('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params
    const { hobby, avatar } = request.body
    const character = app.locals.characters.find(char => char.id === id);
    if (hobby && !character.hobbies.includes(hobby)) {
        character.hobbies = [...character.hobbies, hobby]
    }
    if (avatar) {
        character.avatar = avatar
    }
    response.status(200).json(character) //should I go back to using 204 status code instead?
})
//add error status for unsuccesful puts and/or missing parameters

app.delete('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params;
    const character = app.locals.characters.find(char => char.id === id);
    if (!character) {
        return response.sendStatus(404);
    } else {
        app.locals.characters.splice((app.locals.characters.indexOf(character)), 1)
        response.sendStatus(202)
    }
})
//refactor to use chars variable to reduce redundancy


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});