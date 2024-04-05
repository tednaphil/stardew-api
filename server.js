const express = require('express');
const app = express();
app.use(express.json());
// import { nanoid } from 'nanoid';
// const { nanoid } = require('nanoid');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Stardew Valley NPCs';
app.locals.characters = [
    {id: '1', name: 'Bellamy', hobbies: ['playing', 'eating', 'picking flowers'], avatar: ''},
    {id: '2', name: 'Tayla', hobbies: ['shopping', 'gardening', 'skating'], avatar: ''},
    {id: '3', name: 'Tayor', hobbies: ['music', 'hockey', 'mixology'], avatar: ''},
]

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

app.delete('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params;
    console.log(id)
    const character = app.locals.characters.find(char => char.id === id);
    if (!character) {
        return response.sendStatus(404);
    } else {
        app.locals.characters.splice((app.locals.characters.indexOf(character)), 1)
        console.log(app.locals.characters)
        response.sendStatus(202)
    }

})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});