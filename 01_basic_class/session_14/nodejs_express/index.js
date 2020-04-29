const express = require('express');
const app = express();
const port = 5000;

// Middleware parser
app.use(express.json());

//Get
app.get('/', (request, response) => response.status(200).json(
    {
        username: "ahmdabrr",
        password:"qwerty"}));

//Post
app.post('/user', (request, response) => response.status(201).json(
    {
        message: "Insert Success!",
        body: request.body}));

//Put
app.put('/user/:id',(request,response) => response.status(200).json({message: "Updated!"}));

//Delete
app.delete('/user/:id', (request, response) => response.status(200).json({message: "Deleted!"}));

app.listen(port, () => console.log(`App running on port http://localhost:${port}`));