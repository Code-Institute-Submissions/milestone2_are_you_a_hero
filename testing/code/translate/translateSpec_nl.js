describe("Translate", function() {
    describe("Translate Dutch text tests", function() {
        language('nl');
        translate();

        it("Should return 'Schurken'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).toBe("Schurken");
        });
        it("Should return 'Schurken' not 'Villains'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).not.toBe("Villains");
        });
        it("Should return 'Schurken' not 'Hello World!'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).not.toBe("Hello World!");
        });
        it("Should return 'Schurken' not null", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).not.toBe("");
        });
        it("Should return 'Naam' not null", function() {
            const boldText = $("#name").text()
            expect(boldText).toBe("Naam");
        });
        it("Should return 'E-mail adres' not null", function() {
            const boldText = $("#email").text()
            expect(boldText).toBe("E-mail adres");
        });
        it("Should return '' not 'Message'", function() {
            const boldText = $("#message").text()
            expect(boldText).toBe("");
        });
    });
});