// game variables
let p1Score = 0;
let p2Score = 0;
let playTo = 5;
let gameLock = false;

// grabbing the html elements
let p1Btn = document.querySelector("#p1");
let p2Btn = document.querySelector("#p2");
let resetBtn = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let playToNum = document.querySelector("#num");

// reset function
function resetGame() {
    // reset score
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    // unlock game
    gameLock = false;
    // reset point colors to black
    p1Display.style.color = "black";
    p2Display.style.color = "black";
}

// add an event listener to button p1Btn
p1Btn.addEventListener("click", function () {
    // check to see if the game is locked
    if (!gameLock) {
        // check to see what score we are playing to
        if (p1Score < playTo) {
            p1Score++;
            p1Display.textContent = p1Score;
            if (p1Score === playTo) {
                p1Display.style.color = "green";
                gameLock = true;
            }   
        } 
    }
});

// add an event listener to button p2Btn
p2Btn.addEventListener("click", function () {
    // check to see if the game is locked
    if (!gameLock) {
        // check to see what score we are playing to
        if (p2Score < playTo) {
            p2Score++;
            p2Display.textContent = p2Score;
            if (p2Score === playTo) {
                p2Display.style.color = "green";
                gameLock = true; 
            }  
        }
    }
});

// add an event listener to playToNum input
playToNum.addEventListener("input", function () {
    // check to see if the game is locked
    if (!gameLock) {
        playTo = Number(this.value);
        document.querySelector("#playTo").textContent = playTo;
        resetGame();
    }
})

// Add an event listener to button resetBtn
resetBtn.addEventListener("click", function () {
    // reset score
    resetGame();
    // reset playTo variable to what ever the value of the input number field is
    playTo = Number(playToNum.value);
    document.querySelector("#playTo").textContent = playTo;
});