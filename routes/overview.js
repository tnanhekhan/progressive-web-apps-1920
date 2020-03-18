const express = require("express");
const BookRepository = require("../models/repo/book-repository");

const router = express.Router();
const repo = new BookRepository();

router.get("/:topic", (req, res) => {
    res.send("loading...");
    repo.getBooks(req.params.topic, 1)
        .then(result => {
            res.send(req.params.topic);
            console.log(result.data);
        })
});

module.exports = router;