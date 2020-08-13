describe("Counter", function() {
    const scores = Object.values(characters);
    sessionStorage.setItem("language", "en");

    afterEach(function() {
        for (const sco of scores) {
            sco.score = 0;
        };
    });

    describe("Varibles", function() {
        it("Varibles should return 0", function() {
            expect(highest).toBe(0);
            expect(second).toBe(0);
        });
        it("Varibles should return page.html", function() {
            expect(page).toEqual("play.html");
        });
    });

    describe("Scores counter", function() {
        it("Scores should be 0", function() {
            for (const sco of scores) {
                expect(sco.score).toBe(0);
            };
        });

        it("Iron man should return 1 and none other", function() {
            count(".ironMan");

            for (const sco of scores) {
                if (sco.name != "Iron Man") {
                    expect(sco.score).toBe(0);

                } else if (sco.name == "Iron Man") {
                    expect(sco.score).toBe(1);
                }
            };
        });

        it("Captain America should return 1 and none other", function() {
            count(".captainAmerica");

            for (const sco of scores) {
                if (sco.name != "Captain America") {
                    expect(sco.score).toBe(0);

                } else if (sco.name == "Captain America") {
                    expect(sco.score).toBe(1);
                }
            };
        });

        it("Captain America should be the winner and Iron man should be second", function() {
            count(".captainAmerica");
            count(".captainAmerica");
            count(".ironMan");
            determineWinner();

            var winner = JSON.parse(window.sessionStorage.winner);
            var second = JSON.parse(window.sessionStorage.second);

            expect(winner.name).toBe("Captain America");
            expect(winner.score).toBe(2);
            expect(second.name).toBe("Iron Man");
            expect(second.score).toBe(1);
        });

        it("Scarlett Witch should not be the winner or be second", function() {
            count(".captainAmerica");
            count(".captainAmerica");
            count(".ironMan");
            determineWinner();

            var winner = JSON.parse(window.sessionStorage.winner);
            var second = JSON.parse(window.sessionStorage.second);

            expect(winner.name).not.toBe("Scarlett Witch");
            expect(second.name).not.toBe("Scarlett Witch");
        });

        it("Winner and second place should not be 0", function() {
            count(".captainAmerica");
            count(".captainAmerica");
            count(".ironMan");
            determineWinner();

            var winner = JSON.parse(window.sessionStorage.winner);
            var second = JSON.parse(window.sessionStorage.second);

            expect(winner.score).not.toBe(0);
            expect(second.score).not.toBe(0);
        });

        it("Winner and second place should not be null", function() {
            count(".captainAmerica");
            count(".captainAmerica");
            count(".ironMan");
            determineWinner();

            var winner = JSON.parse(window.sessionStorage.winner);
            var second = JSON.parse(window.sessionStorage.second);

            expect(winner.score).not.toBe(null);
            expect(second.score).not.toBe(null);
        });
    });
});