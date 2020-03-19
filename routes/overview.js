const express = require("express");
const BookRepository = require("../models/repo/book-repository");

const router = express.Router();
const repo = new BookRepository();

let currentPage = 1;

router.get("/:topic", (req, res) => {
    if (req.query.topic != null) {
        res.redirect(`/topic/${req.query.topic}`);
    }

    renderResults(req, res);
});

router.get("/:topic/:page", (req, res) => {
    if (req.query.topic != null) {
        currentPage = 1;
        res.redirect(`/topic/${req.query.topic}`);
    }

    currentPage = (parseInt(req.params.page) + 1);
    renderResults(req, res);
});

function renderResults(req, res) {
    repo.getBooks(req.params.topic, currentPage)
        .then(result => {
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