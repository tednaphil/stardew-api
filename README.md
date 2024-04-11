# stardew-api <img style="width: 40px" src="https://cdn2.steamgriddb.com/icon/2119b8d43eafcf353e07d7cb5554170b/32/256x256.png"/>


Starting the server locally
```
git clone git@github.com:tednaphil/stardew-api.git
cd stardew-api
node server.js
```
Server will run at `http://localhost:3000/`
Deployed API link `https://stardew-api.onrender.com`

## Endpoints
| Method | Endpoint | Request Body | Sample Response |
--- | --- | --- | ---
`GET` | `'/api/v1/characters'` | n/a | `[{id: "1", name: "Abigail", hobbies: ["playing flute", "mining", "playing video games"], avatar: "URL"}]`
`GET` | `'/api/v1/characters/:id'` | n/a | `{id: "1", name: "Abigail", hobbies: ["playing flute", "mining", "playing video games"], avatar: "URL"}`
`PUT` | `'/api/v1/characters/:id'` | `{hobby: "shopping", avatar: "newURL"}` | `{id: "1", name: "Abigail", hobbies: ["playing flute", "mining", "playing video games, shopping"], avatar: "newURL"}`
`POST` | `'/api/v1/characters'` | `{name: "Ellis", hobbies: ["hobby1", "hobby2"], avatar: "URL"}` | `{id: "2", name: "Ellis", hobbies: ["hobby1", "hobby2"], avatar: "URL"}`
`DELETE` | `'/api/v1/characters/:id'` | n/a | n/a

### Notes
* POST requests only require a `name` parameter. Default values will be assigned to hobbies and/or avatar.
* PUT requests only require a hobby OR an avatar. Both are not required
