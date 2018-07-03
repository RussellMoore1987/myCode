// DRY = Don't repeat yourself
// functions
    function changeColors(color) {
        for (let i = 0; i < squares.length; i++) {
            // add initial square colors
            squares[i].style.backgroundColor = color;
        }    
    } 

    function pickColor() {
        // get random number for colors array
        let randomNum = Math.floor(Math.random() * colors.length);
        return colors[randomNum];
    }

    function generateRandomColors(numOfArrays) {
        // Make empty array
        let arr = [];
        // Add colors to an array
        for (let i = 0; i < numOfArrays; i++) {
            // get random color and push in to array
            arr.push(randomColor());
        }  
        return arr;  
    }

    function randomColor() {
        // pick a "red" from 0 - 255 
        let red = Math.floor(Math.random() * 256);       
        // pick a "green" from 0 - 255       
        let green = Math.floor(Math.random() * 256);       
        // pick a "blue" from 0 - 255       
        let blue = Math.floor(Math.random() * 256);
        // make full color
        let color = "rgb(" + red + ", " + green + ", " + blue + ")"; 
        return color;    
    }

    function reset() {
        // get new colors for squares
        colors = generateRandomColors(numSquares);
        // pick a new color to guess
        pickedColor = pickColor(); 
        // change the color display (mainRGB) to the new pic color 
        mainRGB.textContent = pickedColor;
        // reset colorDisplay
        colorDisplay.style.color = "#8d8d8d";
        // reset Messages
        messageDisplay.innerHTML = "&nbsp;";
        resetBtn.textContent = "New Colors";
        // change squared colors 
        for (let i = 0; i < squares.length; i++) {
            // check to see the mode
            if (colors[i]) {
                // add square colors
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
                squares[i].classList.remove("noShadow")
            } else {
                // hide square
                squares[i].style.display = "none";
            }
        }        
    }
    
    function setUpModeButtons() {
        // mode switchers
        for (let i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener("click", function () {
                // Remove selected class
                for (let j = 0; j < modeButtons.length; j++) {
                    modeButtons[j].classList.remove("selected");
                }
                // add selected class to btn clicked
                this.classList.add("selected");
                // check what button was clicked, switch mode
                switch (this.textContent) {
                    case "Easy": numSquares = 3; break;
                    case "Hard": numSquares = 6; break;
                    case "Extra Hard": numSquares = 9; break;
                }
                // reset content
                reset();
            });    
        }  
    }

    function setUpSquares() {
        for (let i = 0; i < squares.length; i++) {
            // Add it event listener to each square
            squares[i].addEventListener("click", function () {
                let checkSquare = this.style.backgroundColor;
                // Check to see if it is the correct color square 
                if (checkSquare === pickedColor) {
                    // Show success message
                    messageDisplay.innerHTML = "<span class='success'>Correct!</span>";
                    resetBtn.textContent = "Play Again?";
                    // Loop over all color squares and give them The correct color
                    changeColors(pickedColor);
                    // reset colorDisplay
                    colorDisplay.style.color = pickedColor;
                } else {
                    // Show try again message
                    messageDisplay.innerHTML = "<span class='error'>Try Again!</span>"
                    // Hide color square
                    this.style.backgroundColor = "#ffffff"; 
                    this.classList.add("noShadow")
                }               
            });
        }    
    }

    function init() {
        // Initial loop over of code
        setUpSquares();
        // Initial set up of colors
        reset();
        // reset button
        resetBtn.addEventListener("click", function () {
            reset();
        });
        // set up mode btn's
        setUpModeButtons();
    }

// Game variables
    // mode 6 = hard, 3 = easy
    let numSquares = 6;
    // get colors for squares
    let colors = [];
    // pick the color to guess
    let pickedColor;
    // get all the squares
    let squares = document.querySelectorAll(".square");
    // get the span color to guess (html view) 
    let mainRGB = document.querySelector("#mainRGB");
    // get colorDisplay
    let colorDisplay = document.querySelector("#mainRGB");
    // Message display for try again and selected the correct one
    let messageDisplay = document.querySelector("#message");
    // mode btns
    let modeButtons = document.querySelectorAll(".mode");
    // get reset btn
    let resetBtn = document.querySelector("#reset");
    

// game Logic
    init();