let activeSection = null;

const sectionColors = {
    about: '#ece9a7',
    projects: '#01161E',
    minigame: '#20abb2',
    contact: 'rgba(242, 195, 187, 1)',
};

const BGsectionColors = {
    about: '#4f4c17',
    projects: '#2A4849',
    minigame: '#90c9d6',
    contact: 'rgba(224, 165, 154, 1)',
};

function showSection(sectionId) {
    const currentlyActive = activeSection === sectionId;

    document.querySelectorAll('.nav-btn').forEach(button => {
        button.style.backgroundColor = '#454545c1'; // Reset button colors
    });

    if (currentlyActive) {
        activeSection = null;

        document.getElementById(sectionId).style.display = 'none';
        document.getElementById('default-message').style.display = 'flex';

        document.getElementById('navbar').style.backgroundColor = '#fff4f8e8';
        document.getElementById('content-container').style.backgroundColor = '#5b7168e4';
        document.getElementById('content-container').style.borderColor = '#fff4f8e8';
        document.getElementById('content-container').style.zIndex = 2;
    } else {
        activeSection = sectionId;

        document.getElementById('default-message').style.display = 'none';
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';  // Hide all sections
        });

        const activeButton = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
        const color = sectionColors[sectionId];
        const bgColor = BGsectionColors[sectionId];
        const transparentColor = color.replace('1)', '0.1)');

        activeButton.style.backgroundColor = transparentColor;
        document.getElementById('navbar').style.backgroundColor = color;
        document.getElementById('content-container').style.backgroundColor = bgColor;
        document.getElementById('content-container').style.borderColor = color;
        document.getElementById('content-container').style.zIndex = 2;
        document.getElementById(sectionId).style.display = 'block';
    }
}

////// MINIGAME /////
document.getElementById('redSlider').addEventListener('input', updatePreviewColor);
document.getElementById('greenSlider').addEventListener('input', updatePreviewColor);
document.getElementById('blueSlider').addEventListener('input', updatePreviewColor);

function updatePreviewColor() {
    const r = document.getElementById('redSlider').value;
    const g = document.getElementById('greenSlider').value;
    const b = document.getElementById('blueSlider').value;
    document.querySelector('#previewColor div').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    checkColorMatch();
}

function randomizeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.querySelector('#matchThisColor div').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    checkColorMatch();
}

function checkColorMatch() {
    const preview = document.querySelector('#previewColor div').style.backgroundColor;
    const match = document.querySelector('#matchThisColor div').style.backgroundColor;

    const rgbPreview = preview.match(/\d+/g).map(Number);
    const rgbMatch = match.match(/\d+/g).map(Number);

    const tolerance = 15;
    const isMatch = rgbPreview.every((val, index) => Math.abs(val - rgbMatch[index]) <= tolerance);

    const messageDiv = document.querySelector('#matchThisColor div');
    if (isMatch) {
        messageDiv.innerHTML = "<h2>COLOR MATCHED!</h2>";
    } else {
        messageDiv.innerHTML = "";
    }
}
////// PROJECTS COMPUTER ///////
document.addEventListener('DOMContentLoaded', function () {
    var svgObject = document.getElementById('svgObject');
    svgObject.addEventListener('load', function () {
        var svgDoc = svgObject.contentDocument;
        if (svgDoc) {
            // Handling button clicks
            var buttons = svgDoc.querySelectorAll('.button');
            buttons.forEach(function (button) {
                button.addEventListener('mousedown', function (event) {
                    var rect = event.target.closest('.button');
                    if (rect) {
                        rect.setAttribute('fill', '#3b3930'); // Change color on mouse down
                    }
                    event.stopPropagation();
                });

                button.addEventListener('mouseup', function (event) {
                    var rect = event.target.closest('.button');
                    if (rect) {
                        rect.setAttribute('fill', '#595548'); // Change color back on mouse up
                    }
                    event.stopPropagation();
                });
            });

            // Handling ellipse click
            var ellipse = svgDoc.querySelector('.onOffButton');
            var isEllipseOn = false;
            var images = svgDoc.querySelectorAll('.screenshot');
            var currentImageIndex = 0;
            var imageLinks = [
                "https://editor.p5js.org/lucaspop51/sketches/_FCXqmthU",
                "https://editor.p5js.org/lucaspop51/sketches/JL0metTAs",
                "https://editor.p5js.org/lucaspop51/sketches/5ieyXr2__",
                "https://editor.p5js.org/lucaspop51/sketches/zL132ZBJr",
                "https://editor.p5js.org/lucaspop51/sketches/jO4B9AF9r",
                "https://responsive-digital-clock.vercel.app/"
            ];

            ellipse.addEventListener('click', function (event) {
                var circle = event.target.closest('.onOffButton');
                if (circle) {
                    if (isEllipseOn) {
                        circle.setAttribute('fill', '#646768'); // Toggle to default color
                        images[currentImageIndex].setAttribute('opacity', '0'); // Hide current image
                        svgDoc.getElementById('imgTransparent').setAttribute('opacity', '0'); // Show transparent image
                        // Update computer-preview text
                        document.querySelector('.preview-title').textContent = "_computer offline";
                        document.querySelector('.preview-text').innerHTML = `
                            A problem has been detected and Windows has been shut down to prevent damage to your computer <br>
                            ERROR_SERVICE_DISABLED 1058 <br> (0x422)
                            The service cannot be started, either because it is disabled or because it has no enabled
                            devices associated with it. <br> <br>
                            To solve this problem follow these steps: <br>
                            _turn on computer
                        `;
                    } else {
                        circle.setAttribute('fill', 'green'); // Toggle to green
                        svgDoc.getElementById('imgTransparent').setAttribute('opacity', '0'); // Hide transparent image
                        images[currentImageIndex].setAttribute('opacity', '1'); // Show current image
                        // Update computer-preview text based on the image
                        switch (currentImageIndex) {
                            case 0:
                                document.querySelector('.preview-title').textContent = "_randomNumberGuesser  (1/6)";
                                document.querySelector('.preview-text').textContent = "This p5.js sketch is a number guessing game where the player needs to guess a number between 1 and 100. The sketch generates a random number, and the player inputs their guess. After each guess, the sketch provides feedback on whether the guess is too high, too low, or correct. Additionally, it keeps track of the number of attempts made by the player.";
                                break;
                            case 1:
                                document.querySelector('.preview-title').textContent = "_hangman  (2/6)";
                                document.querySelector('.preview-text').textContent = "This is a p5.js hangman game, where the objective is to guess the word by typing letters. Another person writes a word, and clicks 'start'. The player types letters inside the input area to guess the word. If the guessed letter is correct, it fills in the corresponding blanks in the word. If the letter is incorrect, it starts to draw parts of the hangman. The player wins by guessing the word before the hangman is fully drawn.";
                                break;
                            case 2:
                                document.querySelector('.preview-title').textContent = "_bulletDodger  (3/6)";
                                document.querySelector('.preview-text').textContent = "This p5.js sketch is a bullet dodger game where the player controls a square character at the bottom of the screen using the right and left arrow keys. The objective is to avoid incoming bullets falling from the top of the screen. The player's score increases as they successfully dodge bullets. The game ends when a bullet collides with the player's character.";
                                break;
                            case 3:
                                document.querySelector('.preview-title').textContent = "_registrationPlateGenerator  (4/6)";
                                document.querySelector('.preview-text').textContent = "This p5.js sketch generates random car registration plates. It randomly generates letters and two randomly generated numbers. The colors of the plate background are determined by mapping the ASCII values of the generated letters to RGB values. When the mouse is clicked, new random letters and numbers are generated.";
                                break;
                            case 4:
                                document.querySelector('.preview-title').textContent = "_tickleGame  (5/6)";
                                document.querySelector('.preview-text').textContent = "This p5.js sketch is a simple interactive game called _tickleGame and  involves a moving circle controlled by the mouse cursor. The objective is to keep the mouse cursor over the circle for as long as possible. Each second the cursor remains over the circle, the player's counter increases. The game also tracks and displays the player's high score. ";
                                break;
                            case 5:
                                document.querySelector('.preview-title').textContent = "_responsiveDigitatClockWebsite  (6/6)";
                                document.querySelector('.preview-text').textContent = "This website is elegantly simple, with a sole purpose: to display the current time. It is also responsive to screen size. Try it out!";
                                break;
                            default:
                                break;
                        }
                    }
                    isEllipseOn = !isEllipseOn; // Toggle the state
                }
                event.stopPropagation();
            });

            // Handling prev and next button clicks
            var prevButton = svgDoc.getElementById('prev');
            var nextButton = svgDoc.getElementById('next');

            prevButton.addEventListener('click', function () {
                if (isEllipseOn) {
                    images[currentImageIndex].setAttribute('opacity', '0'); // Hide current image
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Move to previous image
                    images[currentImageIndex].setAttribute('opacity', '1'); // Show new image
                    // Update computer-preview text based on the new image
                    switch (currentImageIndex) {
                        case 0:
                            document.querySelector('.preview-title').textContent = "_randomNumberGuesser  (1/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch is a number guessing game where the player needs to guess a number between 1 and 100. The sketch generates a random number, and the player inputs their guess. After each guess, the sketch provides feedback on whether the guess is too high, too low, or correct. Additionally, it keeps track of the number of attempts made by the player.";
                            break;
                        case 1:
                            document.querySelector('.preview-title').textContent = "_hangman  (2/6)";
                            document.querySelector('.preview-text').textContent = "This is a p5.js hangman game, where the objective is to guess the word by typing letters. Another person writes a word, and clicks 'start'. The player types letters inside the input area to guess the word. If the guessed letter is correct, it fills in the corresponding blanks in the word. If the letter is incorrect, it starts to draw parts of the hangman. The player wins by guessing the word before the hangman is fully drawn.";
                            break;
                        case 2:
                            document.querySelector('.preview-title').textContent = "_bulletDodger  (3/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch is a bullet dodger game where the player controls a square character at the bottom of the screen using the right and left arrow keys. The objective is to avoid incoming bullets falling from the top of the screen. The player's score increases as they successfully dodge bullets. The game ends when a bullet collides with the player's character.";
                            break;
                        case 3:
                            document.querySelector('.preview-title').textContent = "_registrationPlateGenerator  (4/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch generates random car registration plates. It randomly generates letters and two randomly generated numbers. The colors of the plate background are determined by mapping the ASCII values of the generated letters to RGB values. When the mouse is clicked, new random letters and numbers are generated.";
                            break;
                        case 4:
                            document.querySelector('.preview-title').textContent = "_tickleGame  (5/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch is a simple interactive game called _tickleGame and  involves a moving circle controlled by the mouse cursor. The objective is to keep the mouse cursor over the circle for as long as possible. Each second the cursor remains over the circle, the player's counter increases. The game also tracks and displays the player's high score. ";
                            break;
                        case 5:
                            document.querySelector('.preview-title').textContent = "_responsiveDigitatClockWebsite  (6/6)";
                            document.querySelector('.preview-text').textContent = "This website is elegantly simple, with a sole purpose: to display the current time. It is also responsive to screen size. Try it out!";
                            break;
                        default:
                            break;
                    }
                }
            });

            nextButton.addEventListener('click', function () {
                if (isEllipseOn) {
                    images[currentImageIndex].setAttribute('opacity', '0'); // Hide current image
                    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to next image
                    images[currentImageIndex].setAttribute('opacity', '1'); // Show new image
                    // Update computer-preview text based on the new image
                    switch (currentImageIndex) {
                        case 0:
                            document.querySelector('.preview-title').textContent = "_randomNumberGuesser  (1/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch is a number guessing game where the player needs to guess a number between 1 and 100. The sketch generates a random number, and the player inputs their guess. After each guess, the sketch provides feedback on whether the guess is too high, too low, or correct. Additionally, it keeps track of the number of attempts made by the player.";
                            break;
                        case 1:
                            document.querySelector('.preview-title').textContent = "_hangman  (2/6)";
                            document.querySelector('.preview-text').textContent = "This is a p5.js hangman game, where the objective is to guess the word by typing letters. Another person writes a word, and clicks 'start'. The player types letters inside the input area to guess the word. If the guessed letter is correct, it fills in the corresponding blanks in the word. If the letter is incorrect, it starts to draw parts of the hangman. The player wins by guessing the word before the hangman is fully drawn.";
                            break;
                        case 2:
                            document.querySelector('.preview-title').textContent = "_bulletDodger  (3/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch is a bullet dodger game where the player controls a square character at the bottom of the screen using the right and left arrow keys. The objective is to avoid incoming bullets falling from the top of the screen. The player's score increases as they successfully dodge bullets. The game ends when a bullet collides with the player's character.";
                            break;
                        case 3:
                            document.querySelector('.preview-title').textContent = "_registrationPlateGenerator  (4/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch generates random car registration plates. It randomly generates letters and two randomly generated numbers. The colors of the plate background are determined by mapping the ASCII values of the generated letters to RGB values. When the mouse is clicked, new random letters and numbers are generated.";
                            break;
                        case 4:
                            document.querySelector('.preview-title').textContent = "_tickleGame  (5/6)";
                            document.querySelector('.preview-text').textContent = "This p5.js sketch is a simple interactive game called _tickleGame and  involves a moving circle controlled by the mouse cursor. The objective is to keep the mouse cursor over the circle for as long as possible. Each second the cursor remains over the circle, the player's counter increases. The game also tracks and displays the player's high score. ";
                            break;
                        case 5:
                            document.querySelector('.preview-title').textContent = "_responsiveDigitatClockWebsite  (6/6)";
                            document.querySelector('.preview-text').textContent = "This website is elegantly simple, with a sole purpose: to display the current time. It is also responsive to screen size. Try it out!";
                            break;
                        default:
                            break;
                    }
                }
            });

            // Handling acces button click
            var accesButton = svgDoc.getElementById('acces');
            accesButton.addEventListener('click', function () {
                if (isEllipseOn) {
                    // Redirect to the corresponding image link in a new tab
                    window.open(imageLinks[currentImageIndex], '_blank');
                }
            });
        }
    });
});

////// ScrollDown arrow animation //////
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    var arrow = document.getElementById("scroll-down-arrow");
    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    var translateY = Math.min(scrollPercentage, 100); // Ensure translateY doesn't exceed 100%
    arrow.style.transform = "translate(-50%, " + translateY + "vh)";
}
