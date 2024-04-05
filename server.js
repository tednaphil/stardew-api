const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Stardew Valley NPCs';
app.locals.characters = [
    {id: 1, name: 'Bellamy', hobbies: ['playing', 'eating', 'picking flowers']},
    {id: 2, name: 'Tayla', hobbies: ['shopping', 'gardening', 'skating']},
    {id: 3, name: 'Tayor', hobbies: ['music', 'hockey', 'mixology']}, 
]

app.get('/', (request, response) => {
    response.send(app.locals.characters)
})

// app.get('/', (request, response) => {
//   response.send('Oh hey Pet Box');
// });


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});