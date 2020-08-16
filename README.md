# Milestone2 Are you a hero ?

[This website](https://volkovbos.github.io/milestone2_are_you_a_hero/index.html) was created for everyone who is an MCU or comics fan, as me. It gives you some brief information about why I like it so much and some information about the characters in the movies. And as last a simple but enjoyable game to see which character matches with your answers on a few questions.

## UX
This site is for general users who want to have a bit of fun and play a simple game in the form of a questionnaire.

### FRAMEWORK
I used Bootstrap for the navbar, the modals and the cards. I used the bootstrap cards to give a nice contrast with the darker barkground image.

### COLOR SCHEME
The color scheme I chose is a red, with a white contrast.

-   `#777777`   (light grey)
-   `#F0131E`   (Marvel red)
-   `#FFF`      (white fonts)
-   `#2B2B2B`   (darkest grey, shadows)

As the main font I chose for the [Avengero Font](https://fontmeme.com/fonts/avengero-font/) designed by Gene Buban.
For the secondary font I used Comic Sans Ms, not ofter used but for the subject of this website very justifiable, and gives a playful character. I've put 

### WIREFRAMES
I used MS Excel to create my wireframes and put them in a separate folder [Wireframes](https://github.com/VolkovBos/milestone2_are_you_a_hero/tree/master/wireframes). I've also put images of screenshots in the folder.

### USER STORIES
-   As a general user, I want to navigate through the site in an orderly fashion, so I can see which information is on the site.
-   As a general user, I want to navigate through the site in an orderly fashion on a mobile view, so I can use the menu and the site on a mobile screen.
-   As a general user, I want to find some information on the MCU character, so I can have some recreational time.
-   As a general user, I want to play a game, so I can see which character matches with me.
-   As a general user, I want to see the given information in my own language, so I can understand what it says.
-   As a general user, I want to get in contact with the creator of the website.

## Features

### Existing Features
-   On all pages there is a clear and obvious menu for the three pages.
-   A navigation menu, which changes to a hamburger menu on smaller screens.
-   A navigation menu, which sticks on the top of the page. And a footer which sticks in the bottom of the screen.
-   When you have the hamburger menu on smaller screens, you get a dropdown menu when clicking the hamburger icon.
-   In the footer there is a email API functionality, by means of a bootstrap modal.
-   In the background you hear the Avengers Theme song, when your browser settings allow this.
-   In the footer you have the option to play the Avengers Theme song.
-   The whole site is available in the languages English, Dutch and German. This can be changed by clicking on the language item in the menu.
-   Click sounds when answering questions, clicking buttons.
-   A quiz with questions where the outcomes are one of the characters on the heroes or villains page.
-   Validations on the email modal.
-   Music plays accross the site, even if you change pages within the website. Or stay off if you paused it.
-   When the sound of the winner is being played, the musicvolume is lower.


### Features Left to Implement
-   I want to put the languages in seperate JSON files.
-   I want to let the content checked on grammar and spelling.
-   Replace JSON file translation with a Google translation API.
-   More interaction in the quiz, not only questions for example "Put these things in order with drag and drop".


### Pages
-   [index.html](https://volkovbos.github.io/milestone2_are_you_a_hero/index.html)

    -   There is an introduction why I'm a fan of the MCU and what you can find on this site.

-   [play.html](https://volkovbos.github.io/milestone2_are_you_a_hero/play.html)

    -   you can play a game, which contains a set of questions and at the end you'll get a result

-   [result.html](https://volkovbos.github.io/milestone2_are_you_a_hero/result.html)

    -   The result page of the game, with the character who fits the most with the given answers.
    -   Also you will get the name of the second character, where you scored on.
    -   A brief sound is played of the character shown.
    -   Play again button, which skips the start section of the play page.

-   [heroes.html](https://volkovbos.github.io/milestone2_are_you_a_hero/heroes.html)

    -   A set of cards with some of my favorite heroes of the MCU.
    -   On the cards are shown an image, the name and a second name of the character.
    -   On the card is a info button, which opens a modal wit more information about the character in the MCU.

-   [villains.html](https://volkovbos.github.io/milestone2_are_you_a_hero/villains.html)
    -   A set of cards with some of my favorite villains of the MCU.
    -   On the cards are shown an image, the name and a second name of the character.
    -   On the card is a info button, which opens a modal wit more information about the character in the MCU.


    ## Technologies Used

Brief overview of the languages, frameworks, and other tools I've used on this project:

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

    -   Semantic markup language as the shell of the site

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

    -   Cascading Style Sheets as the design of the site

-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

    -   to make the website interactive

-   [JSON](https://en.wikipedia.org/wiki/JSON)

    -   for my variables
    -   translation file

-   [Bootstrap](<https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)>)

    -   Components (tables and menu)

-   [Jasmin](<https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework)>)

    -   for testing my JavaScript functions

-   [jQuery](https://jquery.com/)

    -   to simplify DOM manipulation

-   [Font Awesome](https://fontawesome.com)

    -   Use of social media icons

-   [Favicon](https://www.w3.org/2005/10/howto-favicon)

    -   Use of the favicon on the browser tab

-   [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator)

    -   Update of the Avengero and Comic sans font to use it on different browsers.

-   [Visual Studio Code](https://code.visualstudio.com/)

    -   For my development environment

-   [Google](https://developers.google.com/web/tools/chrome-devtools/)

    -   For my developing
    -   For my testing

-   [Github](https://github.com/)

    -   Version control
    -   Share public site

-   [EmailJS](https://www.emailjs.com/)
    -   for the contact email functionality

## TESTING

### Manual testing
All the manual tests where done by myself manually in Chrome, Opera, Safari and Firefox. 

#### Test Matrix
I used a testing matrix in Excel to test the script across several browsers and devices. I also added a file with question paths to come to all possible outcomes you can find the file here [Question paths](https://github.com/VolkovBos/milestone2_are_you_a_hero/tree/master/testing/Question_paths.png). The empty fields are question where there are no answers with scores for that character, if you randomly select an answer for those questions this will have a small impact on the outcome.

#### Test
1. All pages
    - All devices
        1. Menu:
            1. Website name should be visible
            2. Use all menu items and open other pages
            3. Change the language when clicking on language in the menu
            4. Navigate through the site within the chose language
        2. Scroll up and down to see all content
        3. Content should not be behind header or footer
        4. Footer:
            1. Click on name to open GitHub
            2. Click on envelop icon to open email modal
                1. Fill in all field and click on submit to send an email
                    - The fields have placeholder text so you know what you have to fill in
                    - When the form is send, the modal will disappear and a pop up with the text "Thank you for your message!" shows up
                    - When you re-open the modal the fields have been made empty
                2. Fill in a name shorter then 5 character and click on submit to get a popover message that the name should be at least 5 characters
                3. Fill in only whitespaces in the name field en click on submit to get a popover message that the name only contains whitespaces
                3. Fill in only numbers in the name field en click on submit to get a popover message that the name only contains numbers
                5. Fill in a incorrect email (not xx@xx.xx) to get a message that this is incorrect
                6. Fill in a meassage shorter then 10 character and click on submit to get a popover message that the name should be at least 10 characters
                7. Click on the sound icon to play or pause the music
                8. Fill in only whitespaces in the message field en click on submit to get a popover message that the message only contains whitespaces
    - Tablet and mobile
        1. Menu is hidden in hamburger icon
        2. Click on hamburger to open menu
        3. Hold down language item to select language
2. Home page
    - All devices
        1. A introduction is being given about the site and the creator
        2. When opening a the site, Avengers theme should play (see features left to implement), when autoplay is enabled and volume is on
    - Mobile
        1. Check if images are being displayed in the bach rather then on the side
3. Play page
    1. A short introduction is being given about the quiz
    2. A button with play is shown to start a quiz
        1. Start the quiz
        2. Answer 10 questions
            - Questions and answers are being shown in order of 1 to 10
            - Questions and answers which have been answered are hidden
            - You'll get a click sound as confirmation that your answer is given
        3. After the 10th question the result page is shown
4. Result page
    1. You  see 2 cards with information
        1. Card should adjust on screen size (responsive)
        - The left card
            1. You'll get the 'winner' result of the quiz, which character you scored the most points on as shown on the heroes or villains pages.
                1. Open the character information with the info button
                2. Scroll down the page to see all the content
                3. Close the modal with the close button, the x in de top right corner or with escape on a desktop
        - The right card
            1. You'll get the 'winner' result of the quiz, which character you scored the most points on as a header. 
            2. You'll get the 'secondary' result of the quiz, which character you scored the second most points on as a text(although).
            3. You'll get the 'winner' result of the quiz, which character you scored the most points on as a text.
            4. You have a play again button
                - Use the play again button and this must start the quiz again and skip the intro section of the play page
                - Use play in the menu to open the play page and see the intro secion of this page
    2. Check all the possiblie winners in the [Question paths](https://github.com/VolkovBos/milestone2_are_you_a_hero/tree/master/testing/Question_paths.png) document (at least in one device or browser)
5. Heroes and villains pages
    1. 8 cards with different characters should be displayed
    2. Cards should adjust on screen size (responsive)
    3. Open the character information with the info button
    4. Scroll down the page to see all the content
    5. Close the modal with the close button, the x in de top right corner or with escape on a desktop


### Automatic testing
I've used online validators to check my code. The validators that I've used are:

HTML: [HTML Validator](https://validator.w3.org)<br>
CSS: [CSS Validator](https://jigsaw.w3.org/css-validator/)<br>
JavaScript: [JS Hint](https://jshint.com/)<br>
JavaScript: [Esprima](https://esprima.org/demo/validate.html)<br>
JSON: [JSONLint](https://jsonlint.com/)<br>

The HTML Validator let me know that I had empty elements, but that's a design choice for the translation. The CSS validator only validates against valid code. The vendor extensions are proprietary code. As such it will always be warned.

I've used Jasmine to run some automatic tests on the most important JavaScript functions. 

The [audio](https://volkovbos.github.io/milestone2_are_you_a_hero/testing/code/audio/index.html) function was tested, which checks if autoplay is enabled in your browser and if so the music must be playes automatically. I tested this locally beacuase when I ran it on Github I always got the message that my autoplay was disabled (when enabled). So to check the results, run the test on a local host. Also the play/pause functionality in the footer is tested.

The counter function is tested on several ways. [First](https://volkovbos.github.io/milestone2_are_you_a_hero/testing/code/play/play.html) I've tested the given scores and tested the winner and second outcomes and [second](https://volkovbos.github.io/milestone2_are_you_a_hero/testing/code/play/play_button.html) I've tested the actual performed clicks on the answer by a user and matched this with the winner.

As last I tested the [language](https://volkovbos.github.io/milestone2_are_you_a_hero/testing/code/translate/index.html) function for each language and checked if the called text is correct.

Because the site is using sessionstorage, please note that when running these tests your sessionstorage should be empty. Run sessionStorage.clear() in the console of your browser when opening the pages.

I coulnd't combine tests becaude of the syncronized running of several code, so I chose to make multiple jasmine tests.

#### Noted issues
- [x] The Avengero Fonts are not working in Safari as of the current commit.
- [x] The fonts are not working on mobile as of the current commit.
- [x] Comic sans font not working on mobile.
    - Deleted all these fonts from my desktop for better testresults, changed/created new files with [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) and added font-face in CSS file to fix all the above issues.
- [x] Hero modals on mobile not working correclty.
    - Changed the CSS accordingly.
- [x] Github won't accept realative path in translate JS "../assets/language/translation.json". Works locally and in Gitpod so it seems this is a Github issue.
    - resolved by changing the path to "assets/language/translation.json"). This gave a issue with Jasmine testing so I have a copy of the language json file.
- [x] Flags not always working correctly or loading. Locally I see that the German and English flag do not render as *.PNG.
    - Created new images from new files by hand.
- [x] Modals of Thanos and Loki on result page not working.
    - Gave al the card classes with the characters names. This also helped with catching the divs for the result page.
- [x] On mobile the result page footer doesn't render correct.
    - Changed the footer to fixed footer instead of stichy/absolute.
- [x] The message of the email API isn't shown in the actual email.
    - Changed the email template in the EmailJS UI.
- [x] The required modal fields are not always shown as required.
    - Don't yet know how this is solved, the field where always required and now they work. I suspect this has to do with the translation.
- [x] Downloading 30MB of data when opening the site.
    - Changed the translation so that I call the JSON file(s) just once and not seperate for each data-translate element. ($.getJSON("assets/language/translation.json").


## DEPLOYMENT
This project was created using Github.
From there I used Visual Studio Code to write my code.
Then I used commits to git followed by pushes to my GitHub repository.

As my final step I've deployed this project to GitHub Pages from the GitHub repository using the following steps:

1. Login to my GitHub account
2. Go to the [milestone2 are you a hero](https://volkovbos.github.io/milestone2_are_you_a_hero) repository
3. Go to the settings-tab
4. Scroll down to the GitHub Pages section
5. At the GitHub Pages section, choose "master branch" as your source
6. The page will now automatically refresh and the repository deployed
7. You can now scroll down again to the GitHub Pages section to retrieve the link for the website

To run this project locally the following steps should be followed:

1. You can follow [milestone2 are you a hero](https://volkovbos.github.io/milestone2_are_you_a_hero) to my repository
2. Click on the green colored button "Clone or download"
3. Copy the URL that pops up
4. In your local IDE open Git Bash
5. The next step is to change your current working directory to the location you want for your cloned directory
6. Now type in "git clone" and paste the copied URL
7. When you press Enter your local clone will be created

For this project, local deployment was not required.

## CREDITS
The idea for this page was written by myself.

### Content

The text for the heroes and villains modals I used from the [FANDOM](https://marvelcinematicuniverse.fandom.com/) and referenced it like stated in the [licensing statement](https://www.fandom.com/licensing/) under section USING FANDOM CONTENT.

### Media
The background image I got from [Wallpaperaccess](https://wallpaperaccess.com/mcu).

All the hero and villain images I got from [Marvel](https://www.marvel.com/), non-commercial usage.

The flags I used from [Country Flags](https://www.countryflags.com/).

The mouseclick sound I used from [fesliyanstudios](https://www.fesliyanstudios.com), her is there non-commercial use [policy](https://www.fesliyanstudios.com/policy). I edited the mp3 to let the click directly start.

### Acknowledgements
[w3schools](https://www.w3schools.com/) and [StackOverflow](https://stackoverflow.com/) for research.

Thanks to [Tim Nelson](https://github.com/TravelTimN/ci-milestone01-ucfd) for the testing matrix.

Thanks to [Tim (Justim)](https://github.com/justim) for some deeper explanation and clarity about using JSON files with JavaScript and JQuery.