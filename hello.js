const http = require('http');
var HttpPage = require('./http');
var httpConsole = new HttpPage(http);

const os = require('os');
const greeting = require('./greeting');
const User = require('./user');
const SoundPage = require('./sound');

var userName = os.userInfo().username;
var alex = new User(userName, 32);

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

alex.displayInfo();
alex.sayHi();