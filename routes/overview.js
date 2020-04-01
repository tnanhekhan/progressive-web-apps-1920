const express = require("express");
const createError = require('http-errors');
const BookRepository = require("../models/repo/book-repository");

const router = express.Router();
const repo = new BookRepository();


let currentPage = 1;

router.get("/:topic", (req, res, next) => {
    if (req.query.topic != null) {
        res.redirect(`/topic/${req.query.topic}`);
    }

    renderResults(req, res,next);
});

router.get("/:topic/:page", (req, res, next) => {
    if (req.query.topic != null) {
        currentPage = 1;
        res.redirect(`/topic/${req.query.topic}`);
    }F

    currentPage = (parseInt(req.params.page) + 1);
    renderResults(req, res,next);
});

function renderResults(req, res, next) {
    repo.getBooks(req.params.topic, currentPage)
        .then(result => {
            if (!result) {
                next(createError(500))
            }

            let data = JSON.parse(result.data.trim());
            let books = data.results.map(book => {
                return {
                    id: book.frabl.value,
                    title: book.titles[0],
                    cover: book.coverimages[book.coverimages.length - 1],
                    author: book.authors,
                    publisher: book.publisher,
                    summary: book.summaries,
                    description: book.description,
                };
            });
            res.render("overview", {
                title: capitalizeFirstLetter(req.params.topic),
                books: books,
                currentPage: currentPage,
                moreBooksRoute: `/topic/${req.params.topic}/${currentPage}`,
                bookDetailRoute: `/topic/${req.params.topic}/${parseInt(currentPage) - 1}/book/`
            })
        });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = router;