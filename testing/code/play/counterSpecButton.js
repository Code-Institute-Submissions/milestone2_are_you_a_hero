describe("Counter", function() {
    describe("Scores buttons", function() {
        sessionStorage.setItem("language", "en");

        it("Score Scarlett witch, total should not be 0", function(done) {

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

                var winner = JSON.parse(window.sessionStorage.winner);
                var second = JSON.parse(window.sessionStorage.second);
            });
            expect(winner.score).not.toBe(0);
            done();
        });
    });
});