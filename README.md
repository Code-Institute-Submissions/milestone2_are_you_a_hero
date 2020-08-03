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
-   In the footer you have the option to play the Avengers Theme song.
-   The whole site is available in the languages English, Dutch and German. This can be changed by clicking on the flag in the menu.
-   Click sounds when answering questions, clicking buttons.


### Features Left to Implement
-   I would like to have the music play accross the site, even if you change pages within the website.
-   I want to put the languages in seperate JSON files.
-   I want to let the German text checked on grammar and spelling.
-   Replace JSON file translation with a Google translation API.


### Pages
-   [index.html](https://volkovbos.github.io/milestone2_are_you_a_hero/index.html)

    -   There is an introduction why I/m a fan of the MCU and what you can find on this site.

-   [play.html](https://volkovbos.github.io/milestone2_are_you_a_hero/play.html)

    -   you can play a game, which contains a set of questions and at the end you'll get a result

-   [result.html](https://volkovbos.github.io/milestone2_are_you_a_hero/result.html)

    -   The result page of the game, with the character who fits the most with the given answers.
    -   A brief sound is played of the character shown.

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

    -   Update of the Avengero font to use it in Firefox and IE

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

### TEST MATRIX
I used a testing matrix in Excel to test the script across several browsers and devices.

### NOTED ISSUES
- [x] The Avengero Fonts are not working in Safari as of the current commit. (resolved)
- [x] The fonts are not working on mobile as of the current commit. (resolved)
- [x] Comic sans font not working on mobile. (resolved)
- [x] Hero modals on mobile not working correclty. (resolved)
- [x] Github won't accept realative path in translate JS "../assets/language/translation.json". Works locally and in Gitpod so it seems this is a Github issue. (resolved by changing the path to "assets/language/translation.json")
- [x] Flags not always working correctly or loading. Locally I see that the German and English flag do not render as *.PNG. (resolved)
- [x] Modals of Thanos and Loki on result page not working. (resolved)

- [ ] On mobile the result page footer doesn't render correct.
- [ ] The message of the email API isn't shown in the actual email.

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