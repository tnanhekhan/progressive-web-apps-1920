const express = require("express");
const BookRepository = require("../models/repo/book-repository");

const router = express.Router();
const repo = new BookRepository();

router.get("/:id", (req, res) => {
    repo.getBookDetails(req.params.id)
        .then(result => {
            let data = JSON.parse(result.data.trim());
            let bookDetail = {
                title: data.record.titles[0],
                cover: data.record.coverimages[0],
                author: data.record.authors,
                summary: data.record.summaries
            };

            res.render("detail", {
                title: bookDetail.title,
                book: bookDetail,
                returnRoute: req.baseUrl.replace("/book", "")
            });
        });
});

module.exports = router;