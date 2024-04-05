const express = require('express');
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Stardew Valley NPCs';
app.locals.characters = [
    {id: 1, name: 'Bellamy', hobbies: ['playing', 'eating', 'picking flowers']},
    {id: 2, name: 'Tayla', hobbies: ['shopping', 'gardening', 'skating']},
    {id: 3, name: 'Tayor', hobbies: ['music', 'hockey', 'mixology']}, 
]

app.get('/api/v1/characters', (request, response) => {
    response.status(200).json(app.locals.characters)
})

app.get('/api/v1/characters/:id', (request, response) => {
    const { id } = request.params;
    const character = app.locals.characters.find(char => char.id === id);
    response.status(200).json(character)
    //add sad path for nonexistent character
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});