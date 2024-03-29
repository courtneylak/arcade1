// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 10;
    this.y - 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += 1;
    if (this.x > 500) {
        this.x = -100;   
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

var allEnemies = [new Enemy(-200, 65), new Enemy(-150, 145), new Enemy(-100, 230)];
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 350;
};
Player.prototype.update = function(dt) {
    for (let enemy of allEnemies) {
        let deltax = this.x - enemy.x - 15;
        let deltay = this.y - enemy.y - 20;
        let distance = Math.sqrt(deltax * deltax + deltay * deltay);
        if (distance < 56) {
            console.log('hit');
        }
    }

    if (this.y < 10) {
        console.log('woot!');
        this.y = 410;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(dt) {
    switch (dt) {
        case "up":
            this.y -= 50;
            break;
        case "down":
            this.y += 50;
            break;
        case "left":
            this.x -= 50;
            break;
        case "right":
            this.x += 50;
            break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
