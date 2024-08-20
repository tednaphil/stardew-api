const express = require('express');
const app = express();
const crypto = require('crypto');
const characters = require('./data.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Stardew Valley NPCs';
app.locals.characters = characters.characters;

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
    const character = request.body
    const id = crypto.randomUUID();


    for (let requiredParameter of ['name']) {
        if (!character[requiredParameter]) {
            response.status(422).json({error: `Expected format: { name: <string> }. You're missing a ${requiredParameter} in the request body!`})
            return
        }
    };

    // const charNames = app.locals.characters.map(char => char.name)
    // if (charNames.includes(character.name)) {
    //     return response.status(409)
    // }

    const { name, hobbies = [], avatar = 'https://cdn2.steamgriddb.com/icon/2119b8d43eafcf353e07d7cb5554170b/32/256x256.png'} = character;
    app.locals.characters.push({id, name, hobbies, avatar})
    response.status(201).json({id, name, hobbies, avatar})
})

app.put('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params;
    const update = request.body;
    const character = app.locals.characters.find(char => char.id === id);

    for (let requiredParameter of ['hobby' || 'avatar']) {
        if (!update[requiredParameter]) {
            response.status(422).json({error: `Expected format: { hobby: <string>, avatar: <URLstring>}. Please include a new hobby or avatar link in the request body!`})
            return
        }
    };

    if (!character) {
        return response.sendStatus(404)
    };

    const { hobby, avatar } = request.body
    if (hobby && !character.hobbies.includes(hobby)) {
        character.hobbies = [...character.hobbies, hobby]
    };
    if (avatar) {
        character.avatar = avatar
    };
    response.status(201).json(character)
})

app.delete('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params;
    const chars = app.locals.characters;
    const character = chars.find(char => char.id === id);
    if (!character) {
        return response.sendStatus(404);
    } else {
        chars.splice((chars.indexOf(character)), 1)
        response.sendStatus(204)
    };
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});