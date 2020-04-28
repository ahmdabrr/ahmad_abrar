var dotenv = require('dotenv').config()

var username = process.env.USERNAMES; 
var password = process.env.PASSWORDS;
var port = process.env.PORT;
console.log(username);
console.log(password);
console.log(port)