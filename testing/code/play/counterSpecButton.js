describe("Counter", function() {
    const scores = Object.values(characters);
    sessionStorage.setItem("language", "en");

    afterEach(function() {
        for (const sco of scores) {
            sco.score = 0;
        };
    });

    describe("Scores buttons", function() {
        $(document).ready(function() {
            $("button[data-translate='answer1']").trigger('click'); // 2 points
            $("button[data-translate='answer5']").trigger('click'); // 0 points
            $("button[data-translate='answer10']").trigger('click'); // 1 point
            $("button[data-translate='answer16']").trigger('click'); // 2 points
            $("button[data-translate='answer18']").trigger('click'); // 0 points
            $("button[data-translate='answer33']").trigger('click'); // 2 points
            $("button[data-translate='answer40']").trigger('click'); // 2 points
            $("button[data-translate='answer49']").trigger('click'); // 2 points
            $("button[data-translate='answer57']").trigger('click'); // 2 points
            $("button[data-translate='answer22']").trigger('click'); // 0 points
        });

        determineWinner();

        var winner = JSON.parse(window.sessionStorage.winner);
        var second = JSON.parse(window.sessionStorage.second);

        it("Score Scarlett witch, total should not be 0", function() {
            expect(winner.score).not.toBe(0);
        });
        it("Score Scarlett witch, total should be 13 points", function() {
            expect(winner.score).toBe(13);
        });
        it("Score Scarlett witch, name should be 'Scarlett Witch'", function() {
            expect(winner.name).toBe("Scarlett Witch");
        });
        it("Score Scarlett witch, second score should be 5 points", function() {
            expect(second.score).toBe(5);
        });
        it("Score Scarlett witch, second score should be 'Iron Man", function() {
            expect(second.name).toBe("Iron Man");
        });
    });
    /*
        describe("Scores buttons", function() {
            //window.location.href = "play_button.html";

            $(document).ready(function() {
                $("button[data-translate='answer23']").trigger('click'); // 2 points
                $("button[data-translate='answer25']").trigger('click'); // 2 points
                $("button[data-translate='answer12']").trigger('click'); // 2 points
                $("button[data-translate='answer16']").trigger('click'); // 0 points
                $("button[data-translate='answer18']").trigger('click'); // 0 points
                $("button[data-translate='answer37']").trigger('click'); // 1 point
                $("button[data-translate='answer43']").trigger('click'); // 1 point
                $("button[data-translate='answer53']").trigger('click'); // 2 points
                $("button[data-translate='answer54']").trigger('click'); // 2 points
                $("button[data-translate='answer22']").trigger('click'); // 0 points
            });
            determineWinner();

            var winner = JSON.parse(window.sessionStorage.winner);
            var second = JSON.parse(window.sessionStorage.second);

            it("Score Dormammu, total should not be 0", function() {
                expect(winner.score).not.toBe(0);
            });
            it("Score Dormammu, total should be 12 points", function() {
                expect(winner.score).toBe(12);
            });
            it("Score Dormammu, name should be 'Dormammu'", function() {
                expect(winner.name).toBe("Dormammu");
            });
            it("Score Dormammu, second score should be 5 points", function() {
                expect(second.score).toBe(5);
            });
            it("Score Dormammu, second score should be 'Iron Man", function() {
                expect(second.name).toBe("Iron Man");
            });
        });
    */
});