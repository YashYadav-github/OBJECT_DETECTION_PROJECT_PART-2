status = "";

function preload(){
    img = loadImage("AC.jpeg");
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
    text("Air Conditioner",80,165);
    noFill();
    stroke("#f5672f");
    rect(70, 150, 400, 100);
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