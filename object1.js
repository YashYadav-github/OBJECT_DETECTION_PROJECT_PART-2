status = "";

function preload(){
img = loadImage("bed.jpeg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()

    objectDetector = ml5.objectDetector('cocossd', ModelLoaded);

    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("#f5672f");
    text("Bed",65,70);
    noFill();
    stroke("#f5672f");
    rect(50, 50, 500, 200);
}

function ModelLoaded(){
    console.log("CocoSSD is loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}