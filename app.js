const express = require('express'),
      mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/bookapi');

const Book = require('./models/bookModel');
const app = express();

const port = process.env.PORT || 3000;

const bookRouter = express.Router();

bookRouter.route('/books')
    .get( function (req, res) {
        Book.find(function(err, books){
            if(error)
                res.status(500).send(err);
            else
                res.json(books);
        })

        res.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('welcome to my api');
});

app.listen(port, function () {
    console.log(' Gulp is running on PORT: ' + port);
});