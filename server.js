require('dotenv').config();
const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

server.listen(PORT,(req, res) => {
    console.log(`server is listening at port ${PORT}`);
} )
app.listen()







/* 
// This is called 'common js' system.
const express = require('express');

const app = express();

app.use(express.json());

const books = [
    {
        id: '1',
        name: 'One Hundred Years of Solitude',
        price: '800'
    }, 
    {
        id: '2',
        name: 'The Plague',
        price: '400'
    }, 
    {
        id: '3',
        name: 'Homo Deus',
        price: '300'
    },
    {
        id: '4',
        name: 'Lord of the Rings',
        price: '1000'
    }, 
    {
        id: '5',
        name: 'Plaantik',
        price: '250'
    }, 
]

app.get('/books', (req, res) => {
    // process request
    // response generator
    if(req.query.show === 'all'){
        return res.json(books)
    }

    const result = books.filter((book) => book.price <= 500);
    res.json(result);
})

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);

    res.json(books);
})

app.listen(8000, () => {
    console.log('Server listening at port 8000')
});













- Server application responsibilty

const http = require('http');

const server = http.createServer((req, res) => {

    // Process (Algorithm, DS, DB, Problem Solving)


    if(req.url === '/') {

        // Response(Always same)

        res.write('<h1>Hello World</h1>');
        res.statusCode = 200;
        res.end();
    } else if(req.url === '/hello') {
        res.write('<h1>Hello Guest</h1>');
        res.statusCode = 200;
        res.end();
    } else {
        res.write('<h1>404 Not Found.</h1>');
        res.statusCode = 404;
        res.end()
    }
})

// Request listening (Always same)
server.listen(8000, () => {
    console.log('Server is listening on port 8000');
})

*/