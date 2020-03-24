class TopicRepository {
    getGroups() {
        return ["Groep 4", "Groep 5", "Groep 6", "Groep 7", "Groep 8"];
    }

    getTopicsYoungAdults() {
        return [
            ["Jaargetijden"],
            ["Lente"],
            ["Zomer"],
            ["Herfst"],
            ["Winter"],
            ["Pasen"],
            ["Landen"],
            ["Nederland"],
            ["Frankrijk"],
            ["Amsterdam"],
            ["Afrika"],
            ["Suriname"],
            ["Middeleeuwen"],
            ["Reizen"],
            ["Eten"],
            ["Muziek"]
        ];
    }

    getTopicsYouth() {
        return [
            ["Dieren"],
            ["Honden"],
            ["Katten",],
            ["Paarden"],
            ["Vogels"],
            ["Huisdieren"],
            ["Dolfijnen"],
            ["Sport"],
            ["Voetbal"],
            ["Mode"],
            ["Kleding"],
            ["Winkelen"],
            ["Eten"],
            ["Muziek"]
        ];
    }
}

module.exports = TopicRepository;
