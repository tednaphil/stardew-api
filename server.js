const express = require('express');
const app = express();
app.use(express.json());

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
        // response.status(404).json({error: 'Character not found. Try a different ID'})
    } else {
        response.status(200).json(character)
    }
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});