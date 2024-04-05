# stardew-api

Starting the server
```
git clone worta
cd stardew-api
node server.js
```
Use the command node server.js to begin the sightings API server.

Endpoints
Method	Endpoint	Request Body	Sample Response
GET	'/sightings'	n/a	[{id: 1, location: 'Denver, CO', description: 'Bright lights over Cheesman Park'}]
GET	'/sightings/:id'	n/a	{id: 1, location: 'Denver, CO', description: 'Bright lights over Cheesman Park'}
POST	'/sightings'	{location: 'Somewhere', description: 'Something'}	{id: 2, location: 'Somewhere', description: 'Something'}
DELETE	'/sightings/:id'	n/a	[{id: 2, location: 'Somewhere', description: 'Something'}]
Notes
New sightings do not require an ID from the client
DELETE requests return an array of all the sightings except the one that was deleted
