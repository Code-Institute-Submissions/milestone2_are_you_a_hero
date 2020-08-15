describe("Translate", function() {
    describe("Translate German text tests", function() {
        language('de');
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
        it("Should return 'Name' not null", function() {
            const boldText = $("#name").text()
            expect(boldText).toBe("Name");
        });
        it("Should return 'E-mail' not null", function() {
            const boldText = $("#email").text()
            expect(boldText).toBe("E-mail");
        });
        it("Should return '' not 'Message'", function() {
            const boldText = $("#message").text()
            expect(boldText).toBe("");
        });
    });
});