img="";
status="";

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status: Detecting Object";
}

function modelLoaded(){
    console.log("model is not loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("totally no error");
    }
    console.log("results");
}

function draw(){
image(img,0,0,640,420);
fill("#00BCFF");
text("Dog", 45, 75);
noFill();
stroke("#00BCFF");
rect(30,60,450,350);
fill("#FF0000");
text("Cat", 320, 120);
noFill();
stroke("#FF0000");
rect(300, 90, 270, 320);
}

function preload(){
img=loadImage('dog_cat.jpg');
}