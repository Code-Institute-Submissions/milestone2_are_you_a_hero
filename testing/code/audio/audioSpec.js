describe("Translate", function() {
    var audioPause;

    it('Audio should be automatically playing', function() {
        var promise = audio.play();

        if (promise !== undefined) {
            promise.then(_ => {
                audioPause = audio.paused;

            }).catch(error => {
                console.log("Enable autoplay music in your browser!");
                audioPause = true;

            });
        }
        audioPause = audio.paused;
        expect(audioPause).toBe(false);
    });
    it('Audio should be paused', function() {
        audio.pause()

        audioPause = audio.paused;
        expect(audioPause).toBe(true);
    });
    it('Audio should be playing again', function() {
        audio.play()

        audioPause = audio.paused;
        expect(audioPause).toBe(false);
    });
});