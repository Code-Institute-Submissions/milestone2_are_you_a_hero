describe("Translate", function() {
    /* When performing the test in Jasmine, the clicks are in logical order so:
        - clear the cache of the browser 
        - run all tests
        - run tests not in random order
    */

    sessionStorage.clear();

    describe("tests", function() {

        it("Should return a zero as starting language", function() {
            /* https://stackoverflow.com/questions/13530365/jasmine-expect-logic-expect-a-or-b */
            expect(sessionStorage.getItem("language") == null || sessionStorage.getItem("language") == 0).toBe(true);
            expect(current_lang_index == 0 || current_lang_index == "0").toBe(true);
            expect(current_lang).toBe("en");
        });

        it("Should return a 1 as the language", function() {
            $("a").click();
            expect(sessionStorage.getItem("language")).toBe("1");
        });
        it("Should return a 1 as the language index", function() {
            expect(current_lang_index).toBe(1);
        });
        it("Should return a 'nl' as the language", function() {
            expect(current_lang).toBe("nl");
        });
        it("Should return 'Schurken (nl)'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).toBe("Schurken (nl)");
        });


        it("Should return a 2 as the language", function() {
            $("a").click();
            expect(sessionStorage.getItem("language")).toBe("2");
        });
        it("Should return a 2 as the language index", function() {
            expect(current_lang_index).toBe(2);
        });
        it("Should return a 'de' as the language", function() {
            expect(current_lang).toBe("de");
        });
        it("Should return 'Schurken (de)'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).toBe("Schurken (de)");
        });

        it("Should return a 0 as the language", function() {
            $("a").click();
            expect(sessionStorage.getItem("language")).toBe("0");
        });
        it("Should return a 0 as the language index", function() {
            expect(current_lang_index).toBe(0);
        });
        it("Should return a 'en' as the language", function() {
            expect(current_lang).toBe("en");
        });
        it("Should return 'Villains'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).toBe("Villains");
        });
    });
});