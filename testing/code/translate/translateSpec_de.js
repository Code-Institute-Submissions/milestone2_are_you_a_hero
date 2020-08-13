describe("Translate", function() {
    beforeEach(function() {
        clearSessionStorage();
        language('de');
    });

    describe("Translate German text tests", function() {
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
    });

    describe("Translate modal text tests", function() {
        beforeEach(function() {
            clearSessionStorage();
            language('de');
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

    /* Clears session storage at end of test */
    function clearSessionStorage() {
        var n = sessionStorage.length;
        while (n--) {
            sessionStorage.removeItem(sessionStorage.key(n));
        }
    };
});