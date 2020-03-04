console.log("Script ready");
function moveball (dx, dy) {
  let ballElem = document.getElementById("ball");
  console.log(ballElem.offsetLeft);
    ballElem.style.left = (ballElem.offsetLeft + dx) + "px";
    ballElem.style.top = (ballElem.offsetTop + dy) + "px";
}
let vx=1;
let vy=1;

let balls=[
  {id: 'ball', x:30, y: 30, vx: 1, vy: 1},
    {id: 'square', x:430, y: 430, vx: -1, vy: 1},
    {id: 'image', x:430, y: 430, vx: -1, vy: -1}
]

function bounceballs () {
  let fieldElem = document.getElementById("field");

for (let ball of balls) {
    let ballElem = document.getElementById(ball.id);

  ballElem.style.left = (ballElem.offsetLeft + ball.vx) + "px";

    ballElem.style.top = (ballElem.offsetTop + ball.vy) + "px";

  // console.log(fieldElem.offsetHeight);

    if (ballElem.offsetTop + ballElem.offsetHeight  >= fieldElem.offsetHeight ||ballElem.offsetTop <= 0)
  ball.vy=-ball.vy;
    if (ballElem.offsetLeft + ballElem.offsetWidth  >= fieldElem.offsetWidth || ballElem.offsetLeft <= 10)
ball.vx=-ball.vx;
}
}


function bounceball () {

let fieldElem = document.getElementById("field");
// console.log(fieldElem.offsetWidth);

  let ballElem = document.getElementById("ball");
  // console.log(ballElem.offsetLeft);

  // if (ballElem.offsetLeft + ballElem.offsetWidth < fieldElem.offsetWidth)
    ballElem.style.left = (ballElem.offsetLeft + vx) + "px";
    // if (ballElem.offsetTop + ballElem.offsetHeight  < fieldElem.offsetHeight)
    ballElem.style.top = (ballElem.offsetTop + vy) + "px";
    console.log(fieldElem.offsetHeight);

    if (ballElem.offsetTop + ballElem.offsetHeight  >= fieldElem.offsetHeight ||ballElem.offsetTop <= 0)
    vy=-vy;

    if (ballElem.offsetLeft + ballElem.offsetWidth  >= fieldElem.offsetWidth || ballElem.offsetLeft <= 10)
    vx=-vx;

    // if (ballElem.offsetTop <= 0)
    // vy=1;
    // if (ballElem.offsetLeft <= 0)
    // vx=1;
}
// moveball (200,50);
setInterval (bounceballs, 10);


// ballElem.style.left = (ballElem.offsetLeft + 100) + "px";
// for (let i=0; i<100; i=i+1) {}
