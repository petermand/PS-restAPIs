 const express = require('express');


 var routes = function(Book) {

    var bookRouter = express.Router();

bookRouter.route('/Books')
    .post(function(req, res){
        let book = new Book(req.body);

        book.save();
        res.status(201).send(book);

    })
    .get(function(req,res){

        var query = {};

        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Book.find(query, function(err,books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    });

bookRouter.route('/Books/:bookId')
    .get(function(req,res){


        Book.findById(req.params.bookId, function(err,book){
            if(err)
                res.status(500).send(err);
            else
                res.json(book);
        });
    });

 };

 module.exports = routes;