// setup() is called once at page-load
function setup() {
    createCanvas(800,800); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
    const d = new Date();
    let milis = d.getMilliseconds();

    background(255, 236, 209);
    // alt color: background(241, 250, 238);
    // textSize(32);
    // noStroke();
    // fill(21, 97, 109);
    // text(hr, 10, 30);
    // fill(0, 21, 36);
    // text(min, 10, 60);
    // fill(255, 125, 0);
    // text(sec, 10, 90);

    // circle corresponding to "seconds"
    let sec_col = color(255, 125, 0);
    // alt color: let sec_col = color(230, 57, 70);
    fill(sec_col);
    noStroke();
    circle(400,400,(sec+ (milis/1000))*13);

    // circles corresponding to "minutes"
    noFill();
    strokeWeight(2);
    let min_col = color(0, 21, 36);
    // alt color: let min_col = color(29, 53, 87);
    stroke(min_col);
    for (let x = 1; x < min+1; x += 1){
        circle(400,400,x*13);
    }
    

    // circle corresponding to "hours"
    // goes from 0 to 24
    let hour_col = color(120, 41, 15);
    // alt color: let hour_col = color(69, 123, 157);
    hour_col.setAlpha(180);
    fill(hour_col);
    noStroke();
    circle(400,400,(hr + (min/60))*13*2.5);

    stroke(21, 97, 109);
    strokeWeight(5);
    noFill();
    circle(400,400,60*13);
}