describe("Translate", function() {
    beforeEach(function() {
        translate();
    });
    describe("Starting language tests", function() {
        it("Should return 'en' as starting language", function() {
            expect(sessionStorage.getItem("language")).toBe("en");
        });
        it("Should not return 'nl' as starting language", function() {
            expect(sessionStorage.getItem("language")).not.toBe("nl");
        });
        it("Should not return 'de' as starting language", function() {
            expect(sessionStorage.getItem("language")).not.toBe("de");
        });
        it("Should not return '' as starting language", function() {
            expect(sessionStorage.getItem("language")).not.toBe("");
        });
        it("Should return 'Villains'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).toBe("Villains");
        });
        it("Should return 'Villains' not 'Schurken'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).not.toBe("Schurken");
        });
        it("Should return 'Villains' not 'Hello World!'", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).not.toBe("Hello World!");
        });
        it("Should return 'Villains' not null", function() {
            const boldText = $("[data-translate=villains]");
            expect(boldText[0].textContent).not.toBe("");
        });
        it("Should return 'name' not null", function() {
            const boldText = $("#name").text()
            expect(boldText).toBe("Name");
        });
        it("Should return 'Name' not null", function() {
            const boldText = $("#name").text()
            expect(boldText).toBe("Name");
        });
        it("Should return 'Email' not null", function() {
            const boldText = $("#email").text()
            expect(boldText).toBe("Email");
        });
        it("Should return '' not 'Message'", function() {
            const boldText = $("#message").text()
            expect(boldText).toBe("");
        });
    });
});