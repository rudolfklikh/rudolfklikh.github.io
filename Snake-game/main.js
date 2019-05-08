const canvas = document.getElementById('canvas'); // PlayGround
const ctx = canvas.getContext('2d'); // The dimension in which the game will be




const backGround = new Image(); // New Object (Image)
backGround.src = 'img/ground.png'; //   Property that Specifies the path

const foodImg = new Image(); // New Object (Image)
foodImg.src = 'img/food.png'; //   Property that Specifies the path

const  deadAudio = new Audio(); //  New Object (Audio)
const  downAudio = new Audio();  // New Object (Audio)
const  eatAudio = new Audio(); // New Object (Audio)
const  leftAudio = new Audio(); // New Object (Audio)
const  rightAudio = new Audio(); // New Object (Audio)
const  upAudio = new Audio(); // New Object (Audio)
deadAudio.src = 'audio/dead.mp3';   //  Property that Specifies the path
downAudio.src = 'audio/down.mp3'; //  Property that Specifies the path
eatAudio.src = 'audio/eat.mp3'; //  Property that Specifies the path
leftAudio.src = 'audio/left.mp3'; //  Property that Specifies the path
rightAudio.src = 'audio/right.mp3'; //  Property that Specifies the path
upAudio.src = 'audio/up.mp3'; //  Property that Specifies the path

// Variables directly from the game items
const box = 32; // one box size 
let score = 0; // counter eaten Apple


let snake = []; // Snake will be an array of blocks 
snake[0] = { // The head of the snake with the settings for rendering
    x : 9 * box, // X -> Coordinate
    y : 10 * box // Y -> Coordinate
};
let food = { // object Apple with the settings for rendering
    x : Math.floor(Math.random()*17+1) * box, // X -> Coordinate
    y : Math.floor(Math.random()*15+3) * box // Y -> Coordinate
};

let d; // Variable that takes the values of the movement side ,thanks to Event

document.addEventListener("keydown",(event) => { // Function to catch the arrow
    if(event.keyCode == 37 && d != "RIGHT") {
        leftAudio.play(); // When you press the button starts to play a melody
        d = "LEFT";
    }else if(event.keyCode == 38 && d != "DOWN") {
        upAudio.play(); // When you press the button starts to play a melody
        d = "UP";
    }else if(event.keyCode == 39 && d != "LEFT") {
        rightAudio.play(); // When you press the button starts to play a melody
        d = "RIGHT" 
    }else if(event.keyCode == 40 && d != "UP") {
        downAudio.play(); // When you press the button starts to play a melody
        d = "DOWN" 
    }
});


function collision(head, array) { // function to check head - body collision

    for( let i = 0; i < array.length ; i++) {

        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }  
    }
    return false;
}

function draw() { // The render function
    ctx.drawImage(backGround,0,0); //  Drawing the background (starting at position 0,0)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0)? "green" : "white"; // If i = 0 , then this head , and for it style painting will green
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle = 'red';
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    ctx.drawImage(foodImg,food.x,food.y,32,32); // Drawing the apple 
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    switch(d) { // a function that changes the coordinates for subsequent rendering,depending on the value of d
        case 'LEFT' : snakeX -= box; break;
        case 'UP' : snakeY -= box; break;
        case 'RIGHT' : snakeX += box; break;
        case 'DOWN' : snakeY += box; break;
    }

    if(snakeX == food.x && snakeY == food.y) { // If the coordinates of the snake's head coincide with the coordinates of the Apple
        eatAudio.play(); // Sound of eating Apple
        score++; //the counter grows by 1 
        food = { // and the Apple randomly receives new coordinate parameters 
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
    } else { // Otherwise ,the last element of the array is deleted
        snake.pop();
    }
    let newHead = { // An object that is constantly modified based on coordinates
        x : snakeX,
        y : snakeY
    };

    if(snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead,snake) == true) { //Check for all possible variants of loss
        deadAudio.play(); // Sound of Lose
        clearInterval(game); // Termination of the rendering of the game
    }
    snake.unshift(newHead); // Adding an element to the beginning of an array
    ctx.fillStyle = 'white'; // Styles for text
    ctx.font = '45px Changa one';  // Styles for text
    ctx.fillText(score,2.4 * box,1.6 * box);  // Styles for text
}

const  game = setInterval(draw,100); 