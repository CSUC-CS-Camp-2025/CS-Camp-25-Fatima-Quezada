const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
            e.target.classList.add('active');
    });
    span.addEventListener('animationed', (e) => {
        e.target.classList.remove('active');
});

//Inital animation
setTimeout(() => {
    span.classList.add('acive');
    }, 750 * (idx+1))
});

function setup( ) {
    //Draw canvas and set background
    let canvas = createCanvas (400, 400);
    canvas.position(550,1550);
    let img = createImg('images/MikuHairColoring.PNG');
    img.position(canvas.x, canvas.y);
    img.size(400, 400);
    img.style('position','absolute');
    img.style('pointer-events','none');
    img.style('z-index','10');
    background(255);
    strokeWeight(20);
    colorMode (HSB);
}

function draw() {
    //run every frame, for repeating actions
   if(mouseIsPressed) {
    /*
    circle(mouseX, mouseY,10);
    let lineHue = mouseX - mouseY;
     stroke (lineHue, 90, 90);
    lineHue(pmouseX, pmouseY, mouseX, mouseY);
    */
   circle(mouseX, mouseY, 20 ,20);
   stroke(175,80,90);

    }
}