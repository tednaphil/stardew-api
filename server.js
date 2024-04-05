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
    const id = Date.now()
    const newCharacter = request.body;
    newCharacter.id = id
    app.locals.characters.push(newCharacter)
    response.status(201).json(newCharacter)

    //setup default value for avatar src
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});