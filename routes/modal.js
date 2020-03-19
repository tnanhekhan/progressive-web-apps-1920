const express = require("express");
const TopicRepository = require("../models/repo/topic-repository.js");

const router = express.Router();
const repo = new TopicRepository();

router.get("/", (req, res) => {
    res.render('modal', {title: 'Spreekbeurt Helper', groups: repo.getGroups()});
});

router.get("/group/:group", (req, res) => {
    res.render('group', {title: "Onderwerp Keuze", group: req.params.group})
});

router.get("/group/:group/:knowsSubject", (req, res) => {
    if (req.query.topic != null) {
        res.redirect(`/topic/${req.query.topic}`);
    }

    if (req.params.knowsSubject === "true") {
        res.render('topic-search', {title: "Onderwerp invullen"});
    } else {
        if (req.params.group < 7) {
            res.render("topic", {title: "Onderwerp kiezen", topics: repo.getTopicsYouth()})
        } else {
            res.render("topic", {title: "Onderwerp kiezen", topics: repo.getTopicsYoungAdults()})
        }
    }
});

module.exports = router;