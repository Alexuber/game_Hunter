



const gameArea = document.querySelector('.game-area');
const step = 50;
let bullet = 5;

start();

function createBullet () {
    let bulletBlock = document.querySelector('.bullets-container');
    let bullet = document.createElement('div');
        bullet.className = 'bullet';
    bulletBlock.appendChild(bullet);
}

function createDuck(left) {
    let duck = document.createElement('div');
    let type = getRandom(0,2);

    if (type === 0) {
        type = 'black';
    }   else {
        type = 'red';
    }

    duck.className = 'duck '+ type +'-duck-left';
    duck.style.left = getRandom(0,100) + '%';
    duck.style.top = "100%";
    duck.style.backgroundSize = "cover";

    

    gameArea.appendChild(duck);

    moveDuck(duck, type);
   
}

function moveDuck(duck, type) {
    let imageDuck = 0;

    let direction = directionStart(duck);
    let move = true;

    let timerID = setInterval(()=> {
        imageDuck = imageDuck + 1;

        if (imageDuck > 2) {
            imageDuck = 0;
        }
        if (move == false) {
            direction = changeDirection(direction);
            move = true;
        }

        switch(direction) {
            case 'top-left':
                move = moveTopLeft(duck, type, imageDuck);
                break;
            case 'top-right':
                move = moveTopRight(duck, type, imageDuck);
                break;
            case 'right':
                move = moveRight(duck, type, imageDuck);
                break;
            case 'left':
                move = moveLeft(duck, type, imageDuck);
                break;
            case 'down-left':
                move = moveBottomLeft(duck, type, imageDuck);
                break;
            case 'down-right':
                move = moveBottomRight(duck, type, imageDuck);
                break;
            default:
                move = moveTopLeft(duck, type, imageDuck);
        }

    }, 100);
}

function directionStart(duck) {
    let direction = "top-left";
    let body = document.querySelector('body');

    if (duck.offsetLeft <= body.clientWidth / 2) {
        direction = 'top-right';
    }

    return direction;
}

function changeDirection(before) {
    let random = getRandom(0,6);
    let direction = null;

    switch(random) {
        case 0:
            direction = 'top-left';
            break;
        case 1:
            direction = 'top-right';
            break;
        case 2:
            direction = 'right';
            break;
        case 3:
            direction = 'left';
            break;
        case 4:
            direction = 'down-left';
            break;
        case 5:
            direction = 'down-right';
            break;
        default:
            direction = 'top-left';
    }

    if (direction == before) {
        changeDirection(before);
    } else {
        return direction;
    }
}

function getRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min)) + min;
}



// createDuck(getRandom(0,100) + "%", 'black');
// createDuck(getRandom(0,100) + "%", 'red');
// createDuck(getRandom(0,100) + "%", 'red');


function moveLeft (duck, type, imageDuck) {
    duck.style.backgroundImage = "url(./css/assets/images/duck/"+ type + "/left/" + imageDuck +".png)";
    duck.style.left = duck.offsetLeft - step + 'px';

    if (duck.offsetLeft <= 0) {
        return false;
    }
    return true;
}

function moveRight (duck, type, imageDuck) {
    duck.style.backgroundImage = "url(./css/assets/images/duck/"+ type + "/right/" + imageDuck +".png)";
    duck.style.left = duck.offsetLeft + step + 'px';

    if (duck.offsetLeft >= document.body.clientWidth - duck.clientWidth) {
        return false;
    }
    return true;
    
}

function moveTopLeft (duck, type, imageDuck) {
    duck.style.backgroundImage = "url(./css/assets/images/duck/"+ type + "/top-left/" + imageDuck +".png)";
    duck.style.left = duck.offsetLeft - step + 'px';
    duck.style.top = duck.offsetTop - step + 'px';

    if (duck.offsetLeft <= 0 + duck.clientWidth || duck.offsetTop <= duck.clientHeight) {
        return false;
    }
    return true;
}

function moveTopRight (duck, type, imageDuck) {
    duck.style.backgroundImage = "url(./css/assets/images/duck/"+ type + "/top-right/" + imageDuck +".png)";
    duck.style.left = duck.offsetLeft + step + 'px';
    duck.style.top = duck.offsetTop - step + 'px';
    if (duck.offsetLeft >= (document.body.clientWidth - duck.clientWidth) || duck.offsetTop <= duck.clientHeight) {
        return false;
    }
    return true;
}

function moveBottomLeft (duck, type, imageDuck) {
    duck.style.backgroundImage = "url(./css/assets/images/duck/"+ type + "/top-left/" + imageDuck +".png)";
    duck.style.left = duck.offsetLeft - step + 'px';
    duck.style.top = duck.offsetTop + step + 'px';
    
    if (duck.offsetLeft <= 0 || duck.offsetTop <= gameArea.clientHeight - 10) {
        return false;
    }
    return true;
}

function moveBottomRight (duck, type, imageDuck) {
    duck.style.backgroundImage = "url(./css/assets/images/duck/"+ type + "/top-right/" + imageDuck +".png)";
    duck.style.left = duck.offsetLeft + step + 'px';
    duck.style.top = duck.offsetTop + step + 'px';

    if (duck.offsetLeft >= gameArea.clientWidth - duck.clientWidth  || duck.offsetTop >= gameArea.clientHeight - duck.clientHeight) {
        return false;
    }
    return true;
}

function start () {
    let i =0;
    
    while(i < bullet) {
        
        createBullet();
        createDuck();
        
        i++;
    }
}

